import React, { useState } from "react";


const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAddBtn = () => {
    setCount(count + 1);
  };

  const handleSubBtn = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <div className="grid grid-cols-2 gap-5 p-24">
      <h1 className="col-span-2 text-center mb-10 text-6xl"> {count} </h1>
      <button
        onClick={handleAddBtn}
        className="border bg-neutral-600 text-white active:scale-95 duration-200 rounded-md py-3 border-neutral-700 col-span-1"
      >
        Add
      </button>
      <button
        onClick={handleSubBtn}
        className="border bg-neutral-600 text-white active:scale-95 duration-200 rounded-md py-3 border-neutral-700 col-span-1"
      >
        Sub
      </button>
    </div>
  );
};

export default Counter;
