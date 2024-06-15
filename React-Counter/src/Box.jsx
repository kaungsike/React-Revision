import React from "react";

const Box = () => {
  return (
    <div className="grid grid-cols-2 p-24 gap-5">
      <button className="border bg-neutral-600 text-white active:scale-95 duration-200 rounded-md py-3 border-neutral-700 col-span-1">
        Open
      </button>
      <button className="border bg-neutral-600 text-white active:scale-95 duration-200 rounded-md py-3 border-neutral-700 col-span-1">
        Close
      </button>
      <div className="border border-neutral-500 p-10 col-span-2 rounded-md">
        <h1 className="text-center font-bold text-2xl mb-3">Min Ka Lr Pr Byar</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore blanditiis reprehenderit cumque eum animi repellat odit repellendus nihil ipsam similique autem consequuntur dolor, natus, sed itaque illo deleniti aspernatur quod libero assumenda numquam enim officia repudiandae possimus! Autem, inventore aliquam.</p>
      </div>
    </div>
  );
};

export default Box;
