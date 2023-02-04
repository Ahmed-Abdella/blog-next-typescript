import Image from "next/image";
import { useRouter } from "next/router";
import { PostDataType } from "../interfaces/post-data";

import PostType from "../interfaces/post-type";
import PostContent from "./post-content";
import { PostHeader } from "./post-header";

function PostDetails({ post }: { post: PostDataType }) {
  return (
    <div className="max-w-full px-1 mr-96 ml-32 3xl:mr-80 2xl:mr-72  xl:mr-72 xl:ml-0  lg:px-1 lg:mr-64  lg:ml-0 2md:mx-8 md:mx-4  sm:mx-0 md:text-small  flex flex-col gap-5 items-start ">
      <div className="min-w-full max-w-full">
        <PostHeader post={post} />
      </div>
      <div className="max-w-full min-w-full  px-2 mt-2">
        <PostContent content={post.content} />
      </div>
    </div>
  );
}

export default PostDetails;
