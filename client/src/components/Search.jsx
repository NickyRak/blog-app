import React from "react";

export default function Search() {
  return (
    <div className="border-b-2">
      <form action="">
        <input
          type="text"
          placeholder="Search..."
          className="block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-none border-none border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-transparent"
        />
      </form>
    </div>
  );
}
