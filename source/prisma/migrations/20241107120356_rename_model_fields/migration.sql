/*
  Warnings:

  - You are about to drop the column `inProgres` on the `SyncOrdersTask` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "SyncOrdersTaskInProgresupdatedAtIndex";

-- AlterTable
ALTER TABLE "SyncOrdersTask" DROP COLUMN "inProgres",
ADD COLUMN     "inProgress" BOOLEAN NOT NULL DEFAULT false;

-- CreateIndex
CREATE INDEX "SyncOrdersTaskInProgressUpdatedAtIndex" ON "SyncOrdersTask"("inProgress", "updatedAt");
