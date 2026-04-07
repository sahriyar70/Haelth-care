/*
  Warnings:

  - You are about to drop the `Patient` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Patient" DROP CONSTRAINT "Patient_userId_fkey";

-- DropTable
DROP TABLE "Patient";

-- CreateTable
CREATE TABLE "patent" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "profilphoto" TEXT,
    "contactnumber" TEXT,
    "address" TEXT,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "patent_email_key" ON "patent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "patent_userId_key" ON "patent"("userId");

-- CreateIndex
CREATE INDEX "indexing email" ON "patent"("email");

-- CreateIndex
CREATE INDEX "indexing isdeleted" ON "patent"("isdeleted");

-- AddForeignKey
ALTER TABLE "patent" ADD CONSTRAINT "patent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
