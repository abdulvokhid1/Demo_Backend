/*
  Warnings:

  - You are about to alter the column `img` on the `category` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `img` INTEGER NOT NULL;
