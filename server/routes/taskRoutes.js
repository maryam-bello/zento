const {addTask, getTasks, editTask, deleteTask} = require('../controllers/taskController');
const express = require('express');
const {authenticateJWT} = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticateJWT, addTask);

router.get('/', authenticateJWT, getTasks);

router.put('/:id', authenticateJWT, editTask);

router.delete('/:id', authenticateJWT, deleteTask);

module.exports = router;