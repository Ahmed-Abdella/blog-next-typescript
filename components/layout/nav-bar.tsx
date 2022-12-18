// "use client";

import Image from "next/image";
import Link from "next/link";
import { BsTwitter } from "react-icons/Bs";
import { BsLinkedin } from "react-icons/Bs";
import NavLink from "./nav-link";
// import { useSelectedLayoutSegment } from "next/navigation";

import { useRouter } from "next/router";

function NavBar() {
  // let segment = useSelectedLayoutSegment();
  const router = useRouter();

  // className={`text-red  ${`/${segment}` === "/" ? "bg-red" : "bg-blue"}`} FOR REVISION

  return (
    <header
      id="nav-bar"
      className="blury fixed top-0 right-0 left-0  text-gray-600 font-semibold shadow flex items-center px-20 py-4 border border-gray-100 text-base"
    >
      <Link href="/">
        <Image
          src={"/logo2.svg"}
          alt="the website logo"
          width={150}
          height={150}
        ></Image>
      </Link>

      <form className=" bg-gray-100 flex text-base font-normal shadow  ml-20 py-1 px-4 border-gray-400 border rounded-md">
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
      </form>

      <nav className="ml-auto">
        <ul className="[&>*]:ml-5   [&>*]:transition [&>*]:duration-500  flex items-center ">
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
          <li className="border-l border-gray-600 px-6">
            <ul className="flex hover:[&>*]:text-gray-900 hover:[&>*]:cursor-pointer [&>*]:transition [&>*]:duration-500  ">
              <li className="mr-4">
                <a>
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a>
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
