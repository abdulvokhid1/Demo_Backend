/*
  Warnings:

  - A unique constraint covering the columns `[rank]` on the table `company_levels` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `rank` to the `company_levels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `company_levels` ADD COLUMN `bgColor` VARCHAR(191) NOT NULL DEFAULT '#FFFFFF',
    ADD COLUMN `discountRate` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `minBuy` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `minSel` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `minSub` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `rank` INTEGER NOT NULL,
    ADD COLUMN `rewardRate` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `txtColor` VARCHAR(191) NOT NULL DEFAULT '#000000';

-- CreateIndex
CREATE UNIQUE INDEX `company_levels_rank_key` ON `company_levels`(`rank`);
