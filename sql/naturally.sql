CREATE DATABASE naturally;

USE naturally;
CREATE TABLE usuario (
 id int UNSIGNED NOT NULL AUTO_INCREMENT UNIQUE,
 oauth_provider enum('','facebook','google','twitter') COLLATE utf8_unicode_ci UNIQUE NOT NULL,
 facebook_id varchar(100) COLLATE utf8_unicode_ci UNIQUE NOT NULL,
 nome_completo varchar(100) COLLATE utf8_unicode_ci NOT NULL,
 primeiro_nome varchar(50) COLLATE utf8_unicode_ci NOT NULL,
 ultimo_nome varchar(50) COLLATE utf8_unicode_ci NOT NULL,
 email varchar(100) COLLATE utf8_unicode_ci UNIQUE NOT NULL ,
 genero varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 localizacao varchar(10) COLLATE utf8_unicode_ci NOT NULL,
 foto_perfil varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 link_perfil varchar(255) COLLATE utf8_unicode_ci NOT NULL,
 criado datetime NOT NULL,
 modificado datetime NOT NULL,
 PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

ALTER TABLE usuario ADD nome varchar(100) COLLATE utf8_unicode_ci NOT NULL AFTER facebook_id;
ALTER DATABASE naturally  COLLATE = latin1_swedish_ci;
-- UPDATE usuario SET name = concat(first_name, " ", last_name);
-- DROP DATABASE naturally; trigger if(primeiro nome != ultimo nome) then update nome completo = concat(primeiro, " ",

select * from usuario