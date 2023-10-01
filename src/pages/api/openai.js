// pages/api/openai.js
import crypto from 'crypto'
import { encryptedAIPrompt } from "@/components/encryptedAIPrompt";

// Decryption function
function decrypt(text, key) {
  let textParts = text.split(':');
  const iv = Buffer.from(textParts.shift(), 'hex');
  const encryptedText = Buffer.from(textParts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key, 'hex'), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

function getDecryptedAIPrompt() {
  const key = process.env.PROMPT_DECRYPTION_KEY; // Your decryption key from .env
  return decrypt(encryptedAIPrompt, key);
}

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
      const aiPrompt = getDecryptedAIPrompt();
      const apiFormattedMessages = [
        { role: "system", content: aiPrompt },
        ...req.body.messages
      ];

      const payload = {
        model: "gpt-3.5-turbo",
        messages: apiFormattedMessages
      };

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify(payload),
      });

      if (response.status === 429) { // Status code for rate limit exceeded
        const data = await response.json();
        res.status(429).json(data); // Send the same rate-limit error to the client
        return;
      }

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error.message || "OpenAI API Error");
      }

      res.status(200).json(data);

    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
