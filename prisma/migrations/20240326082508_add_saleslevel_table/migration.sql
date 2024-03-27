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
