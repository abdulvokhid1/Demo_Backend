/*
  Warnings:

  - Made the column `recomid` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_recomid_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `recomid` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_recomid_fkey` FOREIGN KEY (`recomid`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
