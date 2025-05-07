import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import Task from './Task';
import { useState, useRef } from 'react';

const ListCard = ({ toDoList, deleteList, addNewTask, deleteTask }) => {
  const [editListTitle, setEditListTitle] = useState(false);
  const [title, setTitle] = useState(toDoList.listName);
  const taskName = useRef();
  const inputEl = useRef();

  const addTask = (e) => {
    const taskID = new Date().toISOString() + taskName.current.value;

    e.preventDefault();
    addNewTask(taskName.current.value, toDoList.id, taskID);
    taskName.current.value = '';
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    toDoList.listName = title;
  };

  const handleTitleSubmit = (e) => {
    e.preventDefault();
    setEditListTitle(false);
  };

  const handleTitleClick = (e) => {
    setTimeout(() => inputEl.current?.focus(), 0);
    e.target.tagName === 'INPUT'
      ? setEditListTitle(true)
      : setEditListTitle((prevState) => !prevState);
  };

  return (
    <div className="listCard">
      <div className="titleElements">
        <form
          onSubmit={handleTitleSubmit}
          onClick={handleTitleClick}
          className="titleForm"
        >
          {editListTitle ? (
            <input
              className="titleInputChange"
              value={title}
              onChange={handleTitleChange}
              // onBlur={() => setEditListTitle(false)}
              ref={inputEl}
            />
          ) : (
            <span className="listTitle">{title}</span>
          )}
        </form>
        <button
          onClick={handleTitleClick}
          type="button"
          className="edisListBtn"
        >
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
        <button className="deleteList" onClick={() => deleteList(toDoList.id)}>
          <FontAwesomeIcon className="deleteListIcon" icon={faTrash} />
        </button>
      </div>
      <form onSubmit={(e) => addTask(e)} id="addTaskForm">
        <input
          className="addTaskInput"
          placeholder="+ add new task"
          ref={taskName}
        />
      </form>
      <ul className="listTasks">
        {toDoList.tasks.map((task) => (
          <Task
            key={task.taskID}
            task={task}
            deleteTask={() => deleteTask(toDoList.id, task.taskID)}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListCard;
