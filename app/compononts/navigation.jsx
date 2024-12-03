import React from "react";
import Link from "next/link";
import style from "./navigation.module.css";

export default function Navigation() {
  return (
    <div>
      <nav className="font-mono">
        <ul className="flex md:space-x-4 flex-col md:flex-row">
          <li>
            <Link href="/" className={style.link}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={style.link}>
              About
            </Link>
          </li>
          <li>
            <Link href="/about/projects" className={style.link}>
              Projects
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
