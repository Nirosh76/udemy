import React from "react";
import Navigation from "./navigation";
import Link from "next/link";
import Counter from "./counter";

export default function Header() {
  return (
    <>
      <header className="flex justify-between md:items-center mt-4 bg-slate-500">
        <div className="flex items-center md:space-12">
          <div className="hidden md:block">
            <Link href="/" className="text-xl">
              Nirosh Ranathunga
            </Link>
          </div>
          <Navigation />
        </div>
        <div>Dark Toggle</div>
        <div>
          <Counter />
        </div>
      </header>
    </>
  );
}
