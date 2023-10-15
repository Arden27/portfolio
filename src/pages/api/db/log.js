import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  console.log("Received body:", req.body);
  const sessionId = req.body.sessionId;
  
  const chatSessionId = sessionId;
  console.log("Extracted sessionId:", sessionId);
  if (req.method === 'POST') {
    try {
      // Upsert ChatSession - update if exists, create if not
      await prisma.chatSession.upsert({
        where: { id: chatSessionId },
        update: {},  // No updates, just a create-or-noop operation
        create: { id: chatSessionId },
      });

      // Create the messages associated with the ChatSession
      await prisma.message.create({
        data: {
            content: req.body.logMessage,
            role: 'log',
            time: new Date(req.body.logAt),
            chatSession: {
                connect: { id: chatSessionId }
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
