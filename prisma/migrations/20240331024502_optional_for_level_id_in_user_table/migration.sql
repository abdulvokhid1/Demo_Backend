-- DropForeignKey
ALTER TABLE `users` DROP FOREIGN KEY `users_levelId_fkey`;

-- AlterTable
ALTER TABLE `users` MODIFY `levelId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `company_levels`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
