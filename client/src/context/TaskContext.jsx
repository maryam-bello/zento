import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create a context for tasks
const TaskContext = createContext();

// Create a provider component for tasks
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('authToken');

  // Fetch tasks
  const fetchTasks = async () => {
     // Get the token from localStorage
    console.log('Authorization Header:', `Bearer ${token}`);
    if (!token) return;

    try {
      const response = await axios.get('http://localhost:8080/tasks/', {
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      console.log(response.data.tasks);
      setTasks(response.data.tasks);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch tasks.');
      setLoading(false);
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, loading, error, fetchTasks, token }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
