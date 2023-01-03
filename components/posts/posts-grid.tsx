import Link from "next/link";
import React from "react";
import PostItem from "./post-item";
import postType from "../../interfaces/post-type";

import { postDataType } from "../../interfaces/post-data";

// interface postType {
//   id: number;
//   slug: string;
//   title: string;
//   description: string;
//   imageURL: string;
//   author: string;
//   tags: string[];
// }

export default function PostsGrid({ posts }: { posts: postDataType[] }) {
  return (
    <section>
      {/* //refactor beside the post-item */}
      <div className="grid gap-x-5 gap-y-7   grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 md:px-8 sm:px-4  ">
        {posts.map((post) => (
          <div className="" key={post.slug}>
            <PostItem post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
