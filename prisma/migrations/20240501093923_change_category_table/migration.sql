/*
  Warnings:

  - You are about to alter the column `isActive` on the `category` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `TinyInt`.

*/
-- AlterTable
ALTER TABLE `category` MODIFY `isActive` BOOLEAN NOT NULL;
