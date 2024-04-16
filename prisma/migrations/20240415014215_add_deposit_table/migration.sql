/*
  Warnings:

  - You are about to drop the `Deposit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Deposit` DROP FOREIGN KEY `Deposit_userId_fkey`;

-- DropTable
DROP TABLE `Deposit`;

-- CreateTable
CREATE TABLE `deposit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `amount` DOUBLE NOT NULL,
    `fee` DOUBLE NOT NULL DEFAULT 0,
    `method` ENUM('CASH', 'TRANSFER', 'CARD', 'PHONE') NOT NULL DEFAULT 'TRANSFER',
    `memo` VARCHAR(191) NOT NULL DEFAULT '',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `deposit` ADD CONSTRAINT `deposit_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
