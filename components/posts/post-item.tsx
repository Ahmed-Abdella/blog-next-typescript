import Image from "next/image";
import Link from "next/link";
import postType from "../../interfaces/post-type";
import { postDataType } from "../../interfaces/post-data";

// import { Roboto_Mono } from "@next/font/google";

// interface postType {
//   slug: string;
//   id: number;
//   title: string;
//   description: string;
//   imageURL: string;
//   author: string;
//   tags: string[];
// }

// const robotoMono = Roboto_Mono({
//   weight: ["500"],
//   subsets: ["latin"],
// });

// ${robotoMono.className} in the h3 tag

// IMAGE PLACE HOLDER

// const shimmer = (w: number, h: number) => `
// <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
//   <defs>
//     <linearGradient id="g">
//       <stop stop-color="#333" offset="20%" />
//       <stop stop-color="#222" offset="50%" />
//       <stop stop-color="#333" offset="70%" />
//     </linearGradient>
//   </defs>
//   <rect width="${w}" height="${h}" fill="#333" />
//   <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
//   <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
// </svg>`;

// const toBase64 = (str: string) =>
//   typeof window === "undefined"
//     ? Buffer.from(str).toString("base64")
//     : window.btoa(str);

export default function PostItem({ post }: { post: postDataType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };
  return (
    <div className="h-full flex flex-col shadow-xl hover:scale-105  focus:scale-105 transition duration-300 border  rounded-3xl">
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

      <p className=" mt-4 text-black text-base px-4 line-3">
        {`${post.excerpt}`}
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
    </div>
  );
}
