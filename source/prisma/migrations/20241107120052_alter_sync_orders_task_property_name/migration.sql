/*
  Warnings:

  - You are about to drop the column `inProcess` on the `SyncOrdersTask` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "SyncOrdersTaskinProcessupdatedAtIndex";

-- AlterTable
ALTER TABLE "SyncOrdersTask" DROP COLUMN "inProcess",
ADD COLUMN     "inProgres" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "SyncOrdersTaskInProgresupdatedAtIndex" ON "SyncOrdersTask"("inProgres", "updatedAt");
