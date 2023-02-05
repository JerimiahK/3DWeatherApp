import { Html } from "@react-three/drei"
import React, { useState } from "react";

export default function SearchBar() {

  const [userSearch, setUserSearch] = useState("");

  const handleChange = (event) => {
    const userInput = event.target.value;
    setUserSearch(userInput);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserSearch(userSearch);
  };
  return (
    <Html center wrapperClass="searchBar">
      <form onSubmit={handleSubmit} className="searchBar">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-black sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute bg-blue-900 inset-y-0 left-0 flex items-center pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-8 h-5 bg-blue-900  text-black dark:text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
          onChange={handleChange}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search City"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-0 bottom-0 bg-blue-900 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-xl text-sm px-4 py-4 dark:bg-lightblue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
          </button>
        </div>
      </form>
    </Html>
  );
}
