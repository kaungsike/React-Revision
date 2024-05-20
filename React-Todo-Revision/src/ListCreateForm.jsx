import React, { useState } from 'react'

const ListCreateForm = (props) => {

  const [text,setText] = useState("");

  const textInputHandler = (e) => {
    setText(e.target.value)

  }

  const addBtnHandler = () => {
    props.addTask(text)
    setText("")
  }
  return (
    <div className="w-full h-[60px] flex">
    <input
      type="text"
      id="textInput"
      className="flex-grow outline-none px-3 border border-teal-400"
      value={text}
      onChange={textInputHandler}
    />
    <button
      className="h-full w-[60px] bg-teal-900 flex justify-center items-center text-teal-200 border-none"
      id="addBtn"
      onClick={addBtnHandler}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
      >
        <path
          fillRule="evenodd"
          d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
  )
}

export default ListCreateForm