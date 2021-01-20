CREATE TABLE `random_data` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(256) COLLATE utf8mb4_bin NOT NULL DEFAULT '',
  `description` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  `meta_data` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
);
