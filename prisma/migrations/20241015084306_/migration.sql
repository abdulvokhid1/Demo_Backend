-- AlterTable
ALTER TABLE `product` ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `isDeleted` BOOLEAN NOT NULL DEFAULT false;
