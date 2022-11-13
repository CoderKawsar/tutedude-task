import React from "react";
import { Link } from "react-router-dom";
import HeaderImage from "../assets/img/Tutedude.png";

function Header() {
  return (
    <div className="flex items-center justify-between px-16">
      <h1 className="text-4xl">
        <Link to="/">
          <img src={HeaderImage} alt="Tute Dude" className="w-40" />
        </Link>
      </h1>
      <div className="flex py-6">
        <Link
          className="text-primary opacity-25 font-medium text-lg mr-7"
          to="/referred"
        >
          Friends Reffered
        </Link>
        <Link className="text-primary opacity-25 font-medium text-lg" to="/">
          My Assignment
        </Link>
        <Link
          className="text-primary font-medium opacity-25 text-lg ml-7"
          to="/"
        >
          Chat with Mentor
        </Link>
        <Link
          className="text-primary font-medium text-lg ml-7 flex items-center"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5 bg-primary rounded-full mr-1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
          ProfileName
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-2.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default Header;
