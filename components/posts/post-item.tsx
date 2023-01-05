import Image from "next/image";
import Link from "next/link";
import postType from "../../interfaces/post-type";
import { postDataType } from "../../interfaces/post-data";
import Tags from "../tags";

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
    <div className="h-full flex flex-col shadow-xl hover:scale-105  focus:scale-105 hover:md:transform-none transition duration-300 border  rounded-3xl">
      <Link href={`/blogs/${post.slug}`}>
        <div className="relative h-52  width-full ">
          <Image
            className="object-cover rounded-t-3xl"
            loader={myLoader}
            src={post.imageURL}
            alt="html code in laptop"
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
