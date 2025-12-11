/*
  Warnings:

  - Added the required column `role` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `password` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ORGANIZER', 'USER', 'PANELIST');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL,
ALTER COLUMN "password" SET NOT NULL,
ALTER COLUMN "files" DROP NOT NULL,
ALTER COLUMN "isPublic" DROP NOT NULL;
