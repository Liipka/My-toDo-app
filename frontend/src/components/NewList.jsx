import React, { useState, useRef } from 'react';

const NewList = ({ returnAddList, addNewList, ref }) => {
  // const listName = useRef();
  const [error, setError] = useState(false);

  const saveNewList = (e) => {
    e.preventDefault();

    if (ref.current.value.trim() === '') {
      setError(true);
      return;
    }

    addNewList(e, ref.current.value.trim());
    setError(false);
    ref.current.value = '';
    returnAddList(e);
  };

  return (
    <form onSubmit={saveNewList} id="newListForm">
      <label className="addListEl">
        New list name:
        <input
          type="text"
          className={`addListInput ${error ? 'error' : ''}`}
          ref={ref}
        />
      </label>
      <div className="addListBtns">
        <button type="submit" className="headerAddBtn addList">
          Submit
        </button>
        <button
          onClick={returnAddList}
          type="button"
          className="headerAddBtn returnAddList"
        >
          Return
        </button>
      </div>
    </form>
  );
};

export default NewList;
