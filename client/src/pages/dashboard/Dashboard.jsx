import React, { useContext, useState } from 'react';
import TaskList from '../../components/taskList/TaskList';
import TaskModal from '../../components/taskModal/TaskModal';
import './Dashboard.css';
import TaskContext from '../../context/TaskContext';
import axios from 'axios';

const Dashboard = () => {
  const {tasks, setTasks, token } = useContext(TaskContext);
  const [isModalOpen, setModalOpen] = useState(false);

  const addTask = async (title, dueDate) => {
    const newTask = {
      // id: tasks.length + 1,
      title,
      dueDate,
    };
    
    try {
      const response = await axios.post('http://localhost:8080/tasks/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: newTask
      })
      console.log(response.data);
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error(error);
    }
  };

  console.log('Dshboard', tasks)

  return (
    <div className="app-container">
      <header>
      
        <h1>Task Manager</h1>
        <button className="add-task-btn" onClick={() => setModalOpen(true)}>
          + Add Task
        </button>
      </header>

      <TaskList tasks={tasks} />
      
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onAddTask={addTask}
      />
    </div>
  );
};

export default Dashboard;
