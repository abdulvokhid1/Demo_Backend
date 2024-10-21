/*
  Warnings:

  - You are about to drop the column `provider` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `provider`,
    ADD COLUMN `customercode` VARCHAR(191) NULL;
