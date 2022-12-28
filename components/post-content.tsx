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
          customStyle={{
            fontSize: "0.9rem",
          }}
        />
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },

    h1: ({ node, ...props }: any) => <h1 className="text-3xl" {...props}></h1>,

    h2({ node, ...props }: any) {
      return <h2 className="text-2xl" {...props}></h2>;
    },

    p({ node, ...props }: any) {
      return <p className="" {...props}></p>;
    },

    ul({ node, ...props }: any) {
      return <ul className="list-disc " {...props}></ul>;
    },

    ol({ node, ...props }: any) {
      return <ol className="list-decimal " {...props}></ol>;
    },
  };
  return (
    <div className="min-w-full max-w-full md [&>*]:mt-6">
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </div>
  );
}
