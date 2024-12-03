import React from "react";

export default function Card({ children }) {
  return (
    <div className="border rounded-md border-gray-800 p-4">{children}</div>
  );
}
