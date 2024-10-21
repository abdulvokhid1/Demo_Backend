/*
  Warnings:

  - You are about to drop the column `description_m` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `prodGuideInfo` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `shortDescription` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `useGuideInfo` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `description_m`,
    DROP COLUMN `prodGuideInfo`,
    DROP COLUMN `shortDescription`,
    DROP COLUMN `useGuideInfo`,
    ADD COLUMN `guide_info` VARCHAR(191) NULL,
    ADD COLUMN `m_desc` VARCHAR(191) NULL,
    ADD COLUMN `pro_info` VARCHAR(191) NULL,
    ADD COLUMN `short_desc` VARCHAR(191) NULL;
