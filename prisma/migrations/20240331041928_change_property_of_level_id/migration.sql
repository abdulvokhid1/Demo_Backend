/*
  Warnings:

  - Made the column `levelId` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_levelId_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `levelId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `company_levels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
