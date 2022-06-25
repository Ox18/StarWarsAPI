-- MySQL dump 10.13  Distrib 8.0.29, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: starwars
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `starships`
--

DROP TABLE IF EXISTS `starships`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `starships` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(120) DEFAULT NULL,
  `modelo` varchar(120) DEFAULT NULL,
  `clase_de_estrella` varchar(120) DEFAULT NULL,
  `fabricante` varchar(120) DEFAULT NULL,
  `costo_en_creditos` varchar(120) DEFAULT NULL,
  `longitud` varchar(120) DEFAULT NULL,
  `tripulacion` varchar(120) DEFAULT NULL,
  `pasajeros` varchar(120) DEFAULT NULL,
  `max_velocidad_atmosferica` varchar(120) DEFAULT NULL,
  `hiperpropulsion` varchar(120) DEFAULT NULL,
  `mglt` varchar(120) DEFAULT NULL,
  `capacidad_carga` varchar(120) DEFAULT NULL,
  `tiempo_consumo` varchar(120) DEFAULT NULL,
  `peliculas` json DEFAULT NULL,
  `pilotos` varchar(120) DEFAULT NULL,
  `url` varchar(120) DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `fecha_actualizacion` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `starships`
--

LOCK TABLES `starships` WRITE;
/*!40000 ALTER TABLE `starships` DISABLE KEYS */;
INSERT INTO `starships` VALUES (2,'Death Star','DS-1 Orbital Battle Station','Deep Space Mobile Battlestation','Imperial Department of Military Research, Sienar Fleet Systems','1000000000000','120000','342953','843342','n/a','4.0','10 MGLT','1000000000000','3 years','[]','[]','https://swapi.py4e.com/api/starships/9/','2022-06-24 21:50:31','2022-06-24 16:50:31'),(3,'Death Star','DS-1 Orbital Battle Station','Deep Space Mobile Battlestation','Imperial Department of Military Research, Sienar Fleet Systems','1000000000000','120000','342953','843342','n/a','4.0','10 MGLT','1000000000000','3 years','[]','[]','https://swapi.py4e.com/api/starships/9/','2022-06-24 21:51:38','2022-06-24 16:51:38'),(1000,'Death Star','DS-1 Orbital Battle Station','Deep Space Mobile Battlestation','Imperial Department of Military Research, Sienar Fleet Systems','1000000000000','120000','342953','843342','n/a','4.0','10 MGLT','1000000000000','3 years','[]','[]','https://swapi.py4e.com/api/starships/9/','2022-06-24 23:03:55','2022-06-24 18:03:55'),(1001,'Death Star','DS-1 Orbital Battle Station','Deep Space Mobile Battlestation','Imperial Department of Military Research, Sienar Fleet Systems','1000000000000','120000','342953','843342','n/a','4.0','10 MGLT','1000000000000','3 years','[]','[]','https://swapi.py4e.com/api/starships/9/','2022-06-24 23:03:58','2022-06-24 18:03:58'),(1002,'Death Star','DS-1 Orbital Battle Station','Deep Space Mobile Battlestation','Imperial Department of Military Research, Sienar Fleet Systems','1000000000000','120000','342953','843342','n/a','4.0','10 MGLT','1000000000000','3 years','[]','[]','https://swapi.py4e.com/api/starships/9/','2022-06-24 23:16:31','2022-06-24 18:16:31'),(1003,'Death Star','DS-1 Orbital Battle Station','Deep Space Mobile Battlestation','Imperial Department of Military Research, Sienar Fleet Systems','1000000000000','120000','342953','843342','n/a','4.0','10 MGLT','1000000000000','3 years','[]','[]','https://swapi.py4e.com/api/starships/9/','2022-06-24 23:16:33','2022-06-24 18:16:33');
/*!40000 ALTER TABLE `starships` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-24 20:19:34
