-- AlterTable
ALTER TABLE `deposit` ADD COLUMN `status` ENUM('WAITING', 'REJECTED', 'CONFIRMED') NOT NULL DEFAULT 'WAITING';