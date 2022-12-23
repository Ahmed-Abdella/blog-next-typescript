"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

import NavLink from "./nav-link";
import { BsTwitter } from "react-icons/Bs";
import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function NavBar() {
  // const breakPoint = 800;
  // const [width, setWidth] = useState(
  //   typeof window !== "undefined" ? window.innerWidth : 0
  // );

  // console.log(width);

  // useEffect(() => {
  //   window.addEventListener("resize", () => setWidth(window.innerWidth));
  //   return window.removeEventListener("resize", () =>
  //     setWidth(window.innerWidth)
  //   );
  // }, []);

  const [menuIsOpen, setmenuIsOpen] = useState(false);

  return (
    <>
      <header
        id="nav-bar"
        className="blury max-h-14  fixed top-0 right-0 left-0  text-gray-600 font-semibold  flex items-center px-20 lg:px-10 md:px-15 sm:px-10 py-4  border border-gray-100 shadow text-base"
      >
        <Link href="/">
          <Image
            src={"/logo2.svg"}
            alt="the website logo"
            width={150}
            height={150}
          ></Image>
        </Link>

        {/* <form className=" bg-gray-100 flex text-base font-normal shadow  ml-20 py-1 px-4 border-gray-400 border rounded-md">
        <div>
          <label htmlFor="search"></label>

          <input
            id="search"
            type="text"
            className="bg-gray-100  w-80 outline-none"
            placeholder="search..."
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
      </form> */}

        <nav className={`ml-auto md:hidden`}>
          <ul className="[&>*]:ml-5 [&>*]:lg:ml-2  [&>*]:transition [&>*]:duration-500  flex items-center ">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
            <li className="border-l border-gray-400 pl-4 py-0.5">
              <BsTwitter />
            </li>
          </ul>
        </nav>

        <div
          onClick={() => setmenuIsOpen(true)}
          className="hidden md:block text-2xl cursor-pointer ml-auto"
        >
          <FiMenu />
        </div>
      </header>

      <nav
        id="nav-bar"
        className={` ${
          menuIsOpen ? "md:translate-y-0" : ""
        } hidden-menu  fixed top-0  right-0 left-0 blury transition duration-500  `}
      >
        <ul className="font-bold text-xl hover:[&>*]:[&>*]:bg-gray-200 [&>*]:[&>*]:cursor-pointer   [&>*]:[&>*]:transition [&>*]:duration:300  [&>*]:[&>*]:py-2 [&>*]:[&>*]:px-4 [&>*]:[&>*]:rounded-lg   [&>*]:mb-8  flex flex-col justify-center items-center p-10">
          <li className="self-end">
            <div
              onClick={() => {
                setmenuIsOpen(false);
              }}
            >
              <GrClose className="cursor-pointer text-4xl " />
            </div>
          </li>
          <li onClick={() => setmenuIsOpen(false)}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={() => setmenuIsOpen(false)}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li onClick={() => setmenuIsOpen(false)}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={() => setmenuIsOpen(false)}>
            <Link href="/contact">Contact</Link>
          </li>
          <li onClick={() => setmenuIsOpen(false)}>
            <div>
              <BsTwitter />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
