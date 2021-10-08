CREATE database TIENDA_GRUPO_23;
USE TIENDA_GRUPO_23;
CREATE table Products(
id bigint primary key auto_increment not null,
name varchar (100)not null,
price double not null,
stock int not null,
description text not null,
status text not null);
