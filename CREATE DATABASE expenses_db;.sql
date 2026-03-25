CREATE DATABASE expenses_db;

USE expenses_db;

CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10,2),
  category VARCHAR(50),
  date DATE,
  description TEXT
);