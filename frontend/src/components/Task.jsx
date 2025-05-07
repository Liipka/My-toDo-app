import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Task = ({ task, deleteTask }) => {
  return (
    <li className="listElement" id={new Date()}>
      <label className="task">
        <input type="checkbox" className="hiddenCheckbox" />
        <div className="styledCheckbox"></div>
        <span className="taskName">{task.taskName}</span>
      </label>
      <button onClick={deleteTask} className="deleteTask">
        <FontAwesomeIcon className="deleteTaskIcon" icon={faTrash} />
      </button>
    </li>
  );
};

export default Task;
