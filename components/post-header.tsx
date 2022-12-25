import Image from "next/image";
import postType from "../interfaces/post-type";

import Link from "next/link";
import { postDataType } from "../interfaces/post-data";

export function PostHeader({ post }: { post: postDataType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };

  return (
    <div className=" flex flex-col gap-5 items-start">
      <h1 className="text-4xl font-semibold text-black">{post.title}</h1>
      <div className="relative h-96 w-full   ">
        <Image
          src={post.imageURL}
          fill
          alt={post.title}
          loader={myLoader}
          className="object-cover object-left "
          unoptimized={true}
        />
      </div>
      <p className="text-gray-600">{post.excerpt}</p>

      <div className="mb-4   px-8 flex flex-wrap gap-2 ">
        <span className="text-sky-500">#</span>
        {post.tags.map((tag) => (
          <Link
            href={"#"}
            key={tag}
            className=" bg-gray-200 hover:bg-gray-300 transition  duration-300 text-gray-900 rounded-xl px-2 py-0.5 text-sm"
          >
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}
