-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_sponid_fkey` FOREIGN KEY (`sponid`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
