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
    `daily_pay` DOUBLE NOT NULL,
    `sale_id` DOUBLE NOT NULL,
    `select_ex_date` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
