"use client";

import { useState } from "react";

export default function Home() {
  const [label, setLabel] = useState("Show");

  const handleClick = () => {
    //e.preventDefault();
    setLabel(label == "Show" ? "Hide" : "Show");
  };

  function handleClick2() {
    alert("Click2");
  }

  return (
    <>
      <div className="flex space-x-5 pt-5">
        <button
          className=" bg-green-600 p-3 rounded-xl"
          onClick={() => alert("I was cliked")}
        >
          Click me
        </button>
        <button className=" bg-orange-400 p-3 rounded-xl" onClick={handleClick}>
          {label}
        </button>
        <button className=" bg-green-600 p-3 rounded-xl" onClick={handleClick2}>
          three
        </button>
      </div>
    </>
  );
}
