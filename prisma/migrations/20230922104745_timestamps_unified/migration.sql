/*
  Warnings:

  - You are about to drop the column `receivedAt` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `sentAt` on the `Message` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Message" DROP COLUMN "receivedAt",
DROP COLUMN "sentAt",
ADD COLUMN     "time" TIMESTAMP(3);
