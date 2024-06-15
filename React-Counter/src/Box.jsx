import React, { useState } from "react";

const Box = (props) => {
  const [hide, setHide] = useState(true);

  // const handleOpenBtn = () => {
  //     setHide(false)
  // }

  // const handleCloseBtn = () => {
  //     setHide(true)
  // }

  const toggleBtn = () => {
    setHide(!hide);
  };

  return (
    <div className="grid grid-cols-2 gap-1 m-0">
      <button
        onClick={toggleBtn}
        className=" flex items-center justify-between gap-3 p-4
         bg-neutral-500 col-span-2 rounded text-white text-xl active:scale-95 duration-150"
      >
        {props.question}           <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`duration-200 size-5 ${ hide ? "rotate-0" : "rotate-90"}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
      </button>
      {/* <button onClick={handleOpenBtn} className=" bg-green-600 text-white active:scale-95 duration-200 rounded-md py-3 border-neutral-700 col-span-1">
        Show
      </button>
      <button onClick={handleCloseBtn} className=" bg-red-600 text-white active:scale-95 duration-200 rounded-md py-3 border-neutral-700 col-span-1">
        Hide
      </button> */}
      <div
        className={`${
          hide && `hidden`
        } border border-neutral-200 p-3 col-span-2 rounded-md `}
      >
        <p>
          {props.answer}
        </p>
      </div>
    </div>
  );
};

export default Box;
