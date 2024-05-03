/*
  Warnings:

  - You are about to drop the column `detailImg` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `detailImg`,
    ADD COLUMN `mainImg` INTEGER NULL;
