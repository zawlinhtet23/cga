-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2024 at 08:02 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `registration`
--

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `gender` text NOT NULL,
  `name` text NOT NULL,
  `number_selector` int(11) NOT NULL,
  `township_code_selector` text NOT NULL,
  `nrc_citizen_letter` text NOT NULL,
  `nrc_number` int(11) NOT NULL,
  `email` text NOT NULL,
  `pa_number` int(11) NOT NULL,
  `transaction_id` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`id`, `gender`, `name`, `number_selector`, `township_code_selector`, `nrc_citizen_letter`, `nrc_number`, `email`, `pa_number`, `transaction_id`) VALUES
(1, 'U', 'SAITAMA', 123344, 'alice@gmail.com', '1', 0, '(N)', 122435343, '2147483647'),
(2, 'U', 'SAITAMA', 2, 'BaLaKha', '(N)', 123345, 'alice@gmail.com', 223232232, '123232323'),
(3, 'U', 'Bala', 12, 'AhLaNa', '(N)', 163601, 'bala@gmail.com', 1234, '12334'),
(4, 'U', 'SAITAMA', 3, 'RaRaTha', '(N)', 1111111, 'alice@gmail.com', 2147483647, '2147483647'),
(5, 'U', 'Name', 1, 'HsaBaTa', '(N)', 111111, 'alice@gmail.com', 111111, '222222222'),
(6, 'U', 'Player', 2, 'BaLaKha', '(N)', 1111112, 'alice@gmail.com', 2222222, '22222222'),
(7, 'Daw', 'BmaxC', 2, 'BaLaKha', '(N)', 12234343, 'alice@gmail.com', 2147483647, '11212121'),
(8, 'U', 'Player', 1, 'HsaBaTa', '(N)', 111111, 'alice@gmail.com', 1111111, '1111111111'),
(9, 'U', 'Win Bala Min', 12, 'ThaGaKa', '(N)', 163601, 'winbalamin@gmail.com', 1579, '122044'),
(10, 'U', 'SAITAMA', 2, 'BaLaKha', '(N)', 222222, 'zawlinhtet621@gmail.com', 1111112222, '333333333'),
(11, 'U', 'SAITAMA', 4, 'HsaMaNa', '(N)', 222222, 'zawlinhtet621@gmail.com', 1111111, 'sssdsdwdwdw'),
(12, 'U', 'Win Bala Min', 12, 'ThaGaKa', '(N)', 163601, 'wnbalamin@gmail.com', 1465, 'Kpay_09403723911'),
(13, 'U', 'SAITAMA', 1, 'HsaBaTa', '(F)', 111111, 'alice@gmail.com', 2147483647, 'sssdsdwdwdw'),
(14, 'U', 'SAITAMA', 1, 'HsaBaTa', '(N)', 111111, 'zawlinhtet621@gmail.com', 123456, '654321'),
(16, 'U', 'SAITAMA', 1, 'HsaBaTa', '(N)', 1111111, 'alice@gmail.com', 2147483647, '111111111'),
(17, 'U', 'Player', 2, 'BaLaKha', '(N)', 12345, 'alice@gmail.com', 2147483647, '766757676'),
(18, 'U', 'SAITAMA', 1, 'HsaBaTa', '(N)', 1111111, 'alice@gmail.com', 1111111, '111111111111'),
(19, 'U', 'Player', 2, 'BaLaKha', '(N)', 222222, 'alice@gmail.com', 22222222, '2222222'),
(20, 'U', 'SAITAMA', 3, 'RaRaTha', '(N)', 333333, 'alice@gmail.com', 333333, '3333333'),
(21, 'U', 'SAITAMA', 4, 'HsaMaNa', '(N)', 444444, 'alice@gmail.com', 44444444, '44444444'),
(22, 'U', '', 4, 'HsaMaNa', '(N)', 11111, '1111@gmail.com', 2147483647, '098765678'),
(23, 'U', 'SAITAMA', 12, 'ThaGaKa', '(N)', 163601, 'winbalamin@gmail.com', 123445, 'sssdsdwdwdw'),
(24, 'U', 'SAITAMA', 12, 'AhLaNa', '(N)', 123456, 'winbalamin@gmail.com', 123345, '5k42'),
(25, 'U', 'Zaw Lin Htet', 12, 'ThaKaTa', '(N)', 220004, 'zawlinhtet621@gmail.com', 1234567890, '09785798376'),
(26, 'U', 'Player', 1, 'HsaBaTa', '(N)', 1111111, 'alice@gmail.com', 2147483647, '111111111111');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
