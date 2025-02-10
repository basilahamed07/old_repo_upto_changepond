-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3333
-- Generation Time: Aug 29, 2024 at 11:36 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `django_template_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `app_folder_author`
--

CREATE TABLE `app_folder_author` (
  `id` bigint(20) NOT NULL,
  `first_name` varchar(100) NOT NULL,
  `last_name` varchar(100) NOT NULL,
  `email_id` varchar(254) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_folder_author`
--

INSERT INTO `app_folder_author` (`id`, `first_name`, `last_name`, `email_id`) VALUES
(1, 'Basil', 'Ahamed', 'basilahamed46@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `app_folder_command`
--

CREATE TABLE `app_folder_command` (
  `id` bigint(20) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(254) NOT NULL,
  `text` longtext NOT NULL,
  `post_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_folder_command`
--

INSERT INTO `app_folder_command` (`id`, `user_name`, `user_email`, `text`, `post_id`) VALUES
(1, 'BAsil ahamed', 'basilahamed46@gmail.com', 'super post', 1),
(2, 'noting', 'nothing@gmail.com', 'noting to say', 2),
(3, 'farvez', 'farvez@gmail.com', 'Super pic', 1),
(8, 'mishal', 'mishal@gmail.com', 'super pic bro', 3),
(9, 'chainsawman', 'chainsaw@gmail.com', 'super series', 6),
(10, 'chainsawman', 'chainsaw@gmail.com', 'super series', 6),
(11, 'pythonuser', 'python@gmail.com', 'here the saithma', 4),
(12, 'pythonuser', 'python@gmail.com', 'here the saithma', 4),
(13, 'pythonuser22', 'python@gmail.com', 'here the saithma', 5),
(14, 'pythonuser22', 'python@gmail.com', 'here the saithma', 5),
(15, 'saithama46', 'saithama@gmail.com', 'saithama strong', 4),
(16, 'saithama46', 'saithama@gmail.com', 'saithama strong', 4),
(17, 'demonslayer46', 'demonslayer@gmail.com', 'good series', 7),
(18, 'demonslayer46', 'demonslayer@gmail.com', 'good series', 7),
(19, 'mark', 'markfb@gmail.com', 'super pic dude', 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_folder_post`
--

CREATE TABLE `app_folder_post` (
  `id` bigint(20) NOT NULL,
  `title` varchar(50) NOT NULL,
  `image_name` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `time` time(6) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `content` varchar(100) NOT NULL,
  `author_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_folder_post`
--

INSERT INTO `app_folder_post` (`id`, `title`, `image_name`, `image`, `date`, `time`, `slug`, `content`, `author_id`) VALUES
(1, 'BASIL FORMAL', 'Basil', 'images/IMG_20230629_180822.jpg', '2024-08-28', '01:29:48.350750', 'basil-formal', 'Somthing Content', 1),
(2, 'second Post', 'basil Post', 'images/IMG_20230629_181033.jpg', '2024-08-28', '02:38:57.538854', 'second-post', 'here we have the second photo', 1),
(3, 'Thard Post', 'basil Post 3', 'images/IMG_20230629_181025.jpg', '2024-08-28', '02:39:21.061856', 'thard-post', 'here we have the second photo', 1),
(4, 'saithama', 'saithama onepunchman', 'images/saithama.jpg', '2024-08-29', '00:32:30.976403', 'saithama', 'onepunchman overpowerful', 1),
(5, 'daathnote', 'deathnote here', 'images/deathnote.jpg', '2024-08-29', '00:33:32.341242', 'daathnote', 'deathnote magic overpowerful', 1),
(6, 'chainsawman', 'chaindawman', 'images/chainsawman.jpg', '2024-08-29', '00:33:55.152912', 'chainsawman', 'chainsawman magic overpowerful', 1),
(7, 'demon slayer', 'demon slayer', 'images/demonslayer.jpg', '2024-08-29', '00:34:22.249699', 'demon-slayer', 'demaonslyer magic overpowerful', 1),
(8, 'mariko chan', 'mariko chan horror', 'images/marikochan.jpg', '2024-08-30', '02:43:43.782807', 'mariko-chan', 'mariko chan is an horror movie', 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_folder_post_tags`
--

CREATE TABLE `app_folder_post_tags` (
  `id` bigint(20) NOT NULL,
  `post_id` bigint(20) NOT NULL,
  `tagline_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_folder_post_tags`
--

INSERT INTO `app_folder_post_tags` (`id`, `post_id`, `tagline_id`) VALUES
(1, 1, 1),
(2, 2, 1),
(3, 3, 1),
(4, 4, 1),
(5, 5, 1),
(6, 6, 1),
(7, 7, 1),
(8, 8, 1);

-- --------------------------------------------------------

--
-- Table structure for table `app_folder_tagline`
--

CREATE TABLE `app_folder_tagline` (
  `id` bigint(20) NOT NULL,
  `caption` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `app_folder_tagline`
--

INSERT INTO `app_folder_tagline` (`id`, `caption`) VALUES
(1, 'Basil Creator');

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add author', 7, 'add_author'),
(26, 'Can change author', 7, 'change_author'),
(27, 'Can delete author', 7, 'delete_author'),
(28, 'Can view author', 7, 'view_author'),
(29, 'Can add tag line', 8, 'add_tagline'),
(30, 'Can change tag line', 8, 'change_tagline'),
(31, 'Can delete tag line', 8, 'delete_tagline'),
(32, 'Can view tag line', 8, 'view_tagline'),
(33, 'Can add post', 9, 'add_post'),
(34, 'Can change post', 9, 'change_post'),
(35, 'Can delete post', 9, 'delete_post'),
(36, 'Can view post', 9, 'view_post'),
(37, 'Can add command', 10, 'add_command'),
(38, 'Can change command', 10, 'change_command'),
(39, 'Can delete command', 10, 'delete_command'),
(40, 'Can view command', 10, 'view_command');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `auth_user`
--

INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$600000$cxSuDUNTctKqfH58IwwK1w$W5Y62x6zpeTQXRosYN94T8OLeMah1XcGanfCUAWwEY4=', '2024-08-27 19:56:32.572392', 1, 'basil', '', '', 'basil@gmail.com', 1, 1, '2024-08-27 19:42:49.787225');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_admin_log`
--

INSERT INTO `django_admin_log` (`id`, `action_time`, `object_id`, `object_repr`, `action_flag`, `change_message`, `content_type_id`, `user_id`) VALUES
(1, '2024-08-27 19:58:06.707445', '1', 'Basil', 1, '[{\"added\": {}}]', 7, 1),
(2, '2024-08-27 19:58:33.222216', '1', 'Basil Creator', 1, '[{\"added\": {}}]', 8, 1),
(3, '2024-08-28 18:35:31.783459', '1', 'BAsil ahamed', 1, '[{\"added\": {}}]', 10, 1),
(4, '2024-08-28 18:38:33.180407', '2', 'noting', 1, '[{\"added\": {}}]', 10, 1),
(5, '2024-08-28 18:46:49.634503', '3', 'farvez', 1, '[{\"added\": {}}]', 10, 1);

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(7, 'App_Folder', 'author'),
(10, 'App_Folder', 'command'),
(9, 'App_Folder', 'post'),
(8, 'App_Folder', 'tagline'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'App_Folder', '0001_initial', '2024-08-27 19:42:28.394460'),
(2, 'contenttypes', '0001_initial', '2024-08-27 19:42:28.411703'),
(3, 'auth', '0001_initial', '2024-08-27 19:42:28.735105'),
(4, 'admin', '0001_initial', '2024-08-27 19:42:28.817003'),
(5, 'admin', '0002_logentry_remove_auto_add', '2024-08-27 19:42:28.825533'),
(6, 'admin', '0003_logentry_add_action_flag_choices', '2024-08-27 19:42:28.834487'),
(7, 'contenttypes', '0002_remove_content_type_name', '2024-08-27 19:42:28.898677'),
(8, 'auth', '0002_alter_permission_name_max_length', '2024-08-27 19:42:28.939508'),
(9, 'auth', '0003_alter_user_email_max_length', '2024-08-27 19:42:28.952813'),
(10, 'auth', '0004_alter_user_username_opts', '2024-08-27 19:42:28.959880'),
(11, 'auth', '0005_alter_user_last_login_null', '2024-08-27 19:42:28.992103'),
(12, 'auth', '0006_require_contenttypes_0002', '2024-08-27 19:42:28.995093'),
(13, 'auth', '0007_alter_validators_add_error_messages', '2024-08-27 19:42:29.003107'),
(14, 'auth', '0008_alter_user_username_max_length', '2024-08-27 19:42:29.016114'),
(15, 'auth', '0009_alter_user_last_name_max_length', '2024-08-27 19:42:29.029435'),
(16, 'auth', '0010_alter_group_name_max_length', '2024-08-27 19:42:29.041521'),
(17, 'auth', '0011_update_proxy_permissions', '2024-08-27 19:42:29.049395'),
(18, 'auth', '0012_alter_user_first_name_max_length', '2024-08-27 19:42:29.060405'),
(19, 'sessions', '0001_initial', '2024-08-27 19:42:29.080456');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `django_session`
--

INSERT INTO `django_session` (`session_key`, `session_data`, `expire_date`) VALUES
('19izafnzi9zahu8eahvo4obc9ubgqw2t', '.eJxVjEsOwjAMBe-SNYocOw2EJXvOEMWxQwqolfpZIe4OlbqA7ZuZ9zIpr0tL66xT6sWcjTOH341zeeiwAbnn4TbaMg7L1LPdFLvT2V5H0edld_8OWp7bt0bfYeBKEYFJEOIRMnot4Cl2tWJAZD4pQfGkVIE0YJUuOlc5CpB5fwC9azcr:1sj2Iq:RRar8xsHDbCKoIfk5ctIuQW1sgeo3HhiFVKqCIuWRpw', '2024-09-10 19:56:32.574428');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `app_folder_author`
--
ALTER TABLE `app_folder_author`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `app_folder_command`
--
ALTER TABLE `app_folder_command`
  ADD PRIMARY KEY (`id`),
  ADD KEY `App_Folder_command_post_id_253a9bff_fk_App_Folder_post_id` (`post_id`);

--
-- Indexes for table `app_folder_post`
--
ALTER TABLE `app_folder_post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `App_Folder_post_author_id_b0c3fe57_fk_App_Folder_author_id` (`author_id`),
  ADD KEY `App_Folder_post_slug_8f054c27` (`slug`);

--
-- Indexes for table `app_folder_post_tags`
--
ALTER TABLE `app_folder_post_tags`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `App_Folder_post_tags_post_id_tagline_id_edde23b6_uniq` (`post_id`,`tagline_id`),
  ADD KEY `App_Folder_post_tags_tagline_id_82dd97ac_fk_App_Folde` (`tagline_id`);

--
-- Indexes for table `app_folder_tagline`
--
ALTER TABLE `app_folder_tagline`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `app_folder_author`
--
ALTER TABLE `app_folder_author`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `app_folder_command`
--
ALTER TABLE `app_folder_command`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `app_folder_post`
--
ALTER TABLE `app_folder_post`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `app_folder_post_tags`
--
ALTER TABLE `app_folder_post_tags`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `app_folder_tagline`
--
ALTER TABLE `app_folder_tagline`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `app_folder_command`
--
ALTER TABLE `app_folder_command`
  ADD CONSTRAINT `App_Folder_command_post_id_253a9bff_fk_App_Folder_post_id` FOREIGN KEY (`post_id`) REFERENCES `app_folder_post` (`id`);

--
-- Constraints for table `app_folder_post`
--
ALTER TABLE `app_folder_post`
  ADD CONSTRAINT `App_Folder_post_author_id_b0c3fe57_fk_App_Folder_author_id` FOREIGN KEY (`author_id`) REFERENCES `app_folder_author` (`id`);

--
-- Constraints for table `app_folder_post_tags`
--
ALTER TABLE `app_folder_post_tags`
  ADD CONSTRAINT `App_Folder_post_tags_post_id_68664fd9_fk_App_Folder_post_id` FOREIGN KEY (`post_id`) REFERENCES `app_folder_post` (`id`),
  ADD CONSTRAINT `App_Folder_post_tags_tagline_id_82dd97ac_fk_App_Folde` FOREIGN KEY (`tagline_id`) REFERENCES `app_folder_tagline` (`id`);

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
