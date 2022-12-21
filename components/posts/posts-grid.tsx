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
      <div className="grid gap-x-5 gap-y-7   grid-cols-3 2xl:grid-cols-2 md:grid-cols-1  ">
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
      </div>
    </section>
  );
}
