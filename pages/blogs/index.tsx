import Head from "next/head";

import PostsGrid from "../../components/posts/posts-grid";
import SearchForm from "../../components/SearchForm";
import { postDataType } from "../../interfaces/post-data";
import { getAllPosts } from "../../lib/posts-utils";

function blogs({ posts }: { posts: postDataType[] }) {
  return (
    <div>
      <Head>
        <title>all blogs</title>
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <div className=" flex flex-col items-center  justify-center mb-10">
        <div>
          <h1 className="text-4xl mt-10 font-semibold tracking-wide">
            All Articles
          </h1>
        </div>

        <SearchForm />
      </div>

      <PostsGrid posts={posts} />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default blogs;
