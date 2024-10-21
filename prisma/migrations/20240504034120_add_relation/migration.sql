/*
  Warnings:

  - A unique constraint covering the columns `[extraImg1]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[extraImg2]` on the table `product` will be added. If there are existing duplicate values, this will fail.
  - Made the column `extraImg1` on table `product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `product` MODIFY `extraImg1` INTEGER NOT NULL DEFAULT 0,
    MODIFY `extraImg2` INTEGER NULL DEFAULT 0;

-- CreateIndex
CREATE UNIQUE INDEX `product_extraImg1_key` ON `product`(`extraImg1`);

-- CreateIndex
CREATE UNIQUE INDEX `product_extraImg2_key` ON `product`(`extraImg2`);

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_extraImg1_fkey` FOREIGN KEY (`extraImg1`) REFERENCES `localfiles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `product` ADD CONSTRAINT `product_extraImg2_fkey` FOREIGN KEY (`extraImg2`) REFERENCES `localfiles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
