import Head from "next/head";
import { useState } from "react";

import PostsGrid from "../../components/posts/posts-grid";
import SearchForm from "../../components/SearchForm";
import { PostDataType } from "../../interfaces/post-data";
import { getAllPosts } from "../../lib/posts-utils";

function blogs({ allPosts }: { allPosts: PostDataType[] }) {
  const [searchValue, setSearchValue] = useState<string>("");

  const posts = allPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchValue.toLowerCase())
  );

  console.log(searchValue);
  console.log(posts);

  return (
    <div>
      <Head>
        <title>all blogs</title>
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <div className=" flex flex-col items-center  justify-center mb-10">
        <div>
          <h1 className="text-4xl  font-semibold tracking-wide">
            All Articles
          </h1>
        </div>

        <SearchForm setValue={setSearchValue} value={searchValue} />
      </div>

      <PostsGrid posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      allPosts: allPosts,
    },
  };
}

export default blogs;
