import NewList from './NewList';
import { useState, useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

const Header = ({ addNewList }) => {
  const [showAddList, setShowAddList] = useState(false);
  const listName = useRef();

  const toggleShowAddListInput = () => {
    setShowAddList((prevState) => !prevState);

    !showAddList && setTimeout(() => listName.current?.focus(), 0);
  };

  return (
    <header className="Header">
      <div className="headerLogo">
        <FontAwesomeIcon className="" icon={faClipboardList} />
      </div>
      <div className="headerContent">
        <h1 className="headerTitle">My To-Do List</h1>
        <div className="newList">
          {!showAddList && (
            <button
              onClick={toggleShowAddListInput}
              className="headerBtn addList"
            >
              Add new list
            </button>
          )}
          {showAddList && (
            <NewList
              ref={listName}
              addNewList={addNewList}
              returnAddList={toggleShowAddListInput}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
