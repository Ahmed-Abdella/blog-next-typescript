import Head from "next/head";
import Image from "next/image";
import AllPosts from "../../components/posts/all-posts";

function blogs() {
  return (
    <div>
      <Head>
        <title>all blogs</title>
      </Head>

      <AllPosts />
    </div>
  );
}

export default blogs;
