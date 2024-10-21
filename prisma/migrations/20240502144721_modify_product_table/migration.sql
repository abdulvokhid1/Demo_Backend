/*
  Warnings:

  - Added the required column `code` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isActive` to the `product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDeliveriable` to the `product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `product` ADD COLUMN `amountPV` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `branch` VARCHAR(191) NULL,
    ADD COLUMN `cardFee` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `code` VARCHAR(191) NOT NULL,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `description_m` VARCHAR(191) NULL,
    ADD COLUMN `detailImg` INTEGER NULL,
    ADD COLUMN `endSellDate` DATETIME(3) NULL,
    ADD COLUMN `extraImg1` INTEGER NULL,
    ADD COLUMN `extraImg2` INTEGER NULL,
    ADD COLUMN `extraImg3` INTEGER NULL,
    ADD COLUMN `extraImg4` INTEGER NULL,
    ADD COLUMN `extraImg5` INTEGER NULL,
    ADD COLUMN `isActive` BOOLEAN NOT NULL,
    ADD COLUMN `isDeliveriable` BOOLEAN NOT NULL,
    ADD COLUMN `isDuplicatable` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `listImg` INTEGER NULL,
    ADD COLUMN `maxPerSell` DOUBLE NULL,
    ADD COLUMN `mileage` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `origin` VARCHAR(191) NULL,
    ADD COLUMN `pricePV` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `price_origin` DOUBLE NULL,
    ADD COLUMN `price_provider` DOUBLE NULL,
    ADD COLUMN `price_sell` DOUBLE NULL,
    ADD COLUMN `prodGuideInfo` VARCHAR(191) NULL,
    ADD COLUMN `producer` VARCHAR(191) NULL,
    ADD COLUMN `provider` VARCHAR(191) NULL,
    ADD COLUMN `quantity` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `sellType` INTEGER NOT NULL DEFAULT 1,
    ADD COLUMN `shortDescription` VARCHAR(191) NULL,
    ADD COLUMN `soldQuantity` DOUBLE NULL DEFAULT 0,
    ADD COLUMN `startSellDate` DATETIME(3) NULL,
    ADD COLUMN `thumbnailImg` INTEGER NULL,
    ADD COLUMN `useGuideInfo` VARCHAR(191) NULL,
    ADD COLUMN `vat` DOUBLE NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `Follows` (
    `followedById` INTEGER NOT NULL,
    `followingId` INTEGER NOT NULL,

    PRIMARY KEY (`followingId`, `followedById`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_followedById_fkey` FOREIGN KEY (`followedById`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Follows` ADD CONSTRAINT `Follows_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `product`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
