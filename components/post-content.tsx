import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { postDataType } from "../interfaces/post-data";
import postType from "../interfaces/post-type";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dark,
  darcula,
  coy,
  dracula,
  materialDark,
  materialOceanic,
  atomDark,
  vsDark,
  materialLight,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function ({ post }: { post: postDataType }) {
  const components: any = {
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          children={String(children).replace(/\n$/, "")}
          style={materialLight}
          language={match[1]}
          PreTag="div"
          {...props}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <div className="min-w-full max-w-full md [&>*]:mt-10">
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </div>
  );
}
