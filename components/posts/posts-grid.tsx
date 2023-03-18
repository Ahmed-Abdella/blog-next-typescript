import Link from "next/link";
import React from "react";
import PostItem from "./post-item";

import { PostDataType } from "../../interfaces/post-data";

export default function PostsGrid({ posts }: { posts: PostDataType[] }) {
  return (
    <section>
      {/* //refactor beside the post-item */}
      <div className="grid gap-x-5 gap-y-7   grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 md:px-8 sm:px-1  ">
        {posts.map((post) => (
          <div className="" key={post._id}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
