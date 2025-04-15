/*
  Warnings:

  - Made the column `userId` on table `PanelistCode` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `ParticipantCode` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "PanelistCode" DROP CONSTRAINT "PanelistCode_userId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantCode" DROP CONSTRAINT "ParticipantCode_userId_fkey";

-- AlterTable
ALTER TABLE "PanelistCode" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ParticipantCode" ALTER COLUMN "userId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "PanelistCode" ADD CONSTRAINT "PanelistCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantCode" ADD CONSTRAINT "ParticipantCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
