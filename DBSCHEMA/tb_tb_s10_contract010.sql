CREATE DATABASE  IF NOT EXISTS `tb` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `tb`;
-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: tb
-- ------------------------------------------------------
-- Server version	8.0.22

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
-- Table structure for table `tb_s10_contract010`
--

DROP TABLE IF EXISTS `tb_s10_contract010`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tb_s10_contract010` (
  `CONTRACT_ID` int NOT NULL AUTO_INCREMENT,
  `CREATED_DATE` date NOT NULL,
  `CREATED_PROGRAM_ID` varchar(22) NOT NULL,
  `LAST_UPDATE_DATE` date NOT NULL,
  `LAST_UPDATE_PROGRAM_ID` varchar(22) NOT NULL,
  `CONTRACT_DATE` date NOT NULL,
  `CONTRACT_TP` varchar(2) DEFAULT NULL,
  `CONTRACT_TERM` int DEFAULT NULL,
  `PAY_DATE` int DEFAULT NULL,
  `START_DATE` date DEFAULT NULL,
  `END_DATE` date DEFAULT NULL,
  `MEMBER_ID` int DEFAULT NULL,
  `END_FLAG` varchar(1) DEFAULT 'N',
  `CONTRACT_PATH` varchar(1) DEFAULT NULL,
  `PAY_METHOD` varchar(2) DEFAULT NULL,
  `COMMENT` varchar(300) DEFAULT NULL,
  `CONTRACT_MONEY` int NOT NULL,
  `CONTRACT_LOCKER` varchar(10) DEFAULT NULL,
  `CONTRACT_ROOM` varchar(10) DEFAULT NULL,
  `DATA_END_STATUS` varchar(1) DEFAULT NULL,
  `DATA_END_DATE` date DEFAULT NULL,
  `DATA_END_PROGRAM_ID` varchar(22) DEFAULT NULL,
  PRIMARY KEY (`CONTRACT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tb_s10_contract010`
--

LOCK TABLES `tb_s10_contract010` WRITE;
/*!40000 ALTER TABLE `tb_s10_contract010` DISABLE KEYS */;
INSERT INTO `tb_s10_contract010` VALUES (105,'2021-02-05','','2021-02-05','','2021-02-05','FI',2,5,'2021-02-05','2021-04-05',100,'N','A','MO','계약기간 만료 또는 종료시 사업지 주소지와 전화를 7일이내 이전해야 하고,\n계약을 해지할 경우 7일이전에 서면 또는 구두 통보해야함.',0,'L_303','FI_304',NULL,NULL,NULL);
/*!40000 ALTER TABLE `tb_s10_contract010` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-02-05 22:35:45
