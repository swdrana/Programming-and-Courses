import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <div className="  container mx-auto ">
      <h1 className="text-xl text-center my-5 bg-red-300">
        Assignment 07 | SPA
      </h1>
      <div className=" border border-purple-400 flex flex-col items-center justify-center">
        <h2 className=" text-3xl py-16">Count: {number}</h2>
        <div className="">
          <div className=" flex items-center justify-center gap-10 pb-20 pt-5">
            <button
              className=" bg-green-600 p-5 rounded-lg"
              onClick={() => setNumber(number + 1)}
            >
              Increment
            </button>
            <button
              className=" bg-red-600 p-5 rounded-lg"
              onClick={ ()=>setNumber(number-1) }
            >
              Decrement
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Counter
