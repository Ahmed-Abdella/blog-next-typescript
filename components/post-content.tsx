import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { postDataType } from "../interfaces/post-data";
import postType from "../interfaces/post-type";

export default function ({ post }: { post: postDataType }) {
  return (
    <div className="">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
}
