import PostDetails from "../../components/post";
import { useRouter } from "next/router";
import Head from "next/head";

import { PostDataType } from "../../interfaces/post-data";

export default function Post({
  post,
  notFound,
}: {
  post: PostDataType;
  notFound: boolean;
}) {
  const router = useRouter();
  console.log(router.query.slug);

  return (
    <div>
      {post && (
        <>
          <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.excerpt} />
            <link rel="icon" href="/favicon2.png" />
          </Head>
          <PostDetails post={post} />
        </>
      )}

      {notFound && <p className="bg-red-300 px-2 py-1">Can't get the blog</p>}
    </div>
  );
}

export async function getStaticProps(context: any) {
  const { params } = context;
  const { slug } = params;

  try {
    const response = await fetch(`https://api.wetalkdev.com/blog/${slug}`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const postData = await response.json();

    return {
      props: {
        post: postData,
      },
      revalidate: 600, // 10 minutes
    };
  } catch (error) {
    if (error instanceof Error) {
      return {
        props: {
          notFound: true,
          errorMessage: error.message,
        },
      };
    }
  }
}

export async function getStaticPaths() {
  try {
    const response = await fetch("https://api.wetalkdev.com/blog/search", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    const slugs = result.data.map((blogObj: any) => blogObj.slug);
    return {
      paths: slugs.map((slug: string) => ({ params: { slug: slug } })),
      fallback: false,
    };
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    };
  }
}
