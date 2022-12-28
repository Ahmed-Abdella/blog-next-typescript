import Image from "next/image";
import { useRouter } from "next/router";
import { postDataType } from "../interfaces/post-data";

import postType from "../interfaces/post-type";
import PostContent from "./post-content";
import { PostHeader } from "./post-header";

function PostDetails({ post }: { post: postDataType }) {
  return (
    <div className="max-w-full px-1 mr-96 ml-32 2xl:mr-72  xl:mr-72 xl:ml-0  lg:px-1 lg:mr-64  lg:ml-0 2md:mx-8 md:mx-4  sm:mx-1 md:text-small  flex flex-col gap-5 items-start">
      <div>
        <PostHeader post={post} />
      </div>
      <div className="max-w-full px-2 text-lg lg:text-base">
        <PostContent post={post} />
      </div>
    </div>
  );
}

export default PostDetails;
