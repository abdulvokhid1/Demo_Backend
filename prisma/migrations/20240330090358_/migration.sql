/*
  Warnings:

  - You are about to alter the column `option_center` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `option_center` INTEGER NULL DEFAULT 0;
