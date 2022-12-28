import Head from "next/head";
import Image from "next/image";
import AllPosts from "../../components/posts/all-posts";
import PostsGrid from "../../components/posts/posts-grid";
import SearchForm from "../../components/SearchForm";
import { postDataType } from "../../interfaces/post-data";
import { getAllPosts } from "../../lib/posts-utils";

function blogs({ posts }: { posts: postDataType[] }) {
  return (
    <div>
      <Head>
        <title>all blogs</title>
      </Head>

      <div className=" flex flex-col items-center  justify-center mb-10">
        <div>
          <h1 className="text-4xl mt-10 tracking-widest">All Articles</h1>
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
