/*
  Warnings:

  - You are about to drop the column `criteriaId` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `projectId` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Score` table. All the data in the column will be lost.
  - You are about to drop the column `project` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Criteria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Panelist` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Project` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `organizerId` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order` to the `Round` table without a default value. This is not possible if the table is not empty.
  - Added the required column `marks` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `panelistId` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roundId` to the `Score` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamId` to the `Score` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Criteria" DROP CONSTRAINT "Criteria_roundId_fkey";

-- DropForeignKey
ALTER TABLE "Panelist" DROP CONSTRAINT "Panelist_eventId_fkey";

-- DropForeignKey
ALTER TABLE "Project" DROP CONSTRAINT "Project_roundId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_criteriaId_fkey";

-- DropForeignKey
ALTER TABLE "Score" DROP CONSTRAINT "Score_projectId_fkey";

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "organizerId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Round" ADD COLUMN     "order" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Score" DROP COLUMN "criteriaId",
DROP COLUMN "projectId",
DROP COLUMN "value",
ADD COLUMN     "marks" INTEGER NOT NULL,
ADD COLUMN     "panelistId" INTEGER NOT NULL,
ADD COLUMN     "remarks" TEXT,
ADD COLUMN     "roundId" TEXT NOT NULL,
ADD COLUMN     "teamId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "project",
ADD COLUMN     "teamId" TEXT;

-- DropTable
DROP TABLE "Criteria";

-- DropTable
DROP TABLE "Panelist";

-- DropTable
DROP TABLE "Project";

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PanelistCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "PanelistCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParticipantCode" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "eventId" TEXT NOT NULL,

    CONSTRAINT "ParticipantCode_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PanelistCode_code_key" ON "PanelistCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "PanelistCode_eventId_key" ON "PanelistCode"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantCode_code_key" ON "ParticipantCode"("code");

-- CreateIndex
CREATE UNIQUE INDEX "ParticipantCode_eventId_key" ON "ParticipantCode"("eventId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_organizerId_fkey" FOREIGN KEY ("organizerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_roundId_fkey" FOREIGN KEY ("roundId") REFERENCES "Round"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_panelistId_fkey" FOREIGN KEY ("panelistId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PanelistCode" ADD CONSTRAINT "PanelistCode_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantCode" ADD CONSTRAINT "ParticipantCode_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
