/*
  Warnings:

  - Added the required column `files` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "files" JSONB NOT NULL,
ADD COLUMN     "isPublic" BOOLEAN NOT NULL DEFAULT false;
