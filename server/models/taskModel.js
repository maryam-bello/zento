const mysql = require('../config/database');

const createTask_DB = async function (title, description, category, priority, status, due_date, userId) {
  try {
    const [rows, fields] = await mysql.execute('INSERT INTO tasks (title, description, category, priority, status, due_date, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [title, description, category, priority, status, due_date, userId]);
    return rows;
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
}

const getTasks_DB = async function () {
  const [rows] = await mysql.execute('SELECT * FROM tasks');
  return rows;
};

const updateTask_DB = async function (id, title, description, category, priority, status, due_date) {
  const task = await mysql.execute('UPDATE tasks SET title = ?, description = ?, category = ?, priority = ?, status = ?, due_date = ? WHERE id = ?', [title, description, category, priority, status, due_date, id]);
  return result;
};

const deleteTask_DB = async function (id) {
  const result = await mysql.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return result;
}

module.exports = {createTask_DB, getTasks_DB, updateTask_DB, deleteTask_DB}