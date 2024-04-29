-- AlterTable
ALTER TABLE `deposit` ADD COLUMN `calId` INTEGER NULL,
    ADD COLUMN `isCalculated` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `calculation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `isPaid` BOOLEAN NOT NULL DEFAULT false,
    `userLevel` INTEGER NOT NULL,
    `reward` DOUBLE NOT NULL DEFAULT 0,
    `tax` DOUBLE NOT NULL DEFAULT 0,
    `realReward` DOUBLE NOT NULL DEFAULT 0,
    `memo` VARCHAR(191) NULL,
    `bankAccount` VARCHAR(191) NULL,
    `startDate` DATETIME(3) NOT NULL,
    `endDate` DATETIME(3) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `deposit` ADD CONSTRAINT `deposit_calId_fkey` FOREIGN KEY (`calId`) REFERENCES `calculation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `calculation` ADD CONSTRAINT `calculation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
