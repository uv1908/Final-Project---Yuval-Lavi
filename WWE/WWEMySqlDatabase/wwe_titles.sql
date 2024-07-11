-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: wwe
-- ------------------------------------------------------
-- Server version	8.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `titles`
--

DROP TABLE IF EXISTS `titles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `titles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `img_url` varchar(255) NOT NULL,
  `current_holder` int DEFAULT NULL,
  `years_active` varchar(255) DEFAULT NULL,
  `header_url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `current_holder` (`current_holder`),
  CONSTRAINT `titles_ibfk_1` FOREIGN KEY (`current_holder`) REFERENCES `superstars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `titles`
--

LOCK TABLES `titles` WRITE;
/*!40000 ALTER TABLE `titles` DISABLE KEYS */;
INSERT INTO `titles` VALUES (1,'WWE Championship','https://www.wwe.com/f/styles/wwe_16_9_l/public/all/2024/04/TITLE_04192023gd_0062_Fin--b4ea60da7626c3ce7fe770d2f0955917.png',2,'1963-PRESENT','https://www.wwe.com/f/styles/wwe_16_9_full/public/2016/03/WWE_World_Heavyweight_Championship_Montage_0--4aea31a7044349288fadce75c9ddd5a3.jpg'),(2,'World Heavyweight Championship','https://www.wwe.com/f/styles/wwe_16_9_l/public/all/2023/05/WWE_World_Championship--3f7deec341d4257875929ee8ab140834.png',3,'2023-PRESENT','https://www.wwe.com/f/styles/wwe_16_9_full/public/all/2024/06/NXT_UK_WorldHeavyweight_Championship--1ee7b8efb02b59e92c75a43c1f4d138f.jpg'),(3,'Women\'s World Championship','https://www.wwe.com/f/styles/wwe_16_9_l/public/all/2023/06/TITLE_04212023gd_0006_Fin--39727c5972135200bd8983992c1424e3.png',4,'2016-PRESENT','https://www.wwe.com/f/styles/wwe_16_9_full/public/all/2023/04/20230428_Womens_SDChampionship_Header--3a6495f31bffbed91439fee01e12e516.jpg');
/*!40000 ALTER TABLE `titles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-07-11 19:21:48
