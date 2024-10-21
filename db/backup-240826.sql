-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: 127.0.0.1    Database: shoppingmoneydb
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
INSERT INTO `_prisma_migrations` VALUES ('007ac1d7-ff12-4aa7-84be-a7afc8ffbca7','6010b784597fb9b1e85785dd83f8fc7179a8ceb7105545cf62891f580b911252','2024-05-04 04:18:34.145','20240501094036_change_is_active_to_default_true',NULL,NULL,'2024-05-04 04:18:34.140',1),('0cc867e1-4513-4e12-85de-e8ca15707903','e5c506e6cb2d45e45956cdba7a85eafe5edd5bffbd435f63c6129c35e9deb274','2024-05-04 04:18:34.151','20240501094819_default_parent_id_for_category',NULL,NULL,'2024-05-04 04:18:34.146',1),('136ab179-c6f5-45ad-ad73-7470429c8a8c','cd8bc7d9f41c09534bbbbaa77bf4fa6440ce1e37ce21269960e59779345d4e18','2024-05-04 04:18:34.065','20240415081941_change_method_to_number',NULL,NULL,'2024-05-04 04:18:34.049',1),('19f0bd69-2b32-46a5-86c9-14f73a22c5ef','06097808aabaa1f2b7a90df77753ef69a17dbe0ea24aa47fc9494370ac618eca','2024-05-04 04:18:33.763','20240409031247_init_db',NULL,NULL,'2024-05-04 04:18:33.677',1),('25acc6e5-c076-4fae-98a3-26af301896e2','c8c266a161b439fa56e3c0a243b93832ad0c01f7c06b96734418ce26c4993c45','2024-05-04 04:18:34.351','20240503063325_',NULL,NULL,'2024-05-04 04:18:34.344',1),('296f266f-dbb4-4404-a79f-2593469f057c','6d32017a251cc4ce66799f650a9bd0cdec04bad406e0900b84a773087ba1f39b','2024-05-04 04:18:34.575','20240504035955_',NULL,NULL,'2024-05-04 04:18:34.570',1),('2b5f4425-41be-4651-b46c-7a1c2e929a8e','4aa465aae2392ed0b2bca2e9ed4673fb2f538eeea76f9b01c85b8e46f7f50898','2024-05-04 04:59:17.856','20240504045917_full_relation_for_product_and_localfiles',NULL,NULL,'2024-05-04 04:59:17.798',1),('2e0baf78-5b92-40e0-b6fe-f9fd5dc25a27','80f5f4699bccce794b8f80de5c536d279ea22b90d0b89838379f7fb83b657217','2024-05-04 04:18:34.168','20240501095610_allow_order_to_be_null',NULL,NULL,'2024-05-04 04:18:34.158',1),('30b3f74e-b6bf-4980-a079-17b5561410d3','d73aa90a34e4302e9104e1ac76b48be691c957980264ce8525426142a0112a79','2024-05-04 04:18:34.382','20240503092836_',NULL,NULL,'2024-05-04 04:18:34.374',1),('3233c8d4-2cac-45d6-b201-c4d0a9cdb987','6a47699f4fc6a6228b1747913dab048cb285c69e52782d577d1d5ff1cb255ccb','2024-05-04 04:18:34.359','20240503083301_',NULL,NULL,'2024-05-04 04:18:34.351',1),('3ca6e82d-9f38-4748-af23-be4329593210','1e0069b9eab0d01892c545d1ffe5e88c074aa611acc9a0a2d762179fe72f49de','2024-05-04 04:18:33.995','20240415014145_',NULL,NULL,'2024-05-04 04:18:33.979',1),('40c2be3f-8322-404e-bb38-de9a8b977b1d','77ef07ff88d2d1085628b1b70c96139644380ac7a3a8d8ea1d7194fa38e39c57','2024-05-04 04:18:34.182','20240501153426_fix_mimetype_column_of_localfiles',NULL,NULL,'2024-05-04 04:18:34.177',1),('474989c1-61ed-4104-a8c5-bf7a63a609a2','ea88f7d0b92aa84ec691f9c4b16e4020a27d2851b8c12cdde3d31eecd6111a2f','2024-05-04 04:18:34.197','20240502002917_change_img_to_int_in_category_table',NULL,NULL,'2024-05-04 04:18:34.183',1),('4dbc605a-da48-425f-b4e4-6a3dc0fbcee4','23dcc5d25b4b223be94a2687c344ec6dd55fbaa4e971ca7e50e8971c1124a5fc','2024-05-04 04:18:33.978','20240415004315_',NULL,NULL,'2024-05-04 04:18:33.915',1),('4fbf6908-131c-4d96-a5c3-cf07f0190a9d','c4ed6b576ce3a116907798929feac168fdb88fc9437492774828cf776811cd5b','2024-05-04 04:18:34.343','20240503063114_',NULL,NULL,'2024-05-04 04:18:34.335',1),('5263f62b-04ae-4013-ab3f-7b47e64b60d8','3db6cdd41c2a29985e6df71af06369d987b2c77224499d905ea84da5af18671b','2024-05-04 04:18:34.139','20240501093923_change_category_table',NULL,NULL,'2024-05-04 04:18:34.128',1),('5be8409e-debf-46b6-a1b4-16889a387074','2c61e7b3ec181c87dcc4fa1e3e033df644280fd4af862577d9652d8f5be480e7','2024-05-04 04:18:33.858','20240413021658_shoping_money_db_init',NULL,NULL,'2024-05-04 04:18:33.846',1),('6ed8a4fa-25d9-434f-81a4-97e951d0d58f','fa90751f5e00c3178d4a5303b4862af596bddd01e842586513df4f368395be40','2024-05-04 04:18:34.238','20240502012605_add_category_depth',NULL,NULL,'2024-05-04 04:18:34.232',1),('6fb208d5-ca94-473c-88e0-9a0ff1f14543','21edb19226e868e31ebada2958524dbe576630e58dfb537e4d9a29f746576073','2024-05-04 04:18:34.570','20240504035729_',NULL,NULL,'2024-05-04 04:18:34.440',1),('879d6d4f-c531-429c-8a51-aba90a6e461f','e452132f9ca429de103b8d669721e4363f4458389806d06cd209bfd3863cf71e','2024-05-04 04:18:34.082','20240415082225_',NULL,NULL,'2024-05-04 04:18:34.066',1),('88a636da-fff8-461c-91b5-b0bdb2461e22','0241b2e9e784804da95180ef5ad737bf142a95c72e21f2ce4a6f8fd4f75617df','2024-05-04 04:18:34.374','20240503084147_extend_for_text',NULL,NULL,'2024-05-04 04:18:34.360',1),('88e5bb9b-2470-44b8-811f-de5d86238885','1bbd44a5c3d54cc6cc8b696a70319818adb50a73831a4029598f277b447def04','2024-05-04 04:18:34.089','20240425010032_add_sub1_sub2_to_user_table',NULL,NULL,'2024-05-04 04:18:34.083',1),('9ae54562-5722-4d77-bca4-ac91851ac446','2042b0e56d38ccde64a28129074965c222b1071e93492ba255f4f7bcd9f585fd','2024-05-04 04:18:34.326','20240502144824_',NULL,NULL,'2024-05-04 04:18:34.280',1),('9c576065-a079-46a8-ad69-52ce4a71dee1','1d3c6f98a8aa919f8ba2bb4b8042e3beeda7253a337c0f24a059f76ea33aaa74','2024-05-04 04:18:33.821','20240411024224_fix_recomid',NULL,NULL,'2024-05-04 04:18:33.793',1),('a29592e6-8a83-403a-9c1c-06dd3c84a8c7','63d17b32c8532542e918116a80665cfafa3b744ec033a862485768c129e9eaf4','2024-05-04 04:18:34.434','20240504034120_add_relation',NULL,NULL,'2024-05-04 04:18:34.391',1),('bff57dee-fc73-41ce-8471-9b07bd6663bd','67f9d7838b2f55289c892ea5d9c4decf28b694a70ef9638e934bad68cf6410d0','2024-05-04 04:18:33.846','20240411024858_fix_recomid',NULL,NULL,'2024-05-04 04:18:33.821',1),('c94498ed-b22f-450d-9779-8b4beaa725d2','e5dbb802bb07c511b98007627409508e0c66e0d8e890a610b45673e4a2de7d6d','2024-05-04 04:18:33.793','20240411012313_add_relation_recommendation_recom_sub',NULL,NULL,'2024-05-04 04:18:33.764',1),('d3338d4d-931f-4c8d-9018-6bc3cc3e7df3','d0f65a2f81cc2fa6399a4799d0cb10469a80bc8f8c5e372f026504082f538077','2024-05-04 04:18:33.915','20240414143004_add_product_and_category_tables',NULL,NULL,'2024-05-04 04:18:33.866',1),('d35607a5-5cb9-4095-b093-09a164d802b1','01affeccd9557685548d44f0f4393ef9cec64c6880186fdf47232a1642df692f','2024-05-04 04:18:34.279','20240502144721_modify_product_table',NULL,NULL,'2024-05-04 04:18:34.239',1),('d38fd97b-fd85-4732-8ba1-197a8a218409','f500f634f85415a93962c0244a587b098fbe393f0bbb768dadb81581c5a09247','2024-05-04 04:18:34.335','20240503055458_change_provider_to_customercode',NULL,NULL,'2024-05-04 04:18:34.327',1),('dbb12b08-0fcb-4f44-9e73-db6b90c5b13d','a17ad883f26147a51d33219e1e598f76361f4c06423a1974e2c85d5381b197e2','2024-05-04 04:18:34.026','20240415014355_add_status_for_deposit_table',NULL,NULL,'2024-05-04 04:18:34.020',1),('e2b49500-8572-4284-bc60-0b71006c0051','a17646cdec4e7f2b475b807737642e82c13c426b5ae28d17e676ef34bda4fbf4','2024-05-04 04:18:34.176','20240501150659_add_localfiles_table',NULL,NULL,'2024-05-04 04:18:34.169',1),('e31fee10-f9f9-4f01-ae44-9f7cbcb705ad','fd7fca8c17af72bedfcbcf8273677bcd13a04ebc6535ab8947e7a1625964d853','2024-05-04 04:18:33.865','20240413021744_shopping_money_db_init',NULL,NULL,'2024-05-04 04:18:33.859',1),('e38ad707-f716-4bc7-8fe3-eef2bbd424a9','9bfd07b61b2321e912cbf81a06d8cef5beb09e6df374e78669c5b08007fd7d34','2024-05-04 04:18:34.127','20240426083840_add_calculation_table_and_modify_related_tables_users_deposits',NULL,NULL,'2024-05-04 04:18:34.090',1),('e39638c7-64d9-46df-8173-f958ecd62971','6f3f5524aabea221ea4cdec0c47a3a09234aaf2f67867150040921f8e82e4da8','2024-05-04 04:18:34.232','20240502010503_change_relation',NULL,NULL,'2024-05-04 04:18:34.204',1),('ea6722a1-a31f-424a-8a5c-7ad8a26ef67d','5f1ca5cda62c099a379d68a5e8eaebef19ac451e3814e007a096b0b920390bd0','2024-05-04 04:18:34.390','20240503093340_',NULL,NULL,'2024-05-04 04:18:34.382',1),('eb65c94e-5ad5-4167-8d34-888c00921116','9074c29048d5c5641d9ef72aea07e875e3f595222e5c976d165f68048de8e4b3','2024-05-04 04:18:34.439','20240504034253_add_relation_for_image_of_product',NULL,NULL,'2024-05-04 04:18:34.434',1),('ed75c973-53df-4530-bb77-bd6b816967dd','23df5d57d0c02d21ba8df8146fd477a8bfbee103273546bb02a6fd9e3a25467c','2024-05-04 04:18:34.019','20240415014215_add_deposit_table',NULL,NULL,'2024-05-04 04:18:33.996',1),('f0b5588d-e06f-447f-9e80-0d516ba71907','f418714688d4dd8ddb2320ec7c004cb7be855456542d7213195ac6d0d13c0e14','2024-05-04 04:18:34.157','20240501095131_add_order_for_category',NULL,NULL,'2024-05-04 04:18:34.152',1),('f4db2c90-9ead-43e8-bf2c-b54eb990439c','e093309cbe32a8be92a1d587088af7a6fcf5d24755cdb87776d161d6cdbf27be','2024-05-04 04:18:34.049','20240415072642_',NULL,NULL,'2024-05-04 04:18:34.035',1),('f7255bfc-846f-4453-b640-399ce6759e15','edb9f3f2b517f386c0a1bad41de9937a56e3d6091c11c036a4109ff623a173ff','2024-05-04 04:18:34.203','20240502004556_remove_default_value_of_parent_id_in_category_table',NULL,NULL,'2024-05-04 04:18:34.198',1),('f83b4aff-dabe-4469-a2df-97daeb2c911e','5de4e36faf0f537663548751819c22c454f2ef726fc2fe164dab78c8348c7858','2024-05-04 04:18:34.034','20240415065931_add_deposit_date_for_deposit_table',NULL,NULL,'2024-05-04 04:18:34.027',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calculation`
--

DROP TABLE IF EXISTS `calculation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calculation` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `isPaid` tinyint(1) NOT NULL DEFAULT 0,
  `userLevel` int(11) NOT NULL,
  `reward` double NOT NULL DEFAULT 0,
  `tax` double NOT NULL DEFAULT 0,
  `realReward` double NOT NULL DEFAULT 0,
  `memo` varchar(191) DEFAULT NULL,
  `bankAccount` varchar(191) DEFAULT NULL,
  `startDate` datetime(3) NOT NULL,
  `endDate` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`id`),
  KEY `calculation_userId_fkey` (`userId`),
  CONSTRAINT `calculation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calculation`
--

LOCK TABLES `calculation` WRITE;
/*!40000 ALTER TABLE `calculation` DISABLE KEYS */;
/*!40000 ALTER TABLE `calculation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `img` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `order` int(11) DEFAULT NULL,
  `parentid` int(11) DEFAULT NULL,
  `depth` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `category_parentid_fkey` (`parentid`),
  CONSTRAINT `category_parentid_fkey` FOREIGN KEY (`parentid`) REFERENCES `category` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Skin Cares & Body',1,1,'2024-05-04 04:19:37.591','2024-05-04 04:19:37.595',0,NULL,1),(2,'Hair Care',1,1,'2024-05-04 04:19:41.987','2024-05-04 04:19:41.990',0,NULL,1),(3,'Food',1,2,'2024-05-04 04:20:33.105','2024-05-04 04:20:33.109',0,NULL,1),(4,'Lotion',1,3,'2024-05-04 04:20:49.416','2024-05-04 04:20:49.419',1,1,2),(5,'Moistures',1,4,'2024-05-04 04:21:05.852','2024-05-04 04:21:05.858',1,4,3);
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoryproduct`
--

DROP TABLE IF EXISTS `categoryproduct`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoryproduct` (
  `productId` int(11) NOT NULL,
  `categoryId` int(11) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  PRIMARY KEY (`productId`,`categoryId`),
  KEY `categoryproduct_categoryId_fkey` (`categoryId`),
  CONSTRAINT `categoryproduct_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `category` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `categoryproduct_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoryproduct`
--

LOCK TABLES `categoryproduct` WRITE;
/*!40000 ALTER TABLE `categoryproduct` DISABLE KEYS */;
INSERT INTO `categoryproduct` VALUES (1,1,'2024-05-04 04:22:23.891','2024-05-04 04:22:23.891'),(1,4,'2024-05-04 04:22:23.891','2024-05-04 04:22:23.891'),(2,2,'2024-05-04 05:03:01.207','2024-05-04 05:03:01.207'),(2,5,'2024-05-04 05:03:01.207','2024-05-04 05:03:01.207'),(3,1,'2024-05-04 11:32:50.777','2024-05-04 11:32:50.777'),(3,5,'2024-05-04 11:32:50.777','2024-05-04 11:32:50.777'),(4,1,'2024-05-04 15:06:32.585','2024-05-04 15:06:32.585'),(4,2,'2024-05-04 15:06:32.585','2024-05-04 15:06:32.585'),(4,3,'2024-05-04 15:06:32.585','2024-05-04 15:06:32.585'),(4,4,'2024-05-04 15:06:32.585','2024-05-04 15:06:32.585'),(5,1,'2024-05-07 06:30:19.115','2024-05-07 06:30:19.115'),(5,4,'2024-05-07 06:30:19.115','2024-05-07 06:30:19.115'),(5,5,'2024-05-07 06:30:19.115','2024-05-07 06:30:19.115');
/*!40000 ALTER TABLE `categoryproduct` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centers`
--

LOCK TABLES `centers` WRITE;
/*!40000 ALTER TABLE `centers` DISABLE KEYS */;
INSERT INTO `centers` VALUES (1,'본사','본사','http://localhost:3001','2024-05-04 04:18:40.839','2024-05-04 04:18:40.839');
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
  `bgColor` varchar(191) NOT NULL DEFAULT '#FFFFFF',
  `discountRate` double NOT NULL DEFAULT 0,
  `minBuy` double NOT NULL DEFAULT 0,
  `minSub` int(11) NOT NULL DEFAULT 0,
  `rank` int(11) NOT NULL,
  `rewardRate` double NOT NULL DEFAULT 0,
  `txtColor` varchar(191) NOT NULL DEFAULT '#000000',
  `minSell` double NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `company_levels_rank_key` (`rank`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_levels`
--

LOCK TABLES `company_levels` WRITE;
/*!40000 ALTER TABLE `company_levels` DISABLE KEYS */;
INSERT INTO `company_levels` VALUES (1,'준회원','준회원','2024-05-04 04:18:40.839','2024-05-04 04:18:40.839','#FFFFFF',0,0,0,1,25000,'#000000',0),(2,'대리점','대리점','2024-05-04 04:18:40.839','2024-05-04 04:18:40.839','#FFFFFF',0,0,0,3,25000,'#000000',0),(3,'정회원','정회원','2024-05-04 04:18:40.839','2024-05-04 04:18:40.839','#FFFFFF',0,0,0,2,25000,'#000000',0);
/*!40000 ALTER TABLE `company_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `deposit`
--

DROP TABLE IF EXISTS `deposit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `deposit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `amount` double NOT NULL,
  `fee` int(11) NOT NULL DEFAULT 0,
  `method` int(11) NOT NULL DEFAULT 0,
  `memo` varchar(191) NOT NULL DEFAULT '',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `status` int(11) NOT NULL DEFAULT 0,
  `depositDate` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `isRewarded` int(11) NOT NULL DEFAULT 0,
  `calId` int(11) DEFAULT NULL,
  `isCalculated` tinyint(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `deposit_userId_fkey` (`userId`),
  KEY `deposit_calId_fkey` (`calId`),
  CONSTRAINT `deposit_calId_fkey` FOREIGN KEY (`calId`) REFERENCES `calculation` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `deposit_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `deposit`
--

LOCK TABLES `deposit` WRITE;
/*!40000 ALTER TABLE `deposit` DISABLE KEYS */;
/*!40000 ALTER TABLE `deposit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follows`
--

DROP TABLE IF EXISTS `follows`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follows` (
  `followedById` int(11) NOT NULL,
  `followingId` int(11) NOT NULL,
  PRIMARY KEY (`followingId`,`followedById`),
  KEY `follows_followedById_fkey` (`followedById`),
  CONSTRAINT `follows_followedById_fkey` FOREIGN KEY (`followedById`) REFERENCES `product` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `follows_followingId_fkey` FOREIGN KEY (`followingId`) REFERENCES `product` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follows`
--

LOCK TABLES `follows` WRITE;
/*!40000 ALTER TABLE `follows` DISABLE KEYS */;
/*!40000 ALTER TABLE `follows` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localfiles`
--

DROP TABLE IF EXISTS `localfiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localfiles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `filename` varchar(191) NOT NULL,
  `path` varchar(191) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `mimetype` varchar(191) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=47 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localfiles`
--

LOCK TABLES `localfiles` WRITE;
/*!40000 ALTER TABLE `localfiles` DISABLE KEYS */;
INSERT INTO `localfiles` VALUES (1,'Group-White-v2-shadow.png','localfiles/category/8f7f263ec3658c7248aa8c0a9b7b0792','2024-05-04 04:19:30.021','2024-05-04 04:19:30.021','image/png'),(2,'Group-White-v2-shadow.png','localfiles/category/f03ecc7eb4bfd40b267ff1aab6d0e4a2','2024-05-04 04:20:32.103','2024-05-04 04:20:32.103','image/png'),(3,'Group-White-v2-shadow.png','localfiles/category/d00cc16bc54c8ee4c11dd6ce55329aa3','2024-05-04 04:20:48.474','2024-05-04 04:20:48.474','image/png'),(4,'Group-White-v2-shadow.png','localfiles/category/c0c6fd81faa18d6368b8cb62c26e501d','2024-05-04 04:21:05.146','2024-05-04 04:21:05.146','image/png'),(5,'rudemy-transparent-black-v2-forkid.png','localfiles/product/c43a090b1beb5d8ae3770d5f58ec0e37','2024-05-04 04:21:40.870','2024-05-04 04:21:40.870','image/png'),(6,'rudemy-logo-transparent-black.png','localfiles/product/1a35805ffb24f0d7a5d1c3737ee4dd59','2024-05-04 04:21:43.866','2024-05-04 04:21:43.866','image/png'),(7,'rudemy-transparent-white.png','localfiles/product/736ba9c9651bee61609a385f526e2d5d','2024-05-04 04:21:46.500','2024-05-04 04:21:46.500','image/png'),(8,'rudemy-transparent-white.png','localfiles/product/93709c4a0a1a843d84cdd840e0d66367','2024-05-04 04:21:49.836','2024-05-04 04:21:49.836','image/png'),(9,'rudemy-transparent-white.png','localfiles/product/a0f922c82b7fbbac5b26977705f2ca20','2024-05-04 04:21:52.218','2024-05-04 04:21:52.218','image/png'),(10,'rudemy-logo-v2.png','localfiles/product/d1bb37663897cfbfb9f45f9815c51968','2024-05-04 04:21:57.640','2024-05-04 04:21:57.640','image/png'),(11,'Group BLACK.png','localfiles/product/427c8ee3bac70bba7301921bafad43e2','2024-05-04 04:22:00.854','2024-05-04 04:22:00.854','image/png'),(12,'rudemy-logo-v2.png','localfiles/product/09df013f0db6e1267faa5b9ec034b54a','2024-05-04 04:22:03.718','2024-05-04 04:22:03.718','image/png'),(13,'rudemy-logo-transparent-black.png','localfiles/product/59ab7ef8be031fea5c0a4a16d06c1c0a','2024-05-04 05:01:47.103','2024-05-04 05:01:47.103','image/png'),(14,'rudemy-transparent-white.png','localfiles/product/11ce37c8138dd2ee04306005b4b9b5b3','2024-05-04 05:01:50.329','2024-05-04 05:01:50.329','image/png'),(15,'rudemy-transparent-white.png','localfiles/product/95cc4db0cb989dc0d96bdda83436d1b8','2024-05-04 05:01:53.330','2024-05-04 05:01:53.330','image/png'),(16,'rudemy-logo-transparent-black.png','localfiles/product/fafd08f82c92cef650e98181c6d29bc6','2024-05-04 05:01:56.672','2024-05-04 05:01:56.672','image/png'),(17,'rudemy-transparent-white.png','localfiles/product/9114fdf5b60e833a5a3ad43c599cadd5','2024-05-04 05:02:02.582','2024-05-04 05:02:02.582','image/png'),(18,'RUDEMY-LOGO.png','localfiles/product/291f710842aa1294cf00f895be7df531','2024-05-04 05:02:06.050','2024-05-04 05:02:06.050','image/png'),(19,'rudemy-transparent-white.png','localfiles/product/7938ea4063347627177031ae4c28b632','2024-05-04 05:02:08.609','2024-05-04 05:02:08.609','image/png'),(20,'rudemy-transparent-white.png','localfiles/product/db3714ae11630972dccc64a6d8d19057','2024-05-04 05:02:11.526','2024-05-04 05:02:11.526','image/png'),(21,'img_prod_desc.jpeg','localfiles/product/56461a5b1d4dc61b54b8c54920323874','2024-05-04 11:29:21.835','2024-05-04 11:29:21.835','image/jpeg'),(22,'img_prod_desc.jpeg','localfiles/product/83c5036e782190c4eb6a753bf33303db','2024-05-04 11:31:22.378','2024-05-04 11:31:22.378','image/jpeg'),(23,'test-linh-scale-4.png','localfiles/product/b636da67f95d4c932f35750f52025743','2024-05-04 11:31:26.199','2024-05-04 11:31:26.199','image/png'),(24,'20240430_092627.jpg','localfiles/product/761d7ab570af95cf349aed7b93fca914','2024-05-04 11:31:29.554','2024-05-04 11:31:29.554','image/jpeg'),(25,'test-linh-scale-4.png','localfiles/product/6a907acbe7890eb20f100c031795d4f2','2024-05-04 11:31:32.735','2024-05-04 11:31:32.735','image/png'),(26,'test-linh-8-scale-2.png','localfiles/product/d8fd6da26a7736135861b64b16b9af41','2024-05-04 11:31:35.409','2024-05-04 11:31:35.409','image/png'),(27,'download (1).png','localfiles/product/6faaba486d59aab8146939a5f829c9dd','2024-05-04 11:31:58.389','2024-05-04 11:31:58.389','image/png'),(28,'download 2.png','localfiles/product/b6efcd77788b8b9198292a1a5264b051','2024-05-04 11:32:02.534','2024-05-04 11:32:02.534','image/png'),(29,'download 2.png','localfiles/product/b22a482eb8dbbf39dcfd8891a9ae0af2','2024-05-04 11:32:06.414','2024-05-04 11:32:06.414','image/png'),(30,'test-linh-scale-2.png','localfiles/product/bc8b813418e1a958d9c87335ab401ca2','2024-05-04 11:32:11.574','2024-05-04 11:32:11.574','image/png'),(31,'test-linh.png','localfiles/product/f842559ea464e2c5f85847ca96b23bcb','2024-05-04 11:32:14.527','2024-05-04 11:32:14.527','image/png'),(32,'photo.png','localfiles/product/16f6032b85406c7c16c55db9484b2c4a','2024-05-04 11:32:18.228','2024-05-04 11:32:18.228','image/png'),(33,'img_prod_desc.jpeg','localfiles/product/4c6627f093e49098f4ea527123939276','2024-05-04 15:01:33.918','2024-05-04 15:01:33.918','image/jpeg'),(34,'img_prod_desc.jpeg','localfiles/product/d370492c0e127b8452ae17e0a7786ce7','2024-05-04 15:01:40.392','2024-05-04 15:01:40.392','image/jpeg'),(35,'img_prod_desc.jpeg','localfiles/product/21fe18e8cf458d68595ed99dbe0b3ad6','2024-05-04 15:06:03.020','2024-05-04 15:06:03.020','image/jpeg'),(36,'1337265250.jpg','localfiles/product/82bd4a6a21b323c45217cba905c47eb1','2024-05-04 15:06:09.947','2024-05-04 15:06:09.947','image/jpeg'),(37,'test-linh-scale-4.png','localfiles/product/557e492a3d3aff4a3b47b8393e03f8e5','2024-05-04 15:06:14.811','2024-05-04 15:06:14.811','image/png'),(38,'test-linh-scale.png','localfiles/product/cb96bed70bf7c1251562d7231c916226','2024-05-04 15:06:20.891','2024-05-04 15:06:20.891','image/png'),(39,'photo.png','localfiles/product/f9a223f8591a06ab78e2679001c831d7','2024-05-04 15:06:24.844','2024-05-04 15:06:24.844','image/png'),(40,'download 2.png','localfiles/product/78dfa935d6975ecf92a6cb32a4d01662','2024-05-04 15:06:28.184','2024-05-04 15:06:28.184','image/png'),(41,'1337265250.jpg','localfiles/product/820c8df3a911717a065f6cd5b07ed1db','2024-05-07 06:29:49.965','2024-05-07 06:29:49.965','image/jpeg'),(42,'1337265250.jpg','localfiles/product/225d1f7ee161b1d17d882775f4c811bd','2024-05-07 06:29:54.066','2024-05-07 06:29:54.066','image/jpeg'),(43,'2826407348.jpg','localfiles/product/04aa25ea17a8150ebd97c36511a8ebac','2024-05-07 06:30:03.310','2024-05-07 06:30:03.310','image/jpeg'),(44,'1337265250.jpg','localfiles/product/221fc0e30760dfc86e6a0310cf85043b','2024-05-07 06:30:08.617','2024-05-07 06:30:08.617','image/jpeg'),(45,'1337265250.jpg','localfiles/product/2882f62e1c831a6a44e0c85f6668a991','2024-05-07 06:30:12.533','2024-05-07 06:30:12.533','image/jpeg'),(46,'1337265250.jpg','localfiles/product/09548d5bcaa298789201254eac6a91ff','2024-05-07 06:30:16.921','2024-05-07 06:30:16.921','image/jpeg');
/*!40000 ALTER TABLE `localfiles` ENABLE KEYS */;
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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `amountPV` double NOT NULL DEFAULT 0,
  `branch` varchar(191) DEFAULT NULL,
  `cardFee` double NOT NULL DEFAULT 0,
  `code` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `endSellDate` datetime(3) DEFAULT NULL,
  `extraImg1` int(11) NOT NULL,
  `extraImg2` int(11),
  `extraImg3` int(11) DEFAULT NULL,
  `extraImg4` int(11) DEFAULT NULL,
  `extraImg5` int(11) DEFAULT NULL,
  `isActive` tinyint(1) NOT NULL,
  `isDeliveriable` tinyint(1) DEFAULT 0,
  `isDuplicatable` tinyint(1) NOT NULL DEFAULT 1,
  `listImg` int(11) DEFAULT NULL,
  `maxPerSell` double DEFAULT NULL,
  `mileage` double NOT NULL DEFAULT 0,
  `origin` varchar(191) DEFAULT NULL,
  `pricePV` double NOT NULL DEFAULT 0,
  `price_origin` double DEFAULT NULL,
  `price_provider` double DEFAULT NULL,
  `price_sell` double DEFAULT NULL,
  `producer` varchar(191) DEFAULT NULL,
  `quantity` double NOT NULL DEFAULT 0,
  `sellType` int(11) NOT NULL DEFAULT 1,
  `soldQuantity` double DEFAULT 0,
  `startSellDate` datetime(3) DEFAULT NULL,
  `thumbnailImg` int(11) DEFAULT NULL,
  `vat` double NOT NULL DEFAULT 0,
  `customercode` varchar(191) DEFAULT NULL,
  `mainImg` int(11) DEFAULT NULL,
  `guide_info` text DEFAULT NULL,
  `m_desc` varchar(191) DEFAULT NULL,
  `short_desc` varchar(191) DEFAULT NULL,
  `description_img_id` int(11) DEFAULT NULL,
  `guide_img_id` int(11) DEFAULT NULL,
  `is_description_img` tinyint(1) NOT NULL DEFAULT 0,
  `is_guide_img` tinyint(1) NOT NULL DEFAULT 0,
  `is_prod_info_img` tinyint(1) NOT NULL DEFAULT 0,
  `prod_img_id` int(11) DEFAULT NULL,
  `prod_info` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_extraImg1_key` (`extraImg1`),
  UNIQUE KEY `product_extraImg2_key` (`extraImg2`),
  UNIQUE KEY `product_guide_img_id_key` (`guide_img_id`),
  UNIQUE KEY `product_prod_img_id_key` (`prod_img_id`),
  UNIQUE KEY `product_description_img_id_key` (`description_img_id`),
  UNIQUE KEY `product_extraImg3_key` (`extraImg3`),
  UNIQUE KEY `product_extraImg4_key` (`extraImg4`),
  UNIQUE KEY `product_extraImg5_key` (`extraImg5`),
  UNIQUE KEY `product_mainImg_key` (`mainImg`),
  UNIQUE KEY `product_listImg_key` (`listImg`),
  UNIQUE KEY `product_thumbnailImg_key` (`thumbnailImg`),
  CONSTRAINT `product_description_img_id_fkey` FOREIGN KEY (`description_img_id`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_extraImg1_fkey` FOREIGN KEY (`extraImg1`) REFERENCES `localfiles` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `product_extraImg2_fkey` FOREIGN KEY (`extraImg2`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_extraImg3_fkey` FOREIGN KEY (`extraImg3`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_extraImg4_fkey` FOREIGN KEY (`extraImg4`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_extraImg5_fkey` FOREIGN KEY (`extraImg5`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_guide_img_id_fkey` FOREIGN KEY (`guide_img_id`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_listImg_fkey` FOREIGN KEY (`listImg`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_mainImg_fkey` FOREIGN KEY (`mainImg`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_prod_img_id_fkey` FOREIGN KEY (`prod_img_id`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `product_thumbnailImg_fkey` FOREIGN KEY (`thumbnailImg`) REFERENCES `localfiles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Lotion 30303',0,'삼성',0,'S1010101','',NULL,10,11,12,NULL,NULL,1,0,1,NULL,NULL,0,'한국',0,10000,9000,10000,'루데미',10000,1,0,NULL,NULL,0,NULL,8,'',NULL,'fasdf',7,5,1,1,1,6,''),(2,'Lotion 30303',0,'삼성',0,'S1010101','',NULL,18,19,20,NULL,NULL,1,0,1,NULL,NULL,0,'한국',0,10000,9000,10000,'루데미',10000,1,0,NULL,NULL,0,NULL,16,'',NULL,'sadfa',15,13,1,1,1,14,''),(3,'ewrwer',0,'erqewr',0,'erwer','',NULL,28,29,30,31,32,1,0,1,26,NULL,0,'rqewr',0,34324,4324,34124,'ewrewr',34234,1,0,NULL,NULL,0,NULL,27,'',NULL,'erewrq',24,22,1,1,1,23,''),(4,'해외출발SEL ↔ SGN',0,'삼성',0,'S9356178','',NULL,39,40,NULL,NULL,NULL,1,0,1,38,NULL,0,'한국',0,16500,15000,16500,'삼성',1000,1,0,NULL,NULL,0,NULL,37,'',NULL,'ㅊㄱㄷㄱㅈㄷㅂㄱㅈㄱㅈㅂㄱ',35,33,1,1,1,34,''),(5,'티스톡스잇몸케어치약2',0,'삼성',0,'s03045','',NULL,46,NULL,NULL,NULL,NULL,1,0,1,45,NULL,0,'한국',0,30000,10000,28000,'삼성',15000,1,0,NULL,NULL,0,NULL,44,'',NULL,'asfafafaca. sfsaf asfasfa fa asfsadf afa',43,41,1,1,1,42,'');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
  `recomid` int(11) DEFAULT NULL,
  `sponid` int(11) DEFAULT NULL,
  `return_bank` varchar(191) DEFAULT NULL,
  `return_account` varchar(191) DEFAULT NULL,
  `return_name` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL,
  `role` varchar(191) NOT NULL,
  `centerId` int(11) NOT NULL DEFAULT 0,
  `levelId` int(11) NOT NULL DEFAULT 0,
  `sub1` int(11) DEFAULT 0,
  `sub2` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_key` (`email`),
  UNIQUE KEY `users_member_id_key` (`member_id`),
  KEY `users_centerId_fkey` (`centerId`),
  KEY `users_levelId_fkey` (`levelId`),
  KEY `users_recomid_fkey` (`recomid`),
  CONSTRAINT `users_centerId_fkey` FOREIGN KEY (`centerId`) REFERENCES `centers` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `users_levelId_fkey` FOREIGN KEY (`levelId`) REFERENCES `company_levels` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `users_recomid_fkey` FOREIGN KEY (`recomid`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'master','master@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','master','','','','','','','','',NULL,NULL,NULL,NULL,NULL,'2024-05-04 04:18:41.667','2024-05-04 04:18:46.147','admin',1,1,2,3),(2,'a0000002','user1@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 1','','','','','','','','',1,NULL,NULL,NULL,NULL,'2024-05-04 04:18:42.921','2024-05-04 04:18:46.147','user',1,1,7,8),(3,'a0000005','user4@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 4','','','','','','','','',1,NULL,NULL,NULL,NULL,'2024-05-04 04:18:42.921','2024-05-04 04:18:46.147','user',1,1,11,12),(4,'a0000004','user3@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 3','','','','','','','','',1,NULL,NULL,NULL,NULL,'2024-05-04 04:18:42.921','2024-05-04 04:18:46.147','user',1,1,16,17),(5,'a0000006','user5@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 5','','','','','','','','',1,NULL,NULL,NULL,NULL,'2024-05-04 04:18:42.921','2024-05-04 04:18:42.921','user',1,1,0,0),(6,'a0000003','user2@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 2','','','','','','','','',1,NULL,NULL,NULL,NULL,'2024-05-04 04:18:42.921','2024-05-04 04:18:42.921','user',1,1,0,0),(7,'a0000007','user6@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 6','','','','','','','','',2,NULL,NULL,NULL,NULL,'2024-05-04 04:18:43.686','2024-05-04 04:18:43.686','user',1,1,0,0),(8,'a0000009','user8@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 8','','','','','','','','',2,NULL,NULL,NULL,NULL,'2024-05-04 04:18:43.686','2024-05-04 04:18:43.686','user',1,1,0,0),(9,'a0000010','user9@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 9','','','','','','','','',2,NULL,NULL,NULL,NULL,'2024-05-04 04:18:43.686','2024-05-04 04:18:43.686','user',1,1,0,0),(10,'a0000008','user7@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 7','','','','','','','','',2,NULL,NULL,NULL,NULL,'2024-05-04 04:18:43.686','2024-05-04 04:18:43.686','user',1,1,0,0),(11,'a0000011','user10@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 10','','','','','','','','',3,NULL,NULL,NULL,NULL,'2024-05-04 04:18:44.650','2024-05-04 04:18:44.650','user',1,1,0,0),(12,'a0000014','user13@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 13','','','','','','','','',3,NULL,NULL,NULL,NULL,'2024-05-04 04:18:44.650','2024-05-04 04:18:44.650','user',1,1,0,0),(13,'a0000012','user11@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 11','','','','','','','','',3,NULL,NULL,NULL,NULL,'2024-05-04 04:18:44.650','2024-05-04 04:18:44.650','user',1,1,0,0),(14,'a0000013','user12@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 12','','','','','','','','',3,NULL,NULL,NULL,NULL,'2024-05-04 04:18:44.650','2024-05-04 04:18:44.650','user',1,1,0,0),(15,'a0000015','user14@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 14','','','','','','','','',3,NULL,NULL,NULL,NULL,'2024-05-04 04:18:44.650','2024-05-04 04:18:44.650','user',1,1,0,0),(16,'a0000016','user15@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 15','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(17,'a0000024','user23@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 23','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(18,'a0000019','user18@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 18','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(19,'a0000021','user20@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 20','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(20,'a0000020','user19@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 19','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(21,'a0000018','user17@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 17','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(22,'a0000023','user22@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 22','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(23,'a0000017','user16@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 16','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0),(24,'a0000022','user21@gmail.com','$argon2id$v=19$m=65536,t=3,p=4$BJaOMltqvVlvXJCHp4defg$nUooavLqIZ4Lxu1QzzeuUViSpZs4hwzidG+DocS0l/I','User 21','','','','','','','','',4,NULL,NULL,NULL,NULL,'2024-05-04 04:18:45.389','2024-05-04 04:18:45.389','user',1,1,0,0);
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

-- Dump completed on 2024-08-27 13:47:50
