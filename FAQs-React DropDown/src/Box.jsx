import React, { useState } from "react";

const Box = (props) => {


    const handleButton = () => {
        props.clickBox(props.id)
    }



  return (
    <div className="grid grid-cols-2 gap-1 p-[1px]">
      <button onClick={handleButton} className="border flex items-center py-3 rounded justify-between px-5 text-xl bg-gray-200 border-zinc-600 col-span-2">
        {props.question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-6 h-6 duration-200 ${props.hide ? "" : "rotate-90"} `}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <div className={`${props.hide ? "hidden" : ""} border duration-200 rounded border-gray-600 h-[68px] flex items-center px-5 col-span-2 `}>
        <p className={`text-sm`}>{props.answer}</p>
      </div>
    </div>
  );
};

export default Box;
