import Head from "next/head";
import Image from "next/image";

import FeaturedPosts from "../components/home/featured-posts";

import { getFeaturedPosts } from "../lib/posts-utils";

import { PostDataType } from "../interfaces/post-data";

import SearchForm from "../components/SearchForm";

function Home({ posts }: { posts: PostDataType[] }) {
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
