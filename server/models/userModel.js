const mysql = require("../config/database.js");
const bcrypt = require("bcryptjs");

const getUserByEmail = async function (email) {
  const [rows] = await mysql.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
};

const createUser = async function (username, email, password) {
  const hashedPassword = bcrypt.hash(password, 10);

  const [result] = await mysql.execute(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [username, email, hashedPassword]
  );
  return result;
};


module.exports = { getUserByEmail, createUser };
