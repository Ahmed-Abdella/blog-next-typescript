import PostDetails from "../../components/post";
import { useRouter } from "next/router";
import Head from "next/head";
import { GetStaticPropsContext } from "next";

import pb from "../../lib/pocketbase";
import matter from "gray-matter";

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

  const record = await pb
    .collection("posts")
    .getFirstListItem(`slug="${slug}"`);

  const { data, content } = matter(record.content);

  const post = {
    slug: record.slug,

    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    imageURL: data.imageURL,
    author: data.author,
    authorImage: data.authorImage,
    tags: data.tags,
    isFeatured: data.isFeatured,
    content,
    completed: data.completed,
  };

  return {
    props: {
      post: post,
    },
    revalidate: 10000000,
  };
}

export async function getStaticPaths() {
  const allPosts = await pb
    .collection("posts")
    .getFullList(200 /* batch size */, {
      sort: "-created",
    });

  const slugs = allPosts.map((post) => post.slug);
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
