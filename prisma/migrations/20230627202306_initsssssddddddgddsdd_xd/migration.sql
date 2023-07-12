/*
  Warnings:

  - You are about to drop the column `status` on the `Videos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" TEXT;

-- AlterTable
ALTER TABLE "Videos" DROP COLUMN "status",
ADD COLUMN     "category" TEXT;
