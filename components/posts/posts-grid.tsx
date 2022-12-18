import React from "react";
import PostItem from "./post-item";

interface postType {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  author: string;
}

export default function PostsGrid({ posts }: { posts: postType[] }) {
  return (
    <section>
      <div className="grid grid-cols-3 gap-x-5 gap-y-7 ">
        {posts.map((post: postType) => (
          <PostItem post={post} />
        ))}
      </div>
    </section>
  );
}
