import React, { useContext } from 'react';
import './TaskList.css';
import TaskContext from '../../context/TaskContext'

const TaskList = ({tasks}) => {

  const { setTasks} = useContext(TaskContext);
  
  const toggleComplete = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, status: task.status === 'completed' ? 'pending' : 'completed' } : task
    ));
  };
  
  console.log('task list', tasks)

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${task.status === 'completed' ? 'completed' : ''}`}
        >
          <input
            type="checkbox"
            checked={task.status === 'completed'}
            onChange={() => toggleComplete(task.id)}
          />
          <label>{task.title}</label>
          <div className="due-date">{task.dueDate}</div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
