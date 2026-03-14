/*
  Warnings:

  - You are about to drop the column `needpasswardechange` on the `user` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "user" DROP COLUMN "needpasswardechange",
ADD COLUMN     "needpasswordechange" BOOLEAN NOT NULL DEFAULT false;
