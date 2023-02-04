import PostDetails from "../../components/post";
import { useRouter } from "next/router";
import Head from "next/head";

import { getPostsFiles, readPostData } from "../../lib/posts-utils";
import { PostDataType } from "../../interfaces/post-data";

export default function Post({ post }: { post: PostDataType }) {
  const router = useRouter();
  console.log(router.query.slug);
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
        <link rel="icon" href="/favicon2.png" />
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
