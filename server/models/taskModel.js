const mysql = require('../config/database');

const createTask_DB = async function (title, description, category, priority, status, due_date, userId) {
  try {
    const taskData = [
      title,
      description || undefined,
      category || undefined,
      priority || undefined,
      status || undefined,
      due_date || undefined,
      userId
    ]

    const placeholders = taskData.map(field => field === undefined ? "NULL" : "?").join(', ');

    const query = `INSERT INTO tasks (title, description, category, priority, status, due_date, user_id) VALUES (${placeholders})`;

    const [rows, fields] = await mysql.execute(query, taskData.filter(field => field !== undefined));
    return rows;
  } catch (error) {
    throw new Error('Error creating task: ' + error.message);
  }
}

const getTasks_DB = async function (userId) {
  const [rows] = await mysql.execute('SELECT * FROM tasks WHERE user_id =?', [userId]);
  return rows;
};

const updateTask_DB = async function (id, title, description, category, priority, status, due_date) {
  const [result] = await mysql.execute('UPDATE tasks SET title = ?, description = ?, category = ?, priority = ?, status = ?, due_date = ? WHERE id = ?', [title, description, category, priority, status, due_date, id]);
  return result;
};

const deleteTask_DB = async function (id) {
  const result = await mysql.execute('DELETE FROM tasks WHERE id = ?', [id]);
  return result;
}

module.exports = {createTask_DB, getTasks_DB, updateTask_DB, deleteTask_DB}