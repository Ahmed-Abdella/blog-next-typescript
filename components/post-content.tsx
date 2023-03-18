import Image from "next/image";

import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FiCopy } from "react-icons/fi";
import { MdDone } from "react-icons/md";

import { useState, useEffect } from "react";

export default function PostContent({ content }: { content: string }) {
  const components: any = {
    code({ node, inline, className, children, ...props }: any) {
      const [copied, setCopied] = useState(false);

      useEffect(() => {
        const timer = setTimeout(() => {
          setCopied(false);
        }, 2000);

        return () => clearTimeout(timer);
      }, [copied]);

      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <div className="relative text-sm  ">
          <div className="absolute flex items-center text-center top-2 right-2 z-20">
            {copied && (
              <p className="inline text-base text-green-500 mr-1">Copied</p>
            )}
            <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
              <button
                className={`${!copied ? "text-white" : "text-green-500"}   ${
                  copied ? "border border-green-500 " : ""
                } rounded text-base p-0.5 transition duration-300`}
              >
                {copied ? <MdDone /> : <FiCopy />}
              </button>
            </CopyToClipboard>
          </div>

          <SyntaxHighlighter
            children={String(children).replace(/\n$/, "")}
            style={materialOceanic}
            language={match[1]}
            PreTag="div"
            {...props}
            customStyle={{
              fontSize: "1rem",
              padding: "2rem 1rem",

              border: "1px solid rgb(209 213 219)",
              borderRadius: "8px",
            }}
          />
        </div>
      ) : (
        <code
          className={`${className}  text-gray-900 bg-gray-200 px-1 rounded`}
          {...props}
        >
          {children}
        </code>
      );
    },

    // img(img: any) {
    //   return <img className="shadow" alt={img.alt} src={img.src}></img>;
    // },

    a: ({ node, ...props }: any) => (
      <a
        className="text-sky-500 hover:text-sky-600 underline transition duration-300 decoration-sky-500 "
        {...props}
      ></a>
    ),

    h1: ({ node, ...props }: any) => (
      <h1 className="text-3xl text-black" {...props}></h1>
    ),

    h2({ node, ...props }: any) {
      return (
        <h2
          className="text-2xl md:text-xl text-black font-semibold "
          {...props}
        ></h2>
      );
    },

    h3({ node, ...props }: any) {
      return (
        <h3
          className="text-2xl text-black font-semibold mt-10 "
          {...props}
        ></h3>
      );
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
          className=" bg-green-100 p-4 text-green-900 rounded-lg"
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
              className={`image max-h-96 object-left drop-shadow-xl  `}
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
    <div
      className="md min-w-full max-w-full  [&>*]:mb-6 text-gray-900 text-lg lg:text-base
       leading-relaxed"
    >
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
