/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `PanelistCode` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `ParticipantCode` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "PanelistCode" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "ParticipantCode" ADD COLUMN     "userId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "PanelistCode_userId_key" ON "PanelistCode"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantCode_userId_key" ON "ParticipantCode"("userId");

-- AddForeignKey
ALTER TABLE "PanelistCode" ADD CONSTRAINT "PanelistCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantCode" ADD CONSTRAINT "ParticipantCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
