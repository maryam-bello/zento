const mysql = require("../config/database.js");
const bcrypt = require("bcryptjs");

const getUserByEmail = async function (email) {
  try {
    const [rows] = await mysql.execute("SELECT * FROM users WHERE email = ?", [email]);
  return rows[0];
  } catch (error) {
    throw new Error('Error fetching user: ' + error.message);
  }
};

const createUser = async function (username, email, password) {
  console.log("Creating user with:", username, email);
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("Hashed password:", hashedPassword);

  try {
    const [result] = await mysql.execute(
    `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`,
    [username, email, hashedPassword]
  );
    console.log("Insert result:", result);
    return result;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Error creating user: ' + error.message);
  }
  
};


module.exports = { getUserByEmail, createUser };
