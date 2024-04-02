/*
  Warnings:

  - You are about to drop the column `CreatedAt` on the `company_levels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `company_levels` DROP COLUMN `CreatedAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
