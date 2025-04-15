-- DropForeignKey
ALTER TABLE "PanelistCode" DROP CONSTRAINT "PanelistCode_userId_fkey";

-- DropForeignKey
ALTER TABLE "ParticipantCode" DROP CONSTRAINT "ParticipantCode_userId_fkey";

-- AlterTable
ALTER TABLE "PanelistCode" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ParticipantCode" ALTER COLUMN "userId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "PanelistCode" ADD CONSTRAINT "PanelistCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParticipantCode" ADD CONSTRAINT "ParticipantCode_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
