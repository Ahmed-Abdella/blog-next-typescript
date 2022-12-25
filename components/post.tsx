import Image from "next/image";
import { useRouter } from "next/router";
import { postDataType } from "../interfaces/post-data";

import postType from "../interfaces/post-type";
import PostContent from "./post-content";
import { PostHeader } from "./post-header";

function PostDetails({ post }: { post: postDataType }) {
  return (
    <div className="mx-72 flex flex-col gap-5 items-start">
      <div>
        <PostHeader post={post} />
      </div>
      <div>
        <PostContent post={post} />
      </div>
    </div>
  );
}

export default PostDetails;
