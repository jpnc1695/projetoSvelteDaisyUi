CREATE TABLE `empresas` (
	`id` varchar(36) NOT NULL,
	`nome` varchar(255) NOT NULL,
	`cnpj` varchar(14) NOT NULL,
	`email` varchar(255),
	`telefone` varchar(20),
	`endereco` text NOT NULL,
	`created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT `empresas_id` PRIMARY KEY(`id`),
	CONSTRAINT `empresas_cnpj_unique` UNIQUE(`cnpj`)
);
