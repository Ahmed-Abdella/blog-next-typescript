import Image from "next/image";
import postType from "../interfaces/post-type";

import Link from "next/link";
import { postDataType } from "../interfaces/post-data";

export function PostHeader({ post }: { post: postDataType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };

  return (
    <div className=" flex flex-col gap-5 items-start border-b ">
      <h1 className="text-4xl font-base text-black">{post.title}</h1>

      <div className="flex items-center w-full ">
        <Link href={"/about"}>
          <Image
            alt="creator image"
            src={post.authorImage}
            width={40}
            height={40}
            className="rounded-full inline"
          ></Image>
          <p className="inline font-light text-gray-500  ml-1">{post.author}</p>
        </Link>
        <div className="ml-4 font-light text-gray-400 text-xs">{post.date}</div>
      </div>

      <div className="image-container relative md:hidden  ">
        <Image
          src={post.imageURL}
          alt={post.title}
          loader={myLoader}
          className={`image `}
          fill
        />
      </div>
      <p className="text-gray-900">{post.excerpt}</p>

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
