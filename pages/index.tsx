import Head from "next/head";
import Image from "next/image";
// import Image from "next/image";
import FeaturedPosts from "../components/home/featured-posts";

export default function Home() {
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
        <h1 className=" text-3xl md:text-2xl text-gray-900 text-center  font-semibold">
          We Talk About Software & Web Development
          <Image
            src={"/icon.svg"}
            alt="the logo icon"
            width={40}
            height={40}
            className="bg-gray-200 mb-1 p-2 rounded-full inline-block ml-2 "
          ></Image>
        </h1>

        <form className="  flex text-base font-normal shadow  mt-6 py-1 px-4 mx-5 border-gray-200 border-2 rounded-md ">
          <div>
            <label htmlFor="search"></label>

            <input
              id="search"
              type="text"
              className="w-80 xs:w-48 outline-none"
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
      </div>

      <FeaturedPosts></FeaturedPosts>
    </div>
  );
}
