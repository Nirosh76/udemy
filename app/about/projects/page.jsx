"use client";
import React from "react";
import Card from "@/app/compononts/card";
import { useState } from "react";

export default function ProjectPage() {
  const [isVisible, setIsVisibale] = useState(true);
  const [names, setNames] = useState(["Nirosh", "Manjula", "Ranathunga"]);
  const cards = isVisible && (
    <>
      <Card>
        <p>Welcome</p>
        <div>text</div>
      </Card>
      <Card>
        <h1>Welcome</h1>

        <Card>Nested card</Card>
      </Card>
    </>
  );

  const cardsNames =
    isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

  const handleClick = () => {
    setIsVisibale(!isVisible);
  };

  const handleAdd = () => {
    setNames([...names, "New Name"]);
  };
  return (
    <div className="space-y-4 p-10">
      {cards}
      {cardsNames}
      <div className="flex space-x-4">
        <button className=" bg-orange-400 p-3 rounded-xl" onClick={handleClick}>
          {isVisible ? "Hide" : "Show.."}
        </button>

        <button className=" bg-orange-400 p-3 rounded-xl" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
