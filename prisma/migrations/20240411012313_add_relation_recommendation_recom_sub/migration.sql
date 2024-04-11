/*
  Warnings:

  - You are about to alter the column `recomid` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `sponid` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `users` MODIFY `recomid` INTEGER NULL,
    MODIFY `sponid` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_recomid_fkey` FOREIGN KEY (`recomid`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
