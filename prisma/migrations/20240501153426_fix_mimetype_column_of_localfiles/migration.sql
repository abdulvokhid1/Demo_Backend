/*
  Warnings:

  - You are about to drop the column `minetype` on the `localfiles` table. All the data in the column will be lost.
  - Added the required column `mimetype` to the `localfiles` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `localfiles` DROP COLUMN `minetype`,
    ADD COLUMN `mimetype` VARCHAR(191) NOT NULL;
