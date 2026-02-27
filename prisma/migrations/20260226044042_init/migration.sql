-- CreateTable
CREATE TABLE "Specialty" (
    "id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" VARCHAR(500),
    "icon" VARCHAR(255),
    "creatAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "isdeleted" BOOLEAN NOT NULL DEFAULT false,
    "deletAt" TIMESTAMP(3),

    CONSTRAINT "Specialty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Specialty_title_key" ON "Specialty"("title");

-- CreateIndex
CREATE INDEX "idx-Specialty-isdeleted" ON "Specialty"("isdeleted");

-- CreateIndex
CREATE INDEX "idx-Specialty" ON "Specialty"("title");
