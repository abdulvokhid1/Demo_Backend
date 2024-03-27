/*
  Warnings:

  - You are about to drop the column `firstName` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `firstName`,
    DROP COLUMN `lastName`,
    ADD COLUMN `address` VARCHAR(191) NULL,
    ADD COLUMN `address1` VARCHAR(191) NULL,
    ADD COLUMN `addressdoro` VARCHAR(191) NULL,
    ADD COLUMN `mobilephone_number` VARCHAR(191) NULL,
    ADD COLUMN `name` VARCHAR(191) NULL,
    ADD COLUMN `phone_number` VARCHAR(191) NULL,
    ADD COLUMN `recomid` VARCHAR(191) NULL,
    ADD COLUMN `sponid` VARCHAR(191) NULL,
    ADD COLUMN `zip1` VARCHAR(191) NULL,
    ADD COLUMN `zip2` VARCHAR(191) NULL,
    ADD COLUMN `zonecode` VARCHAR(191) NULL;
