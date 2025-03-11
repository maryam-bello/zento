USE zento;

CREATE TABLE users (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE tasks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  category VARCHAR(255) DEFAULT 'To Do',
  priority ENUM('low', 'medium', 'high') DEFAULT 'medium',
  status ENUM('done', 'pending') DEFAULT 'pending',
  due_date DATE DEFAULT (CURRENT_TIMESTAMP),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE tasks (
  status ENUM('completed', 'pending') DEFAULT 'pending'
)