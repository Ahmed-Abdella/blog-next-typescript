import Head from "next/head";
import Image from "next/image";
import AllPosts from "../../components/posts/all-posts";
import PostsGrid from "../../components/posts/posts-grid";
import SearchForm from "../../components/SearchForm";
import { postDataType } from "../../interfaces/post-data";
import pb from "../../lib/pocketbase";
import matter from "gray-matter";
function blogs({ posts }: { posts: postDataType[] }) {
  return (
    <div>
      <Head>
        <title>all blogs</title>
      </Head>

      <div className=" flex flex-col items-center  justify-center mb-10">
        <div>
          <h1 className="text-4xl mt-2 font-semibold tracking-wide">
            All Articles
          </h1>
        </div>

        <SearchForm />
      </div>

      <PostsGrid posts={posts} />
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = await pb
    .collection("posts")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    });

  const postsJSON = JSON.stringify(allPosts);
  const posts = await JSON.parse(postsJSON);

  const postsArr = posts.map((post: any) => {
    const { data, content } = matter(post);
    return {
      slug: post.slug,

      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      imageURL: data.imageURL,
      author: data.author,
      authorImage: data.authorImage,
      tags: data.tags,
      isFeatured: data.isFeatured,
      content,
      completed: data.completed,
    };
  });

  return {
    props: {
      posts: postsArr,
    },
  };
}

export default blogs;
