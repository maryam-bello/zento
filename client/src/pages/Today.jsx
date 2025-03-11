import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const Today = () => {

  const {tasks} = useContext(TaskContext);

  const todayTasks = tasks;


  return (
    <div>
      <h1>Today</h1>
      <ul>
        {todayTasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
        </ul>
    </div>
  );
}

export default Today;
