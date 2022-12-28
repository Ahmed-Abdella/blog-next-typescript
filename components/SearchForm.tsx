import { useState } from "react";

export default function () {
  const [border, setBorder] = useState(false);

  return (
    <form
      className={`  flex text-base font-normal  mt-6 py-1 px-4 mx-5 border-gray-400  rounded-md hover:bg-gray-100   transition duration-300 ${
        border ? "border-black border" : "border"
      } `}
    >
      <div>
        <label htmlFor="search"></label>

        <input
          id="search"
          type="text"
          className="w-80 xs:w-48 outline-none bg-inherit "
          placeholder="search..."
          onFocus={() => setBorder(true)}
          onBlur={() => setBorder(false)}
        />
      </div>

      <button className="ml-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </form>
  );
}
