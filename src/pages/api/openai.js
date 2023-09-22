// pages/api/openai.js

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req, res) => {

    const sessionId = req.body.sessionId;
    if (req.method === 'POST') {
      try {
        const payload = {
          model: "gpt-3.5-turbo",
          messages: req.body.messages
        };
  
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}` // Note: Removed NEXT_PUBLIC_ prefix
          },
          body: JSON.stringify(payload),
        });
  
        const data = await response.json();

        // Check if ChatSession exists with given sessionId
        let chatSession = await prisma.chatSession.findUnique({
          where: { id: sessionId },
        });

        // If ChatSession doesn't exist, create a new one
        if (!chatSession) {
          chatSession = await prisma.chatSession.create({
              data: { id: sessionId },
          });
        }

        // Now, you can safely create the messages associated with the ChatSession
        await prisma.message.create({
          data: {
              content: req.body.messages.slice(-1)[0].content,
              role: 'user',
              chatSession: {
                  connect: { id: sessionId }
              }
          }
        });
        await prisma.message.create({
          data: {
              content: data.choices[0].message.content,
              role: 'assistant',
              chatSession: {
                  connect: { id: sessionId }
              }
          }
        });

        res.status(200).json(data);
      } catch (error) {
        console.error("API Error:", error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
      }
    } else {
      res.status(405).json({ error: 'Method Not Allowed' });
    }
  };
  