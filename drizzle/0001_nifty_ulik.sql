CREATE TABLE `users` (
	`id` varchar(36) NOT NULL,
	`username` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(20) NOT NULL,
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
