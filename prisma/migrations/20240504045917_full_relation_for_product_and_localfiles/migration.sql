/*
  Warnings:

  - A unique constraint covering the columns `[mainImg]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[listImg]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[thumbnailImg]` on the table `product` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `product_mainImg_key` ON `product`(`mainImg`);

-- CreateIndex
CREATE UNIQUE INDEX `product_listImg_key` ON `product`(`listImg`);

-- CreateIndex
CREATE UNIQUE INDEX `product_thumbnailImg_key` ON `product`(`thumbnailImg`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_mainImg_fkey` FOREIGN KEY (`mainImg`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_listImg_fkey` FOREIGN KEY (`listImg`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_thumbnailImg_fkey` FOREIGN KEY (`thumbnailImg`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
