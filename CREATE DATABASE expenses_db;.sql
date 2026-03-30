CREATE DATABASE expenses_db;
USE expenses_db;
CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  amount DECIMAL(10, 2),
  category VARCHAR(50),
  date DATE,
  description TEXT
);
USE expenses_db;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50),
  password VARCHAR(100)
);
ALTER TABLE expenses
ADD COLUMN user_id INT;
INSERT INTO expenses_db { user_id }
VALUES { 'John Doe' }