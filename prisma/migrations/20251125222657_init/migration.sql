/*
  Warnings:

  - The values [USER] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `organizerId` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `isPublic` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `storageUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `teamId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `PanelistCode` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ParticipantCode` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[participantCode]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[panelistCode]` on the table `Event` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId,order]` on the table `Round` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[panelistId,roundId,teamId]` on the table `Score` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[eventId,name]` on the table `Team` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('ORGANIZER', 'PARTICIPANT', 'PANELIST');
ALTER TABLE "EventRole" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- DropForeignKey
ALTER TABLE "Event" DROP CONSTRAINT "Event_organizerId_fkey";

-- DropForeignKey
ALTER TABLE "PanelistCode" DROP CONSTRAINT "PanelistCode_eventId_fkey";

-- DropForeignKey
ALTER TABLE "PanelistCode" DROP CONSTRAINT "PanelistCode_userId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantCode" DROP CONSTRAINT "ParticipantCode_eventId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantCode" DROP CONSTRAINT "ParticipantCode_userId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_panelistId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_teamId_fkey";

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "organizerId",
ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "panelistCode" TEXT,
ADD COLUMN     "participantCode" TEXT;

-- AlterTable
ALTER TABLE "Round" ADD COLUMN     "description" TEXT,
ADD COLUMN     "maxScore" INTEGER NOT NULL DEFAULT 100;

-- AlterTable
ALTER TABLE "Score" ALTER COLUMN "panelistId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Team" ADD COLUMN     "description" TEXT,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "storageUrl" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isPublic",
DROP COLUMN "role",
DROP COLUMN "storageUrl",
DROP COLUMN "teamId",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "PanelistCode";

-- DropTable
DROP TABLE "ParticipantCode";

-- CreateTable
CREATE TABLE "EventRole" (
    "id" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "userId" INTEGER NOT NULL,
    "eventId" TEXT NOT NULL,
    "teamId" TEXT,

    CONSTRAINT "EventRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EventRole_userId_eventId_key" ON "EventRole"("userId", "eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_participantCode_key" ON "Event"("participantCode");

-- CreateIndex
CREATE UNIQUE INDEX "Event_panelistCode_key" ON "Event"("panelistCode");

-- CreateIndex
CREATE UNIQUE INDEX "Round_eventId_order_key" ON "Round"("eventId", "order");

-- CreateIndex
CREATE UNIQUE INDEX "Score_panelistId_roundId_teamId_key" ON "Score"("panelistId", "roundId", "teamId");

-- CreateIndex
CREATE UNIQUE INDEX "Team_eventId_name_key" ON "Team"("eventId", "name");

-- AddForeignKey
ALTER TABLE "EventRole" ADD CONSTRAINT "EventRole_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRole" ADD CONSTRAINT "EventRole_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EventRole" ADD CONSTRAINT "EventRole_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_panelistId_fkey" FOREIGN KEY ("panelistId") REFERENCES "EventRole"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
