import Image from "next/image";
import Link from "next/link";

import { PostDataType } from "../../interfaces/post-data";
import Tags from "../tags";

export default function PostItem({ post }: { post: PostDataType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };
  return (
    <div className="h-full flex flex-col  hover:shadow-xl  focus:shadow-xl hover:md:transform-none transition duration-300 border border-gray-300  rounded-3xl">
      <Link href={`/blog/${post.slug}`}>
        <div className="relative h-52  width-full ">
          <Image
            className="object-cover rounded-t-3xl"
            loader={myLoader}
            src={post.imageURL}
            alt="development image unsplash"
            fill
          ></Image>
        </div>

        <h3
          className={` font-semibold mt-4 text-black text-2xl px-8 tracking-wide  `}
        >
          {post.title}
        </h3>

        <p className=" mt-4 text-black text-base px-4 line-3">
          {`${post.excerpt}`}
        </p>
      </Link>

      <Tags tags={post.tags} />

      <div className="flex items-center mb-4  mt-2 px-4">
        <Link href={"/about"}>
          <Image
            alt="creator image"
            src={post.authorImage}
            width={25}
            height={25}
            className="rounded-full"
          ></Image>
        </Link>

        <Link href={"/about"}>
          <p className=" text-gray-700 text-sm ml-1 hover:underline ">
            {post.author}
          </p>
        </Link>
        <div className="ml-auto  text-gray-400 text-xs">{post.date}</div>
      </div>
    </div>
  );
}
