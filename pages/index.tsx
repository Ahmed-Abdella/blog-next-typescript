import Head from "next/head";
import Image from "next/image";
// import Image from "next/image";
import FeaturedPosts from "../components/home/featured-posts";

import { getAllPosts, getFeaturedPosts } from "../lib/posts-utils";

import { postDataType } from "../interfaces/post-data";

import { useState } from "react";
import SearchForm from "../components/SearchForm";

function Home({ posts }: { posts: postDataType[] }) {
  const [border, setBorder] = useState(false);

  return (
    <div>
      <Head>
        <title>Articles about software development</title>
        <meta
          name="description"
          content="aricles about software and web Development"
        />
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <div className=" flex flex-col items-center  justify-center">
        <h1 className=" text-3xl md:text-2xl text-black text-center  font-semibold">
          We Talk About Software & Web Development
          <Image
            src={"/icon.svg"}
            alt="the logo icon"
            width={40}
            height={40}
            className="bg-gray-200 mb-1 p-2 rounded-full inline-block ml-2 "
          ></Image>
        </h1>

        <SearchForm />

        {/* <form
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
        </form> */}
      </div>

      <FeaturedPosts posts={posts}></FeaturedPosts>
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getFeaturedPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default Home;

// I use the page directory with next13
