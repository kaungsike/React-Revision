import React from "react";
import { useState } from "react";

const List = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const [newJob,setNewJob] = useState(props.job)

  const handleCheckBox = () => {
    props.checkTask(props.id);
  };

  const handleDeleteBtn = () => {
    if (confirm("Are you sure to delete?")) {
      props.deleteTask(props.id);
    }
  };

  const handleEditBtn = () => {
    setIsEdit(true)
  };

  const handleNewJobInput = (e) => {
    setNewJob(e.target.value)
  }

  const handleNewJobInputUpdate = (e) => {
    if(e.key === "Enter"){
      props.deleteTask(newJob,props.id)
      setIsEdit(false)
    }
  }

  return (
    <div
      key={props.id}
      className={`list border group  border-teal-400 w-full h-[65px] flex justify-between items-center px-3 text-teal-800 overflow-hidden duration-200 mb-2 hover:scale-105 ${
        props.isDone && "pointer-events-none opacity-75"
      }`}
    >
      <aside className="flex items-center h-full gap-2">
        <input
          checked={props.isDone}
          type="checkbox"
          name="check-box"
          id="check-box"
          disabled={isEdit}
          onChange={handleCheckBox}
          className="list-check-box w-4 h-4 accent-teal-200 outline-none border border-teal-400"
        />
        {isEdit ? (
          <input
            type="text"
            className={`border border-teal-300 outline-none px-2 py-1`}
            name=""
            id=""
            value={newJob}
            onChange={handleNewJobInput}
            onKeyUp={handleNewJobInputUpdate}
          />
        ) : (
          <label
            className={`list-text ${props.isDone && "line-through"}`}
            htmlFor="check-box"
          >
            {newJob}
          </label>
        )}
      </aside>
      <aside className="h-full flex items-center gap-2 translate-x-[115%] group-hover:translate-x-[5%] duration-300">
        <button
          onClick={handleDeleteBtn}
          className="list-del-btn border border-teal-400 w-[50px] h-[50px] flex items-center justify-center active:scale-90"
          fdprocessedid="ojnuvd"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 pointer-events-none"
          >
            <path
              fillRule="evenodd"
              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          onClick={handleEditBtn}
          className="list-edit-btn border border-teal-400 w-[50px] h-[50px] flex items-center justify-center active:scale-90"
          fdprocessedid="jw74f"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 pointer-events-none"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
        </button>
      </aside>
    </div>
  );
};

export default List;
