-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 28-05-2024 a las 07:34:39
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `onecardgame`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `card`
--

CREATE TABLE `card` (
  `id` varchar(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(100) DEFAULT NULL,
  `rarity` varchar(50) DEFAULT NULL,
  `cost` int(11) DEFAULT NULL,
  `power` int(11) DEFAULT NULL,
  `attribute` varchar(100) DEFAULT NULL,
  `counter` int(11) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `arc_1` varchar(100) DEFAULT NULL,
  `arc_2` varchar(100) DEFAULT NULL,
  `arc_3` varchar(100) DEFAULT NULL,
  `effect_1` int(11) DEFAULT NULL,
  `effect_2` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `card`
--

INSERT INTO `card` (`id`, `name`, `type`, `rarity`, `cost`, `power`, `attribute`, `counter`, `color`, `arc_1`, `arc_2`, `arc_3`, `effect_1`, `effect_2`) VALUES
('OP01-001', 'Roronoa Zoro', 'leader', 'L', 0, 5, 'Slash', 0, 'Red', 'Supernovas', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-002', 'Trafalgar Law', 'leader', 'L', 0, 5, 'Slash', 0, 'Red/Green', 'Supernovas', 'Heart Pirates', 'NULL', NULL, NULL),
('OP01-003', 'Monkey.D.Luffy', 'leader', 'L', 0, 5, 'Strike', 0, 'Red/Green', 'Supernovas', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-004', 'Usopp', 'Character', 'R', 2, 3, 'Ranged', 2000, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-005', 'Uta', 'Character', 'R', 4, 4, 'Special', 0, 'Red', 'Film', 'NULL', 'NULL', NULL, NULL),
('OP01-006', 'Otama', 'Character', 'UC', 1, 0, 'Special', 2000, 'Red', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-007', 'Caribou', 'Character', 'C', 3, 4, 'Special', 1000, 'Red', 'Supernovas', 'Caribou Pirates', 'NULL', NULL, NULL),
('OP01-008', 'Cavendish', 'Character', 'C', 4, 5, 'Strike', 0, 'Red', 'Supernovas', 'Beautiful Pirates', 'NULL', NULL, NULL),
('OP01-009', 'Carrot', 'Character', 'C', 2, 3, 'Strike', 1000, 'Red', 'Minks', 'NULL', 'NULL', NULL, NULL),
('OP01-010', 'Komachiyo', 'Character', 'C', 1, 3, 'Strike', 1000, 'Red', 'Animal', 'Land of Wano', 'NULL', NULL, NULL),
('OP01-011', 'Gordon', 'Character', 'UC', 2, 3, 'Wisdom', 2000, 'Red', 'Film', 'NULL', 'NULL', NULL, NULL),
('OP01-012', 'Sai', 'Character', 'C', 2, 4, 'Slash', 1000, 'Red', 'Happosui Army', 'NULL', 'NULL', NULL, NULL),
('OP01-013', 'Sanji', 'Character', 'R', 2, 3, 'Strike', 2000, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-014', 'Jinbe', 'Character', 'UC', 4, 5, 'Strike', 0, 'Red', 'Fish-Man', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-015', 'Tony Tony.Chopper', 'Character', 'UC', 3, 4, 'Wisdom', 1000, 'Red', 'Animal', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-016', 'Nami', 'Character', 'R', 1, 2, 'Special', 1000, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-017', 'Nico Robin', 'Character', 'R', 3, 4, 'Strike', 1000, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-018', 'Hajrudin', 'Character', 'C', 4, 6, 'Strike', 1000, 'Red', 'Giant', 'New Giant Pirates', 'NULL', NULL, NULL),
('OP01-019', 'Bartolomeo', 'Character', 'C', 2, 2, 'Special', 1000, 'Red', 'Supernovas', 'Barto Club', 'NULL', NULL, NULL),
('OP01-020', 'Hyogoro', 'Character', 'C', 2, 3, 'Strike', 1000, 'Red', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-021', 'Franky', 'Character', 'UC', 3, 4, 'Ranged', 0, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-022', 'Brook', 'Character', 'UC', 4, 5, 'Slash', 1000, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-023', 'Marco', 'Character', 'C', 3, 5, 'Special', 1000, 'Red', 'Former Whitebeard Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-024', 'Monkey.D.Luffy', 'Character', 'SR', 2, 3, 'Strike', 1000, 'Red', 'Supernovas', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-025', 'Roronoa Zoro', 'Character', 'SR', 3, 5, 'Slash', 0, 'Red', 'Supernovas', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-026', 'Gum-Gum Fire-Fist Pistol Red Hawk', 'Event', 'R', 2, 0, 'NULL', 0, 'Red', 'Supernovas', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-027', 'Round Table', 'Event', 'C', 4, 0, 'NULL', 0, 'Red', 'Supernovas', 'Beautiful Pirates', 'NULL', NULL, NULL),
('OP01-028', 'Green Star Rafflesia', 'Event', 'C', 1, 0, 'NULL', 0, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-029', 'Radical Beam!!', 'Event', 'UC', 1, 0, 'NULL', 0, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-030', 'In Two Years!! At the Sabaody Archipelago!!', 'Event', 'UC', 1, 0, 'NULL', 0, 'Red', 'Straw Hat Crew', 'NULL', 'NULL', NULL, NULL),
('OP01-031', 'Kouzuki Oden', 'leader', 'L', 0, 5, 'Slash', 0, 'Green', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-032', 'Asuhura Doji', 'Character', 'UC', 3, 4, 'Slash', 1000, 'Green', 'Land of Wano', 'The Akazaya Nine', 'NULL', NULL, NULL),
('OP01-033', 'Izo', 'Character', 'UC', 3, 3, 'Ranged', 2000, 'Green', 'Land of Wano', 'Former Whitebeard Pirates', 'NULL', NULL, NULL),
('OP01-034', 'Inuarashi', 'Character', 'C', 3, 4, 'Slash', 1000, 'Green', 'Minks', 'Land of Wano', 'The Akazaya Nine', NULL, NULL),
('OP01-035', 'Okiku', 'Character', 'R', 3, 5, 'Slash', 0, 'Green', 'Land of Wano', 'The Akazaya Nine', 'NULL', NULL, NULL),
('OP01-036', 'Otsuru', 'Character', 'C', 1, 3, 'Wisdom', 1000, 'Green', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-037', 'Kawamatsu', 'Character', 'C', 2, 3, 'Slash', 1000, 'Green', 'Fish-Man', 'Land of Wano', 'The Akazaya Nine', NULL, NULL),
('OP01-038', 'Kanjuro', 'Character', 'C', 2, 3, 'Slash', 1000, 'Green', 'Land of Wano', 'The Akazaya Nine', 'NULL', NULL, NULL),
('OP01-039', 'Killer', 'Character', 'UC', 2, 2, 'Slash', 1000, 'Green', 'Supernovas', 'Kid Pirates', 'NULL', NULL, NULL),
('OP01-040', 'Kin\'emon', 'Character', 'SR', 6, 6, 'Slash', 0, 'Green', 'Land of Wano', 'The Akazaya Nine', 'NULL', NULL, NULL),
('OP01-041', 'Kouzuki Momonosuke', 'Character', 'R', 1, 0, 'Slash', 1000, 'Green', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-042', 'Komurasaki', 'Character', 'UC', 1, 0, 'Wisdom', 1000, 'Green', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-043', 'Shinobu', 'Character', 'C', 3, 5, 'Special', 1000, 'Green', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-044', 'Shachi', 'Character', 'C', 3, 4, 'Strike', 1000, 'Green', 'Heart Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-045', 'Jean Bart', 'Character', 'C', 4, 6, 'Strike', 1000, 'Green', 'Heart Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-046', 'Denjiro', 'Character', 'R', 5, 7, 'Slash', 0, 'Green', 'Land of Wano', 'The Akazaya Nine', 'NULL', NULL, NULL),
('OP01-047', 'Trafalgar Law', 'Character', 'SR', 5, 6, 'Slash', 0, 'Green', 'Supernovas', 'Heart Pirates', 'NULL', NULL, NULL),
('OP01-048', 'Nekomamushi', 'Character', 'C', 2, 3, 'Slash', 1000, 'Green', 'Minks', 'Land of Wano', 'The Akazaya Nine', NULL, NULL),
('OP01-049', 'Bepo', 'Character', 'R', 4, 4, 'Strike', 2000, 'Green', 'Minks', 'Heart Pirates', 'NULL', NULL, NULL),
('OP01-050', 'Penguin', 'Character', 'C', 3, 2, 'Strike', 1000, 'Green', 'Heart Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-051', ' Eustass\"Captain\"Kid', 'Character', 'SR', 8, 8, 'Special', 0, 'Green', 'Supernovas', 'Kid Pirates', 'NULL', NULL, NULL),
('OP01-052', 'Raizo', 'Character', 'UC', 3, 4, 'Slash', 1000, 'Green', 'Land of Wano', 'The Akazaya Nine', 'NULL', NULL, NULL),
('OP01-053', 'Wire', 'Character', 'C', 2, 4, 'Slash', 1000, 'Green', 'Kid Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-054', 'X.Drake', 'Character', 'R', 5, 6, 'Slash', 1000, 'Green', 'Supernovas', 'Navy', 'Drake Pirates', NULL, NULL),
('OP01-055', 'You Can be My Samurai!!', 'Event', 'C', 1, 0, 'NULL', 0, 'Green', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-056', 'Demon Face', 'Event', 'UC', 6, 0, 'NULL', 0, 'Green', 'Supernovas', 'Hawkins Pirates', 'NULL', NULL, NULL),
('OP01-057', 'Paradise Waterfall', 'Event', 'UC', 1, 0, 'NULL', 0, 'Green', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-058', 'Punk Gibson', 'Event', 'R', 2, 0, 'NULL', 0, 'Green', 'Supernovas', 'Kid Pirates', 'NULL', NULL, NULL),
('OP01-059', 'BE-BENG!!', 'Event', 'C', 3, 0, 'NULL', 0, 'Green', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-060', 'Donquixote Doflamingo', 'leader', 'L', 0, 5, 'Special', 0, 'Blue', 'The Seven Warlords of the Sea', 'Donquixote Pirates', 'NULL', NULL, NULL),
('OP01-061', 'Kaido', 'leader', 'L', 0, 5, 'Strike', 0, 'Purple/Blue', 'The Four Emperors', 'Animal Kingdom Pirates', 'NULL', NULL, NULL),
('OP01-062', 'Crocodile', 'leader', 'L', 0, 5, 'Special', 0, 'Purple/Blue', 'The Seven Warlords of the Sea', 'Baroque Works', 'NULL', NULL, NULL),
('OP01-063', 'Arlong', 'Character', 'UC', 4, 5, 'Slash', 1000, 'Blue', 'Fish-Man', 'Arlong Pirates', 'NULL', NULL, NULL),
('OP01-064', 'Alvida', 'Character', 'C', 2, 3, 'Strike', 2000, 'Blue', 'Buggy Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-065', 'Vergo', 'Character', 'C', 5, 7, 'Strike', 1000, 'Blue', 'Navy', 'Donquixote Pirates', 'Punk Hazard', NULL, NULL),
('OP01-066', 'Krieg', 'Character', 'C', 4, 6, 'Slash', 1000, 'Blue', 'Krieg Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-067', 'Crocodile', 'Character', 'SR', 7, 7, 'Special', 1000, 'Blue', 'The Seven Warlords of the Sea', 'Baroque Works', 'NULL', NULL, NULL),
('OP01-068', 'Gecko Moria', 'Character', 'R', 4, 5, 'Special', 1000, 'Blue', 'The Seven Warlords of the Sea', 'Thriller Bark Pirates', 'NULL', NULL, NULL),
('OP01-069', 'Caesar Clown', 'Character', 'R', 4, 5, 'Special', 1000, 'Blue', 'Scientist', 'Punk Hazard', 'NULL', NULL, NULL),
('OP01-070', 'Dracule Mihawk', 'Character', 'SR', 9, 9, 'Slash', 0, 'Blue', 'The Seven Warlords of the Sea', 'NULL', 'NULL', NULL, NULL),
('OP01-071', 'Jinbe', 'Character', 'R', 4, 2, 'Strike', 0, 'Blue', 'Fish-Man', 'Straw Hat Crew', 'NULL', NULL, NULL),
('OP01-072', 'Smiley', 'Character', 'C', 3, 1, 'Special', 1000, 'Blue', 'Biological Weapon', 'Punk Hazard', 'NULL', NULL, NULL),
('OP01-073', 'Donquixote Doflamingo', 'Character', 'R', 3, 4, 'Special', 1000, 'Blue', 'The Seven Warlords of the Sea', 'Donquixote Pirates', 'NULL', NULL, NULL),
('OP01-074', 'Bartholomew Kuma', 'Character', 'R', 4, 5, 'Strike', 1000, 'Blue', 'The Seven Warlords of the Sea', 'Revolutionary Army', 'NULL', NULL, NULL),
('OP01-075', 'Pacifista', 'Character', 'C', 4, 5, 'Special', 0, 'Blue', 'Biological Weapon', 'Navy', 'NULL', NULL, NULL),
('OP01-076', 'Bellamy', 'Character', 'C', 2, 4, 'Strike', 1000, 'Blue', 'Dressrosa', 'NULL', 'NULL', NULL, NULL),
('OP01-077', 'Perona', 'Character', 'UC', 1, 2, 'Special', 1000, 'Blue', 'Thriller Bark Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-078', 'Boa Hancock', 'Character', 'SR', 4, 5, 'Special', 1000, 'Blue', 'The Seven Warlords of the Sea', 'Kuja Pirates', 'NULL', NULL, NULL),
('OP01-079', 'Ms. All Sunday', 'Character', 'R', 3, 1, 'Strike', 1000, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-080', 'Miss Doublefinger(Zala)', 'Character', 'C', 3, 4, 'Slash', 1000, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-081', 'Mocha', 'Character', 'C', 3, 5, 'Strike', 1000, 'Blue', 'Punk Hazard', 'NULL', 'NULL', NULL, NULL),
('OP01-082', 'Monet', 'Character', 'C', 2, 3, 'Special', 1000, 'Blue', 'Donquixote Pirates', 'Punk Hazard', 'NULL', NULL, NULL),
('OP01-083', 'Mr.1 (Daz.Bonez)', 'Character', 'UC', 2, 3, 'Slash', 1000, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-084', 'Mr.2 Bon.Kurei(Bentham)', 'Character', 'UC', 3, 4, 'Strike', 2000, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-085', 'Mr.3(Galdino) ', 'Character', 'UC', 2, 3, 'NULL', 1000, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-086', 'Overheat', 'Event', 'R', 2, 0, 'NULL', 0, 'Blue', 'The Seven Warlords of the Sea', 'Donquixote Pirates', 'NULL', NULL, NULL),
('OP01-087', 'Officer Agents', 'Event', 'C', 2, 0, 'NULL', 0, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-088', 'Desert Spada', 'Event', 'UC', 1, 0, 'NULL', 0, 'Blue', 'The Seven Warlords of the Sea', 'Baroque Works', 'NULL', NULL, NULL),
('OP01-089', 'Crescent Cutlass', 'Event', 'C', 3, 0, 'NULL', 0, 'Blue', 'The Seven Warlords of the Sea', 'Baroque Works', 'NULL', NULL, NULL),
('OP01-090', 'Baroque Works', 'Event', 'UC', 1, 0, 'NULL', 0, 'Blue', 'Baroque Works', 'NULL', 'NULL', NULL, NULL),
('OP01-091', 'King', 'leader', 'L', 0, 5, 'Special', 0, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-092', 'Urashima', 'Character', 'C', 7, 9, 'Strike', 1000, 'Purple', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-093', 'Ulti', 'Character', 'R', 2, 3, 'Strike', 0, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-094', 'Kaido', 'Character', 'SR', 10, 12, 'Strike', 0, 'Purple', 'The Four Emperors', 'Animal Kingdom Pirates', 'NULL', NULL, NULL),
('OP01-095', 'Kyoshirou', 'Character', 'UC', 5, 6, 'Slash', 1000, 'Purple', 'Land of Wano', 'NULL', 'NULL', NULL, NULL),
('OP01-096', 'King', 'Character', 'SR', 7, 7, 'Special', 0, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-097', 'Queen', 'Character', 'R', 6, 5, 'Strike', 1000, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-098', 'Kurozimi Orochi', 'Character', 'UC', 1, 2, 'Wisdom', 2000, 'Purple', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-099', 'Kurozumi Semimaru', 'Character', 'C', 2, 3, 'Special', 1000, 'Purple', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-100', 'Kurozumi Higurashi', 'Character', 'C', 2, 3, 'Special', 1000, 'Purple', 'Land of Wano', 'Kouzuki Clan', 'NULL', NULL, NULL),
('OP01-101', 'Sasaki', 'Character', 'UC', 3, 4, 'Slash', 2000, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-102', 'Jack', 'Character', 'R', 3, 4, 'Strike', 1000, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-103', 'Scratchmen Apoo', 'Character', 'C', 4, 6, 'Ranged', 1000, 'Purple', 'Animal Kingdom Pirates', 'On-Air Pirates', 'NULL', NULL, NULL),
('OP01-104', 'Speed', 'Character', 'C', 2, 3, 'Strike', 1000, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-105', 'Bao Huang', 'Character', 'C', 2, 3, 'Wisdom', 1000, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-106', 'Basil Hawkins', 'Character', 'UC', 4, 2, 'Slash', 1000, 'Purple', 'Animal Kingdom Pirates', 'Hawkins Pirates', 'NULL', NULL, NULL),
('OP01-107', 'Babanuki', 'Character', 'C', 5, 7, 'Ranged', 1000, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-108', 'Hitokiri Kamazo', 'Character', 'UC', 4, 5, 'Slash', 1000, 'Purple', 'Supernovas', 'Kid Pirates', 'SMILE', NULL, NULL),
('OP01-109', 'Who\'s.Who', 'Character', 'UC', 2, 3, 'Slash', 1000, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-110', 'Fukurokuju', 'Character', 'C', 6, 8, 'Special', 1000, 'Purple', 'Land of Wano', 'Animal Kingdom Pirates', 'NULL', NULL, NULL),
('OP01-111', 'Black Maria', 'Character', 'R', 4, 5, 'Special', 1000, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-112', 'Page One', 'Character', 'R', 4, 5, 'Strike', 1000, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-113', 'Holedem', 'Character', 'C', 3, 4, 'Special', 1000, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-114', 'X.Drake', 'Character', 'R', 5, 5, 'Slash', 1000, 'Purple', 'Navy', 'Drake Pirates', 'Animal Kingdom Pirates', NULL, NULL),
('OP01-115', 'Elephant\'s Marchoo', 'Event', 'C', 4, 0, 'NULL', 0, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-116', 'Artificial Devil Fruit SMILE', 'Event', 'UC', 2, 0, 'NULL', 0, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-117', 'Sheep\'s Horn', 'Event', 'C', 2, 0, 'NULL', 0, 'Purple', 'Animal Kingdom Pirates', 'SMILE', 'NULL', NULL, NULL),
('OP01-118', 'Ulti-Mortar', 'Event', 'UC', 1, 0, 'NULL', 0, 'Purple', 'Animal Kingdom Pirates', 'NULL', 'NULL', NULL, NULL),
('OP01-119', 'Thunder Bagua', 'Event', 'R', 2, 0, 'NULL', 0, 'Purple', 'The Four Emperors', 'Animal Kingdom Pirates', 'NULL', NULL, NULL),
('OP01-120', 'Shanks', 'Character', 'SCR', 9, 10, 'Slash', 0, 'Red', 'The Four Emperors', 'Red-Haired Pirates', 'NULL', NULL, NULL),
('OP01-121', 'Yamato', 'Character', 'SCR', 5, 5, 'Strike', 1000, 'Green', 'Land of Wano', 'NULL', 'NULL', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deck`
--

CREATE TABLE `deck` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `deck`
--

INSERT INTO `deck` (`id`, `name`, `user_id`) VALUES
(1, 'Default', 1),
(2, 'Crocodile', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deckcard`
--

CREATE TABLE `deckcard` (
  `id` int(11) NOT NULL,
  `DeckId` int(11) DEFAULT NULL,
  `CardId` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `deckcard`
--

INSERT INTO `deckcard` (`id`, `DeckId`, `CardId`) VALUES
(1, 1, 'OP01-001'),
(2, 1, 'OP01-004'),
(3, 1, 'OP01-004'),
(4, 1, 'OP01-004'),
(5, 1, 'OP01-004'),
(6, 1, 'OP01-005'),
(7, 1, 'OP01-005'),
(8, 1, 'OP01-005'),
(9, 1, 'OP01-005'),
(10, 1, 'OP01-006'),
(11, 1, 'OP01-006'),
(12, 1, 'OP01-006'),
(13, 1, 'OP01-006'),
(14, 1, 'OP01-007'),
(15, 1, 'OP01-007'),
(16, 1, 'OP01-007'),
(17, 1, 'OP01-007'),
(18, 1, 'OP01-008'),
(19, 1, 'OP01-008'),
(20, 1, 'OP01-008'),
(21, 1, 'OP01-008'),
(22, 1, 'OP01-009'),
(23, 1, 'OP01-009'),
(24, 1, 'OP01-009'),
(25, 1, 'OP01-009'),
(26, 1, 'OP01-010'),
(27, 1, 'OP01-010'),
(28, 1, 'OP01-010'),
(29, 1, 'OP01-010'),
(30, 1, 'OP01-011'),
(31, 1, 'OP01-011'),
(32, 1, 'OP01-011'),
(33, 1, 'OP01-011'),
(34, 1, 'OP01-012'),
(35, 1, 'OP01-012'),
(36, 1, 'OP01-012'),
(37, 1, 'OP01-012'),
(38, 1, 'OP01-013'),
(39, 1, 'OP01-013'),
(40, 1, 'OP01-013'),
(41, 1, 'OP01-013'),
(42, 1, 'OP01-014'),
(43, 1, 'OP01-014'),
(44, 1, 'OP01-014'),
(45, 1, 'OP01-014'),
(46, 1, 'OP01-015'),
(47, 1, 'OP01-015'),
(48, 1, 'OP01-015'),
(49, 1, 'OP01-015'),
(50, 1, 'OP01-016'),
(51, 1, 'OP01-016'),
(52, 1, 'OP01-016'),
(53, 1, 'OP01-016'),
(54, 1, 'OP01-017'),
(55, 1, 'OP01-017'),
(56, 1, 'OP01-017'),
(57, 1, 'OP01-017'),
(58, 1, 'OP01-018'),
(59, 1, 'OP01-018'),
(60, 1, 'OP01-018'),
(61, 1, 'OP01-018'),
(62, 1, 'OP01-019'),
(63, 1, 'OP01-019'),
(64, 1, 'OP01-019'),
(65, 1, 'OP01-019'),
(66, 2, 'OP01-060'),
(67, 2, 'OP01-063'),
(68, 2, 'OP01-064'),
(69, 2, 'OP01-063'),
(70, 2, 'OP01-063'),
(71, 2, 'OP01-063'),
(72, 2, 'OP01-064'),
(73, 2, 'OP01-064'),
(74, 2, 'OP01-064'),
(75, 2, 'OP01-065'),
(76, 2, 'OP01-065'),
(77, 2, 'OP01-065'),
(78, 2, 'OP01-065'),
(79, 2, 'OP01-066'),
(80, 2, 'OP01-066'),
(81, 2, 'OP01-066'),
(82, 2, 'OP01-066'),
(83, 2, 'OP01-067'),
(84, 2, 'OP01-067'),
(85, 2, 'OP01-067'),
(86, 2, 'OP01-067'),
(87, 2, 'OP01-068'),
(88, 2, 'OP01-068'),
(89, 2, 'OP01-068'),
(90, 2, 'OP01-068'),
(91, 2, 'OP01-069'),
(92, 2, 'OP01-069'),
(93, 2, 'OP01-069'),
(94, 2, 'OP01-069'),
(95, 2, 'OP01-070'),
(96, 2, 'OP01-070'),
(97, 2, 'OP01-070'),
(98, 2, 'OP01-070'),
(99, 2, 'OP01-071'),
(100, 2, 'OP01-071'),
(101, 2, 'OP01-071'),
(102, 2, 'OP01-071'),
(103, 2, 'OP01-072'),
(104, 2, 'OP01-072'),
(105, 2, 'OP01-072'),
(106, 2, 'OP01-072'),
(107, 2, 'OP01-073'),
(108, 2, 'OP01-073'),
(109, 2, 'OP01-073'),
(110, 2, 'OP01-073'),
(111, 2, 'OP01-074'),
(112, 2, 'OP01-074'),
(113, 2, 'OP01-074'),
(114, 2, 'OP01-074'),
(115, 2, 'OP01-075'),
(116, 2, 'OP01-075'),
(117, 2, 'OP01-075'),
(118, 2, 'OP01-075'),
(119, 2, 'OP01-076'),
(120, 2, 'OP01-076'),
(121, 2, 'OP01-076'),
(122, 2, 'OP01-076'),
(123, 2, 'OP01-077'),
(124, 2, 'OP01-077'),
(125, 2, 'OP01-077');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `effect`
--

CREATE TABLE `effect` (
  `id` int(11) NOT NULL,
  `effect_description` varchar(255) DEFAULT NULL,
  `doncost` int(11) DEFAULT NULL,
  `deaddon` int(11) DEFAULT NULL,
  `effect` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `friendship`
--

CREATE TABLE `friendship` (
  `user_id1` int(11) NOT NULL,
  `user_id2` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `game`
--

CREATE TABLE `game` (
  `id` int(11) NOT NULL,
  `result` varchar(255) NOT NULL,
  `moveReg` text DEFAULT NULL,
  `date` datetime NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `favorite` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `type` varchar(244) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `type`) VALUES
(1, 'admin', 'admin', 'admin', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `card`
--
ALTER TABLE `card`
  ADD PRIMARY KEY (`id`),
  ADD KEY `effect_1` (`effect_1`),
  ADD KEY `effect_2` (`effect_2`);

--
-- Indices de la tabla `deck`
--
ALTER TABLE `deck`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `deckcard`
--
ALTER TABLE `deckcard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deck_id` (`DeckId`),
  ADD KEY `card_id` (`CardId`);

--
-- Indices de la tabla `effect`
--
ALTER TABLE `effect`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `friendship`
--
ALTER TABLE `friendship`
  ADD PRIMARY KEY (`user_id1`,`user_id2`),
  ADD KEY `user_id2` (`user_id2`);

--
-- Indices de la tabla `game`
--
ALTER TABLE `game`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `deck`
--
ALTER TABLE `deck`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `deckcard`
--
ALTER TABLE `deckcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=126;

--
-- AUTO_INCREMENT de la tabla `effect`
--
ALTER TABLE `effect`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `game`
--
ALTER TABLE `game`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `card`
--
ALTER TABLE `card`
  ADD CONSTRAINT `card_ibfk_1` FOREIGN KEY (`effect_1`) REFERENCES `effect` (`id`),
  ADD CONSTRAINT `card_ibfk_2` FOREIGN KEY (`effect_2`) REFERENCES `effect` (`id`);

--
-- Filtros para la tabla `deck`
--
ALTER TABLE `deck`
  ADD CONSTRAINT `deck_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `deckcard`
--
ALTER TABLE `deckcard`
  ADD CONSTRAINT `deckcard_ibfk_1` FOREIGN KEY (`DeckId`) REFERENCES `deck` (`id`),
  ADD CONSTRAINT `deckcard_ibfk_2` FOREIGN KEY (`CardId`) REFERENCES `card` (`id`);

--
-- Filtros para la tabla `friendship`
--
ALTER TABLE `friendship`
  ADD CONSTRAINT `friendship_ibfk_1` FOREIGN KEY (`user_id1`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `friendship_ibfk_2` FOREIGN KEY (`user_id2`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `game`
--
ALTER TABLE `game`
  ADD CONSTRAINT `game_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
