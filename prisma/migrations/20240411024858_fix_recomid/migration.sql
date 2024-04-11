-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_recomid_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `recomid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_recomid_fkey` FOREIGN KEY (`recomid`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
