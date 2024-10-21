/*
  Warnings:

  - You are about to drop the column `pro_info` on the `product` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `product` DROP COLUMN `pro_info`,
    ADD COLUMN `description_img_id` INTEGER NULL,
    ADD COLUMN `guide_img_id` INTEGER NULL,
    ADD COLUMN `is_description_img` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_guide_img` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `is_prod_info_img` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `prod_img_id` INTEGER NULL,
    ADD COLUMN `prod_info` TEXT NULL;
