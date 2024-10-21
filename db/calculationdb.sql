-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: calculationdb
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('e35e85aa-517d-45d2-ad3f-df9c422d0b36','06097808aabaa1f2b7a90df77753ef69a17dbe0ea24aa47fc9494370ac618eca','2024-04-09 13:46:47.100','20240409031247_init_db',NULL,NULL,'2024-04-09 13:46:47.015',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `centers`
--

DROP TABLE IF EXISTS `centers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `centers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `url` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centers`
--

LOCK TABLES `centers` WRITE;
/*!40000 ALTER TABLE `centers` DISABLE KEYS */;
INSERT INTO `centers` VALUES (1,'강남센터','강남센터','http://localhost:3001','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(2,'본사','본사','http://localhost:3001','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(3,'봉천센터','봉천센터','http://localhost:3001','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(4,'본사','본사','http://localhost:3001','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(5,'강남센터','강남센터','http://localhost:3001','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(6,'봉천센터','봉천센터','http://localhost:3001','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584');
/*!40000 ALTER TABLE `centers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_levels`
--

DROP TABLE IF EXISTS `company_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `company_levels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_levels`
--

LOCK TABLES `company_levels` WRITE;
/*!40000 ALTER TABLE `company_levels` DISABLE KEYS */;
INSERT INTO `company_levels` VALUES (1,'일반회원','일반회원','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(2,'3스타','3스타','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(3,'팀장','팀장','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(4,'5스타','5스타','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(5,'1스타','1스타','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(6,'4스타','4스타','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(7,'정회원','정회원','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(8,'2스타','2스타','2024-04-09 13:46:48.646','2024-04-09 13:46:48.646'),(9,'정회원','정회원','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(10,'팀장','팀장','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(11,'1스타','1스타','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(12,'일반회원','일반회원','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(13,'4스타','4스타','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(14,'2스타','2스타','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(15,'3스타','3스타','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584'),(16,'5스타','5스타','2024-04-09 15:46:04.584','2024-04-09 15:46:04.584');
/*!40000 ALTER TABLE `company_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notes`
--

DROP TABLE IF EXISTS `notes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `notes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `notes_userId_fkey` (`userId`),
  CONSTRAINT `notes_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notes`
--

LOCK TABLES `notes` WRITE;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sale_register`
--

DROP TABLE IF EXISTS `sale_register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sale_register` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sale_date` int(11) NOT NULL,
  `sale_type` double NOT NULL,
  `meno` varchar(191) NOT NULL,
  `select_amount` double NOT NULL,
  `sale_amount` int(11) NOT NULL,
  `sale_pv` int(11) NOT NULL,
  `appstatus` double NOT NULL,
  `daily_pay` enum('YES','NO') NOT NULL,
  `sale_id` double NOT NULL,
  `select_ex_date` double NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sale_register`
--

LOCK TABLES `sale_register` WRITE;
/*!40000 ALTER TABLE `sale_register` DISABLE KEYS */;
/*!40000 ALTER TABLE `sale_register` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `saleslevel`
--

DROP TABLE IF EXISTS `saleslevel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `saleslevel` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `level` int(11) NOT NULL,
  `position_name` varchar(191) NOT NULL,
  `purchase_amount` int(11) NOT NULL,
  `amount_limit` int(11) NOT NULL,
  `purchase_pv` int(11) NOT NULL,
  `discount_rate` double NOT NULL,
  `guanli_fee` int(11) NOT NULL,
  `minimum_purchase` int(11) NOT NULL,
  `upgrade` int(11) NOT NULL,
  `payment_limit` double NOT NULL,
  `memo` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `saleslevel`
--

LOCK TABLES `saleslevel` WRITE;
/*!40000 ALTER TABLE `saleslevel` DISABLE KEYS */;
/*!40000 ALTER TABLE `saleslevel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `setup_fee`
--

DROP TABLE IF EXISTS `setup_fee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `setup_fee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `select_fee` double NOT NULL,
  `tax` int(11) NOT NULL,
  `withdrawal_fee` int(11) NOT NULL,
  `transfer_fee` int(11) NOT NULL,
  `other_savefee` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `setup_fee`
--

LOCK TABLES `setup_fee` WRITE;
/*!40000 ALTER TABLE `setup_fee` DISABLE KEYS */;
/*!40000 ALTER TABLE `setup_fee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `member_id` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `hashedPassword` varchar(191) NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `mobilephone_number` varchar(191) NOT NULL DEFAULT '01000000000',
  `phone_number` varchar(191) DEFAULT NULL,
  `zip1` varchar(191) DEFAULT NULL,
  `zip2` varchar(191) DEFAULT NULL,
  `address` varchar(191) DEFAULT NULL,
  `address1` varchar(191) DEFAULT NULL,
  `addressdoro` varchar(191) DEFAULT NULL,
  `zonecode` varchar(191) DEFAULT NULL,
  `recomid` varchar(191) DEFAULT NULL,
  `sponid` varchar(191) DEFAULT NULL,
  `return_bank` varchar(191) DEFAULT NULL,
  `return_account` varchar(191) DEFAULT NULL,
  `return_name` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `role` varchar(191) NOT NULL,
  `centerId` int(11) NOT NULL DEFAULT 0,
  `levelId` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  UNIQUE KEY `users_member_id_key` (`member_id`),
  KEY `users_centerId_fkey` (`centerId`),
  KEY `users_levelId_fkey` (`levelId`),
  CONSTRAINT `users_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `centers` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `users_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `company_levels` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,'user22@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 22','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(2,NULL,'user2@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 2','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(3,NULL,'user10@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 10','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(4,NULL,'user5@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 5','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.646','2024-04-09 13:46:48.646','user',1,1),(5,NULL,'user23@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 23','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(6,NULL,'user9@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 9','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.646','2024-04-09 13:46:48.646','user',1,1),(7,NULL,'user6@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 6','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(8,NULL,'admin@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','Admin','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.646','2024-04-09 13:46:48.646','admin',1,1),(9,NULL,'user8@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 8','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(10,NULL,'user3@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 3','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.646','2024-04-09 13:46:48.646','user',1,1),(11,NULL,'user13@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 13','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(12,NULL,'user12@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 12','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 13:46:48.647','2024-04-09 13:46:48.647','user',1,1),(13,NULL,'user4@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 4','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(16,NULL,'user1@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 1','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(17,NULL,'user15@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 15','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(18,NULL,'user18@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 18','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(20,NULL,'user11@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 11','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(22,NULL,'user19@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 19','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(24,NULL,'user7@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 7','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(25,NULL,'user16@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 16','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(26,NULL,'user17@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 17','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(27,NULL,'user21@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 21','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(33,NULL,'user20@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 20','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1),(36,NULL,'user14@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 14','','','','','','','','','','',NULL,NULL,NULL,'2024-04-09 15:46:04.584','2024-04-09 15:46:04.584','user',1,1);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-10  1:15:19
