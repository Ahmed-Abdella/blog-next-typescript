import Image from "next/image";
import Link from "next/link";

interface postType {
  id: number;
  title: string;
  description: string;
  imageURL: string;
  author: string;
}

export default function PostItem({ post }: { post: postType }) {
  const myLoader = (): string => {
    return post.imageURL;
  };
  return (
    <Link
      className="flex flex-col shadow-2xl hover:scale-105 focus:scale-105 transition duration-300 bg-gray-100 rounded-3xl"
      href={`/blogs/${post.id}`}
    >
      <div className="z-0 relative h-52  width-full ">
        <Image
          className="object-cover rounded-t-3xl"
          loader={myLoader}
          src={post.imageURL}
          alt="html code in laptop"
          fill
        ></Image>
      </div>
      <h3 className="font-bold mt-4 text-gray-900 text-2xl px-8">
        {post.title}
      </h3>

      <p className="mt-4 text-gray-500 text-base px-4 ">{post.description}</p>

      <div className="mb-4 pt-6 mt-auto">
        <p className="text-xs text-gray-500  self-end px-4">
          written by
          <span className="block text-sm text-gray-900">{post.author}</span>
        </p>
      </div>
    </Link>
  );
}
