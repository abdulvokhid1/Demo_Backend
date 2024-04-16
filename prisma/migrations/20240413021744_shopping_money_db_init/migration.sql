/*
  Warnings:

  - You are about to drop the column `minSel` on the `company_levels` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `company_levels` DROP COLUMN `minSel`,
    ADD COLUMN `minSell` DOUBLE NOT NULL DEFAULT 0;
