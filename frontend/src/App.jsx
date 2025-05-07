import Header from './components/Header';
import ListCard from './components/ListCard';

import { useState } from 'react';

function App() {
  const [toDoLists, setToDoLists] = useState([]);

  const handleCreateNewList = (e, newListName) => {
    e.preventDefault();
    setToDoLists((prevLists) => [
      ...prevLists,
      {
        listName: newListName,
        id: new Date().toISOString() + newListName,
        tasks: [],
      },
    ]);
  };
  const handleDeleteList = (listID) => {
    if (window.confirm('Are you sure you want to delete this list?')) {
      setToDoLists(toDoLists.filter((list) => list.id !== listID));
    } else return;
  };

  const handleAddNewTask = (taskName, listID, taskID) => {
    if (taskName.trim() === '') return;
    setToDoLists((prevLists) =>
      prevLists.map((searchList) =>
        searchList.id === listID
          ? {
              ...searchList,
              tasks: [...searchList.tasks, { taskName, taskID }],
            }
          : searchList
      )
    );
  };
  const handleDeleteTask = (listID, taskID) => {
    setToDoLists((prevLists) =>
      prevLists.map((searchList) =>
        searchList.id === listID
          ? {
              ...searchList,
              tasks: searchList.tasks.filter((task) => task.taskID !== taskID),
            }
          : searchList
      )
    );
  };

  return (
    <div className="App">
      <main className="mainContent">
        <Header addNewList={handleCreateNewList} />
        <section className="listCards">
          {toDoLists.map((toDoList) => (
            <ListCard
              key={toDoList.id}
              toDoList={toDoList}
              deleteList={handleDeleteList}
              addNewTask={handleAddNewTask}
              deleteTask={handleDeleteTask}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;
