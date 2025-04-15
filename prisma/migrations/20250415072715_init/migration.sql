/*
  Warnings:

  - Made the column `isPublic` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "User" ALTER COLUMN "isPublic" SET NOT NULL;
