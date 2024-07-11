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
-- Table structure for table `title_history`
--

DROP TABLE IF EXISTS `title_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `title_history` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title_id` int DEFAULT NULL,
  `superstar_id` int DEFAULT NULL,
  `date_won` date DEFAULT NULL,
  `date_lost` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `title_id` (`title_id`),
  KEY `superstar_id` (`superstar_id`),
  CONSTRAINT `title_history_ibfk_1` FOREIGN KEY (`title_id`) REFERENCES `titles` (`id`),
  CONSTRAINT `title_history_ibfk_2` FOREIGN KEY (`superstar_id`) REFERENCES `superstars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `title_history`
--

LOCK TABLES `title_history` WRITE;
/*!40000 ALTER TABLE `title_history` DISABLE KEYS */;
INSERT INTO `title_history` VALUES (23,1,2,'2024-04-07',NULL),(24,1,22,'2022-04-03','2024-04-07'),(25,1,43,'2022-02-19','2022-04-03'),(26,1,36,'2022-01-29','2022-02-19'),(27,1,43,'2022-01-01','2022-01-29'),(28,1,1,'2021-09-13','2022-01-01'),(29,1,36,'2021-03-01','2021-09-13'),(30,1,7,'2021-02-21','2021-03-01'),(31,1,41,'2020-11-16','2021-02-21'),(32,1,10,'2020-10-25','2020-11-16'),(33,2,3,'2024-04-07',NULL),(34,2,41,'2024-04-07','2024-04-07'),(35,2,9,'2023-05-27','2024-04-07'),(36,3,4,'2024-05-25',NULL),(37,3,16,'2024-04-22','2024-05-25'),(38,3,44,'2023-04-01','2024-04-15'),(39,3,21,'2022-12-30','2023-04-01'),(40,3,4,'2022-07-02','2022-10-08'),(41,3,21,'2021-10-22','2022-05-08'),(42,3,16,'2021-08-21','2021-10-22'),(43,3,8,'2021-04-21','2021-08-21'),(44,3,42,'2020-10-25','2021-04-21');
/*!40000 ALTER TABLE `title_history` ENABLE KEYS */;
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
