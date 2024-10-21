-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `member_id` VARCHAR(191) NULL,
    `email` VARCHAR(191) NOT NULL,
    `hashedPassword` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `mobilephone_number` VARCHAR(191) NOT NULL DEFAULT '01000000000',
    `phone_number` VARCHAR(191) NULL,
    `zip1` VARCHAR(191) NULL,
    `zip2` VARCHAR(191) NULL,
    `address` VARCHAR(191) NULL,
    `address1` VARCHAR(191) NULL,
    `addressdoro` VARCHAR(191) NULL,
    `zonecode` VARCHAR(191) NULL,
    `recomid` VARCHAR(191) NULL,
    `sponid` VARCHAR(191) NULL,
    `return_bank` VARCHAR(191) NULL,
    `return_account` VARCHAR(191) NULL,
    `return_name` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `centerId` INTEGER NOT NULL DEFAULT 0,
    `levelId` INTEGER NOT NULL DEFAULT 0,

    UNIQUE INDEX `users_member_id_key`(`member_id`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `notes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `centers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `url` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `company_levels` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saleslevel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,
    `position_name` VARCHAR(191) NOT NULL,
    `purchase_amount` INTEGER NOT NULL,
    `amount_limit` INTEGER NOT NULL,
    `purchase_pv` INTEGER NOT NULL,
    `discount_rate` DOUBLE NOT NULL,
    `guanli_fee` INTEGER NOT NULL,
    `minimum_purchase` INTEGER NOT NULL,
    `upgrade` INTEGER NOT NULL,
    `payment_limit` DOUBLE NOT NULL,
    `memo` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `setup_fee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `select_fee` DOUBLE NOT NULL,
    `tax` INTEGER NOT NULL,
    `withdrawal_fee` INTEGER NOT NULL,
    `transfer_fee` INTEGER NOT NULL,
    `other_savefee` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sale_register` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sale_date` INTEGER NOT NULL,
    `sale_type` DOUBLE NOT NULL,
    `meno` VARCHAR(191) NOT NULL,
    `select_amount` DOUBLE NOT NULL,
    `sale_amount` INTEGER NOT NULL,
    `sale_pv` INTEGER NOT NULL,
    `appstatus` DOUBLE NOT NULL,
    `daily_pay` ENUM('YES', 'NO') NOT NULL,
    `sale_id` DOUBLE NOT NULL,
    `select_ex_date` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `centers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `company_levels`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notes` ADD CONSTRAINT `notes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
