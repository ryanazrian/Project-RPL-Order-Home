-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 29, 2017 at 04:48 
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Order_Home`
--

-- --------------------------------------------------------

--
-- Table structure for table `addres`
--

CREATE TABLE `addres` (
  `addres_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `addres_name` text NOT NULL,
  `addres_user` text NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `addres`
--

INSERT INTO `addres` (`addres_id`, `user_id`, `addres_name`, `addres_user`, `longitude`, `latitude`) VALUES
(24, 32, 'test', '2122', 12313, 1313),
(25, 32, 'home', 'user Pengadegan Pancoran KOTA ADM. JAKARTA SELATAN DKI Jakarta', -6.2526107, 106.80800750000003),
(27, 15, 'Home', 'RT:12/RW:9 Gunung Sahari Selatan Kemayoran KOTA ADM. JAKARTA PUSAT DKI Jakarta', -6.1579093, 106.8470611),
(28, 14, 'Shop', 'jakarta Barat', -2013321313, 21314124567);

-- --------------------------------------------------------

--
-- Table structure for table `lokasi`
--

CREATE TABLE `lokasi` (
  `id_lokasi` int(11) NOT NULL,
  `lokasi_nama` text NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `lokasi`
--

INSERT INTO `lokasi` (`id_lokasi`, `lokasi_nama`, `latitude`, `longitude`) VALUES
(1, '', -29199133, 991821212),
(2, 'test', -29199133, 991821212);

-- --------------------------------------------------------

--
-- Table structure for table `order_goods`
--

CREATE TABLE `order_goods` (
  `user_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `id_goods` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `total_price` int(11) NOT NULL,
  `order_quantity` int(11) NOT NULL,
  `total_cost_payment` int(11) NOT NULL,
  `total_kembalian` int(11) NOT NULL,
  `frecuency` int(11) NOT NULL,
  `order_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `order_goods`
--

INSERT INTO `order_goods` (`user_id`, `order_id`, `id_goods`, `shop_id`, `total_price`, `order_quantity`, `total_cost_payment`, `total_kembalian`, `frecuency`, `order_date`) VALUES
(5, 1, 1, 1, 20000, 1, 50000, 30000, 1, '2017-05-18 03:06:40'),
(5, 2, 2, 1, 80000, 3, 100000, 20000, 2, '2017-05-18 03:25:14');

-- --------------------------------------------------------

--
-- Table structure for table `Rating`
--

CREATE TABLE `Rating` (
  `stars` int(1) NOT NULL,
  `review` varchar(200) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Rating`
--

INSERT INTO `Rating` (`stars`, `review`, `shop_id`, `user_id`) VALUES
(5, 'nice', 1, 5),
(4, 'gg', 3, 13),
(4, 'nice shop', 4, 43),
(1, 'poor shop', 5, 42);

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE `shop` (
  `shop_id` int(11) NOT NULL,
  `shop_name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shop`
--

INSERT INTO `shop` (`shop_id`, `shop_name`, `user_id`) VALUES
(1, 'alibaba store', 14),
(3, 'Tokopadeia', 15),
(4, 'Blibla Shop', 15),
(5, 'ttoko test', 15);

-- --------------------------------------------------------

--
-- Table structure for table `stock`
--

CREATE TABLE `stock` (
  `brand` varchar(20) NOT NULL,
  `price` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `id_goods` int(11) NOT NULL,
  `shop_id` int(11) NOT NULL,
  `type` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `stock`
--

INSERT INTO `stock` (`brand`, `price`, `quantity`, `id_goods`, `shop_id`, `type`) VALUES
('AQUA', 16000, 10, 1, 1, 'galon'),
('REFIL', 5000, 20, 2, 1, 'galon'),
('LPG', 120000, 20, 3, 1, 'gas 12 kg'),
('LPG', 85000, 100, 4, 1, 'gas 3 kg'),
('AQUA', 17000, 45, 5, 3, 'galon'),
('ADES', 16000, 30, 6, 3, 'galon');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_status` varchar(20) NOT NULL,
  `name` varchar(30) NOT NULL,
  `phone_number` varchar(12) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `username`, `password`, `user_status`, `name`, `phone_number`, `email`) VALUES
(5, 'bob11', '1234', 'customer', '', '0', ''),
(13, 'dragon', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'apa aja', '98898822', 'email@o.com'),
(14, 'alibaba', '81dc9bdb52d04dc20036dbd8313ed055', 'seller', 'al baaba', '2147483647', 'wkkwkwk@wkwk.com'),
(15, 'tokopedia', '81dc9bdb52d04dc20036dbd8313ed055', 'seller', 'Tokopedia ajah', '2147483647', 'aksdkaksdkan@ahsh.com'),
(16, 'bambangtop', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'bambang yayar', '091213213123', 'bambang@hotmail.com'),
(19, 'rr11', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'rr', '213123123', 'asdasdasd'),
(20, 'blibli', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'blibli ajah', '091029928398', 'blibli@apaaja.com'),
(21, 'jhon41', '81dc9bdb52d04dc20036dbd8313ed055', 'seller', 'Jhon Wick', '232124421412', 'wick123@gmail.com'),
(23, 'prana', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'pranayadna aff', '77888212212', 'pran@yahoo.com'),
(24, 'customer', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'saya customer', '09982212331', 'custom@cust.com'),
(32, 'testrr8', '81dc9bdb52d04dc20036dbd8313ed055', 'seller', 'tester', '92398391', 'jad@ad.com'),
(39, 'tester', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'tester', '13', 'tester@gmail.com'),
(40, 'user1', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'user1', '422', 'user1'),
(41, 'test1', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'sada', '231', 'adwdad'),
(42, 'test12', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'test12', '213214412', 'adwd'),
(43, 'coba', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'Coba ini error', '1234', 'coba@gmail.com'),
(44, 'nugroho', '81dc9bdb52d04dc20036dbd8313ed055', 'customer', 'Nugroho', '0910930193', 'nuh@gmail.com'),
(45, 'user', '202cb962ac59075b964b07152d234b70', 'seller', 'user12', '12313', 'sadad');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addres`
--
ALTER TABLE `addres`
  ADD PRIMARY KEY (`addres_id`),
  ADD KEY `addres_user_id_FK` (`user_id`);

--
-- Indexes for table `lokasi`
--
ALTER TABLE `lokasi`
  ADD PRIMARY KEY (`id_lokasi`);

--
-- Indexes for table `order_goods`
--
ALTER TABLE `order_goods`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `order_goods_user_id_FK` (`user_id`),
  ADD KEY `order_goods_id_goods_FK` (`id_goods`),
  ADD KEY `order_goods_shop_id_FK` (`shop_id`);

--
-- Indexes for table `Rating`
--
ALTER TABLE `Rating`
  ADD KEY `rating_shop_id_FK` (`shop_id`),
  ADD KEY `rating_user_id_FK` (`user_id`);

--
-- Indexes for table `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`shop_id`),
  ADD KEY `shop_user_id_FK` (`user_id`);

--
-- Indexes for table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_goods`),
  ADD KEY `stock_shop_id_FK` (`shop_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addres`
--
ALTER TABLE `addres`
  MODIFY `addres_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
--
-- AUTO_INCREMENT for table `lokasi`
--
ALTER TABLE `lokasi`
  MODIFY `id_lokasi` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `order_goods`
--
ALTER TABLE `order_goods`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `shop`
--
ALTER TABLE `shop`
  MODIFY `shop_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `stock`
--
ALTER TABLE `stock`
  MODIFY `id_goods` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `addres`
--
ALTER TABLE `addres`
  ADD CONSTRAINT `addres_user_id_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_goods`
--
ALTER TABLE `order_goods`
  ADD CONSTRAINT `order_goods_id_goods_FK` FOREIGN KEY (`id_goods`) REFERENCES `stock` (`id_goods`) ON UPDATE CASCADE,
  ADD CONSTRAINT `order_goods_shop_id_FK` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `order_goods_user_id_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Rating`
--
ALTER TABLE `Rating`
  ADD CONSTRAINT `rating_shop_id_FK` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `rating_user_id_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON UPDATE CASCADE;

--
-- Constraints for table `shop`
--
ALTER TABLE `shop`
  ADD CONSTRAINT `shop_user_id_FK` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `stock_shop_id_FK` FOREIGN KEY (`shop_id`) REFERENCES `shop` (`shop_id`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
