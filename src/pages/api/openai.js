// pages/api/openai.js
import { aiPrompt } from "@/components/aiPrompt";

export default async (req, res) => {
  if (req.method === 'POST') {
    try {
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

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};