/*
  Warnings:

  - You are about to drop the column `reatedAt` on the `company_levels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `company_levels` DROP COLUMN `reatedAt`,
    ADD COLUMN `CreatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` MODIFY `centerId` INTEGER NOT NULL DEFAULT 0,
    MODIFY `levelId` INTEGER NOT NULL DEFAULT 0;
