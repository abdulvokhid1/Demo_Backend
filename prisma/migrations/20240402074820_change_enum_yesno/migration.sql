/*
  Warnings:

  - You are about to alter the column `daily_pay` on the `sale_register` table. The data in that column could be lost. The data in that column will be cast from `Double` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `sale_register` MODIFY `daily_pay` ENUM('YES', 'NO') NOT NULL;
