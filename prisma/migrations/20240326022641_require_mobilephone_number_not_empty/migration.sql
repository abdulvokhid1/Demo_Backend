/*
  Warnings:

  - Made the column `mobilephone_number` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `mobilephone_number` VARCHAR(191) NOT NULL DEFAULT '01000000000';
