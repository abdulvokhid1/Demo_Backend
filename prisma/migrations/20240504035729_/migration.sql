/*
  Warnings:

  - A unique constraint covering the columns `[guide_img_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[prod_img_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[description_img_id]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extraImg3]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extraImg4]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extraImg5]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `productId` to the `localfiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `localfiles` ADD COLUMN `productId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `product_guide_img_id_key` ON `product`(`guide_img_id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_prod_img_id_key` ON `product`(`prod_img_id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_description_img_id_key` ON `product`(`description_img_id`);

-- CreateIndex
CREATE UNIQUE INDEX `product_extraImg3_key` ON `product`(`extraImg3`);

-- CreateIndex
CREATE UNIQUE INDEX `product_extraImg4_key` ON `product`(`extraImg4`);

-- CreateIndex
CREATE UNIQUE INDEX `product_extraImg5_key` ON `product`(`extraImg5`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_guide_img_id_fkey` FOREIGN KEY (`guide_img_id`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_prod_img_id_fkey` FOREIGN KEY (`prod_img_id`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_description_img_id_fkey` FOREIGN KEY (`description_img_id`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_extraImg3_fkey` FOREIGN KEY (`extraImg3`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_extraImg4_fkey` FOREIGN KEY (`extraImg4`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_extraImg5_fkey` FOREIGN KEY (`extraImg5`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
