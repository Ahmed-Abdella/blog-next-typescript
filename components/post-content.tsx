import Image from "next/image";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { postDataType } from "../interfaces/post-data";
import postType from "../interfaces/post-type";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

    image(image: any) {
      return (
        <Image
          src={post.imageURL}
          alt={image.alt}
          width={600}
          height={300}
        ></Image>
      );
    },

    a: ({ node, ...props }: any) => (
      <a
        className="text-sky-500 hover:text-sky-600 underline transition duration-300 decoration-sky-500 "
        {...props}
      ></a>
    ),

    h1: ({ node, ...props }: any) => <h1 className="text-3xl" {...props}></h1>,

    h2({ node, ...props }: any) {
      return (
        <h2 className="text-2xl text-black font-semibold " {...props}></h2>
      );
    },

    h3({ node, ...props }: any) {
      return <h3 className="text-xl font-semibold mt-10 " {...props}></h3>;
    },

    ul({ node, ordered, ...props }: any) {
      return <ul className="list-disc ml-6" ordered="false" {...props}></ul>;
    },

    ol({ node, ordered, ...props }: any) {
      return <ol className="list-decimal ml-6" ordered="true" {...props}></ol>;
    },

    h4({ node, ...props }: any) {
      return (
        <div
          className=" bg-sky-100 p-4 text-sky-900 rounded-lg"
          {...props}
        ></div>
      );
    },

    h5({ node, ...props }: any) {
      return (
        <div
          className="text-base bg-green-100 p-4 text-green-900 rounded-lg"
          {...props}
        ></div>
      );
    },

    h6({ node, ...props }: any) {
      return (
        <div
          className="bg-red-100 p-4 text-red-900 rounded-lg"
          {...props}
        ></div>
      );
    },

    strong({ node, ...props }: any) {
      return (
        <strong
          className="text-black tracking-wide leading-relaxed"
          {...props}
        ></strong>
      );
    },
    // Check that custom jsx element [Image/next] I copy pasted it
    //leave image with no customization
    p: (paragraph: { children?: boolean; node?: any }) => {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        const metastring = image.properties.alt;
        const alt = metastring?.replace(/ *\{[^)]*\} */g, "");
        const metaWidth = metastring.match(/{([^}]+)x/);
        const metaHeight = metastring.match(/x([^}]+)}/);
        const width = metaWidth ? metaWidth[1] : "300";
        const height = metaHeight ? metaHeight[1] : "100";
        const isPriority = metastring?.toLowerCase().match("{priority}");
        const hasCaption = metastring?.toLowerCase().includes("{caption:");
        const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

        const myLoader = (): string => {
          return image.properties.src;
        };

        return (
          <div className="">
            <Image
              loader={myLoader}
              src={image.properties.src}
              width={width}
              height={height}
              alt={alt}
              priority={isPriority}
              className={`image max-h-96 object-left border p-4 bg-gray-50 `}
            />
            {hasCaption ? (
              <div className="caption" aria-label={caption}>
                {caption}
              </div>
            ) : null}
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <div className="min-w-full max-w-full md [&>*]:mb-4 text-gray-900   leading-relaxed">
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </div>
  );
}
