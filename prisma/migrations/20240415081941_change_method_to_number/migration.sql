/*
  Warnings:

  - You are about to alter the column `method` on the `deposit` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(1))` to `Int`.
  - You are about to alter the column `status` on the `deposit` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(2))` to `Int`.

*/
-- AlterTable
ALTER TABLE `deposit` MODIFY `method` INTEGER NOT NULL DEFAULT 0,
    MODIFY `status` INTEGER NOT NULL DEFAULT 0;
