import PostDetails from "../../components/post";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPropsContext } from "next";

import { getPostsFiles, readPostData } from "../../lib/posts-utils";
import { postDataType } from "../../interfaces/post-data";

// const post = {
//   slug: "what-does-Next.js-add-to-react.js",
//   id: 6,
//   imageURL:
//     "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
//   title: "What Does Next.js add to React.js",
//   description:
//     "Next. js is a widely-used framework for building React applications that offer server-side rendering, automatic code-splitting, static exporting options, and easy production builds.",
//   author: "Ahmed Abdella",
//   tags: ["react", "next", "typescript", "tailwind"],
//   content: "# the first header in markdown",
// };

export default function Post({ post }: { post: postDataType }) {
  const router = useRouter();
  console.log(router.query.slug);
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Head>

      <PostDetails post={post} />
    </div>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  const postData = readPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
