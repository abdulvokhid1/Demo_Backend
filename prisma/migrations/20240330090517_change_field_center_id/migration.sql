/*
  Warnings:

  - You are about to drop the column `option_center` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `option_center`,
    ADD COLUMN `centerId` INTEGER NULL DEFAULT 0;
