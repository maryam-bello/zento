const {createTask_DB, getTasks_DB, updateTask_DB, deleteTask_DB,} = require('../models/taskModel');


const addTask = async function (req, res) {
  const {title, description, category, priority, status, due_date} = req.body;
  const userId = req.user.id;

  try {
    if (!title) {
      return res.status(400).json({message: 'Task needs a title'});
    }
    const result = await createTask_DB(title, description, category, priority, status, due_date, userId);
    res.status(200).json({message: 'Task created successfully', task: result.insertId});
  } catch (error) {
    res.status(500).json({message: 'Error creating task', error: error.message});
  }
}
const getTasks = async function (req, res) {
  try {
    const tasks = await getTasks_DB();
    res.status(200).json({message: 'Tasks collected successfully', tasks })
  } catch (error) {
    res.status(500).json({message : 'Error fetching tasks', error})
  }
 
}

const editTask = async function (req, res) {
  const id = req.params.id;
  const {title, description, category, priority, status, due_date} = req.body;

  try {
    const result = await updateTask_DB(title, description, category, priority, status, due_date);
    if (result.affectedRows === 0) {
      return res.status(404).json({message: 'Task not found or not authorized to update'});
    }
    res.status(200).json({message: 'Task updated successfully'})
    return result;
  } catch (error) {
    res.status(500).json({message: 'Error updating task', error})
  }
}

const deleteTask = async function (req, res) {
  const id = req.params.id;

  try {
    const result = await deleteTask_DB(id);
    if (result.affectedRows === 0) {
      return res.status(404).json({message: 'Task not found'})
    }
    res.status(200).json({message: 'Task deleted successfully'});
  } catch (error) {
    res.status(500).json({message: 'Error deleting task', error})
  }
}

module.exports = {addTask, getTasks, editTask, deleteTask}