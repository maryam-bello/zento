import React, { useContext } from 'react';
import TaskContext from '../context/TaskContext';

const Upcoming = () => {

  const {tasks} = useContext(TaskContext);

  return (
    <div>
      <ul>
        {tasks.map(task => {
          return <li key={task.id}>{task.title} {task.due_date}</li>
          
        })}
      </ul>
    </div>
  );
}

export default Upcoming;
