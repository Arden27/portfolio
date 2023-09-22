import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  const sessionId = req.body.sessionId;
  if (req.method === 'POST') {
    try {
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

      // Create the messages associated with the ChatSession
      await prisma.message.create({
        data: {
            content: req.body.userMessage,
            role: 'user',
            sentAt: new Date(req.body.sentAt),
            chatSession: {
                connect: { id: sessionId }
            }
        }
      });
      await prisma.message.create({
        data: {
            content: req.body.assistantMessage,
            role: 'assistant',
            receivedAt: new Date(req.body.receivedAt),
            chatSession: {
                connect: { id: sessionId }
            }
        }
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("DB Error:", error);
      res.status(500).json({ error: 'Database Operation Failed', details: error.message });
    } finally {
      await prisma.$disconnect();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
