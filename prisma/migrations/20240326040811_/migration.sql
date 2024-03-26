/*
  Warnings:

  - A unique constraint covering the columns `[member_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `member_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `member_id` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `users_member_id_key` ON `users`(`member_id`);
