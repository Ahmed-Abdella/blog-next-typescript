import Link from "next/link";
import React from "react";
import PostItem from "./post-item";

interface postType {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  author: string;
  tags: string[];
}

export default function PostsGrid({ posts }: { posts: postType[] }) {
  return (
    <section>
      {/* //refactor beside the post-item */}
      <div className="grid gap-x-5 gap-y-7   grid-cols-3 2xl:grid-cols-2 md:grid-cols-1  ">
        {posts.map((post) => (
          <Link
            key={post.id}
            className=" flex flex-col shadow-xl hover:scale-105  focus:scale-105 transition duration-300 border rounded-3xl"
            href={`/blogs/${post.id}`}
          >
            <PostItem post={post} />
          </Link>
        ))}
      </div>
    </section>
  );
}
