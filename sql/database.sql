create database UsersManagement;

use UsersManagement;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
	dob VARCHAR(255)
);

DESCRIBE users;

