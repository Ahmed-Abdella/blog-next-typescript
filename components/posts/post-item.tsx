import Image from "next/image";
import Link from "next/link";

// import { Roboto_Mono } from "@next/font/google";

interface postType {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  author: string;
  tags: string[];
}

// const robotoMono = Roboto_Mono({
//   weight: ["500"],
//   subsets: ["latin"],
// });

// ${robotoMono.className} in the h3 tag

export default function PostItem({ post }: { post: postType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };
  return (
    <>
      <div className="relative h-52  width-full ">
        <Image
          className=" object-cover rounded-t-3xl"
          loader={myLoader}
          src={post.imageURL}
          alt="html code in laptop"
          fill
        ></Image>
      </div>
      <h3 className={` font-semibold mt-4 text-black text-2xl px-8 `}>
        {post.title}
      </h3>

      <p className=" mt-4 text-gray-500 text-base px-4 line-3">
        {`${post.description}`}
      </p>

      <div className="mb-4 pt-6 mt-auto px-8 flex flex-wrap gap-2 ">
        {post.tags.map((tag) => (
          <div
            key={tag}
            className=" bg-gray-200 hover:bg-gray-300 transition  duration-300 text-gray-900 rounded-xl px-2 py-0.5 text-sm"
          >
            {tag}
          </div>
        ))}
      </div>

      <div className=" mb-4 pt-4 mt-2">
        <p className=" text-xs font-light text-gray-400  px-4">
          written by:{" "}
          <span className=" text-sm text-gray-900">{post.author}</span>
        </p>
      </div>
    </>
  );
}
