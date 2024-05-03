/*
  Warnings:

  - You are about to drop the column `parentId` on the `category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `category` DROP FOREIGN KEY `category_parentId_fkey`;

-- AlterTable
ALTER TABLE `category` DROP COLUMN `parentId`,
    ADD COLUMN `parentid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `category` ADD CONSTRAINT `category_parentid_fkey` FOREIGN KEY (`parentid`) REFERENCES `category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
