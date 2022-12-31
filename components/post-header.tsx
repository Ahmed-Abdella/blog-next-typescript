import Image from "next/image";
import postType from "../interfaces/post-type";

import Link from "next/link";
import { postDataType } from "../interfaces/post-data";

// import { Lato } from "@next/font/google";

// const fontFamily = Lato({
//   weight: ["400"],
//   subsets: ["latin"],
// });

export function PostHeader({ post }: { post: postDataType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };

  return (
    <div className=" flex flex-col items-start border-b   ">
      <h1 className="text-4xl font-semibold text-black ">{post.title}</h1>

      <div className={`flex mt-6 iems-center `}>
        <Link className="mr-3" href={"/about"}>
          <Image
            alt="creator image"
            src={post.authorImage}
            width={45}
            height={45}
            className="rounded-full inline"
          ></Image>
        </Link>

        <div className="self-center  ">
          <Link href={"/about"}>
            <p className=" text-black  hover:underline ">{post.author}</p>
          </Link>

          <div className="  text-gray-500 text-sm">{post.date}</div>
        </div>
      </div>

      {/* <div className="flex items-center w-full mt-6">
        <Link href={"/about"}>
          <Image
            alt="creator image"
            src={post.authorImage}
            width={35}
            height={35}
            className="rounded-full inline"
          ></Image>
          <p className="inline text-gray-900   ml-1">{post.author}</p>
        </Link>
        <div className="ml-4 font-light text-gray-400 text-xs">{post.date}</div>
      </div> */}

      <div className="image-container relative md:hidden mt-3  ">
        <Image
          src={post.imageURL}
          alt={post.title}
          loader={myLoader}
          className={`image `}
          fill
        />
      </div>
      <p className="text-gray-900 mt-4">{post.excerpt}</p>

      <div className="mb-4   px-8 flex flex-wrap gap-2 mt-6 ">
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
