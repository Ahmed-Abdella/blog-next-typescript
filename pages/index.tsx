import Head from "next/head";
import { useState } from "react";
import Image from "next/image";
// import { useRouter } from "next/router";

import PostsGrid from "../components/posts/posts-grid";
import SearchForm from "../components/SearchForm";
import { PostDataType } from "../interfaces/post-data";

// import Link from "next/link";

function blogs({
  allPosts,
  notFound,
  errorMessage,
}: {
  allPosts: PostDataType[];
  notFound: boolean;
  errorMessage: string;
}) {
  const [searchValue, setSearchValue] = useState<string>("");
  // const router = useRouter();
  // const { tag } = router.query;
  // console.log(tag);
  let posts: null | PostDataType[] = null;

  if (allPosts) {
    posts = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  // console.log(searchValue);
  // console.log(posts);

  return (
    <>
      {posts && (
        <div>
          <Head>
            <title>
              We Talk Dev - Tips, Tricks, and Insights for Developers
            </title>
            <meta
              name="description"
              content="Tips, Tricks, and Insights for Developers"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className=" flex flex-col items-center  justify-center mb-10">
            <div className=" flex flex-col items-center  justify-center">
              <h1 className=" text-4xl md:text-3xl text-black text-center  font-semibold">
                Tips, Tricks, and Insights for Developers
                <Image
                  src={"/icon.svg"}
                  alt="the logo icon"
                  width={40}
                  height={40}
                  className="bg-gray-200 mb-1 p-2 rounded-full inline-block ml-2 "
                ></Image>
              </h1>
              <p>We Provide Articles About Software and Web Development</p>
            </div>

            <SearchForm
              setValue={(value: string) => setSearchValue(value)}
              value={searchValue}
            />
          </div>
          <PostsGrid posts={posts} />

          {/* 

      Pagination
      
      <div className="mt-10   flex items-center justify-center [&>a]:bg-gray-100 [&>a]:px-3 [&>a]:py-2 [&>a]:cursor-pointer  [&>a]:rounded-xl [&>a]:w-48 hover:[&>a]:bg-gray-200 [&_span]:text-xl ">
        <Link href={"#"} className="mr-8 text-center">
          <span>&larr;</span> Previous page
        </Link>

        <Link href={"#"} className="ml-8 text-center">
          Next Page <span>&rarr;</span>
        </Link>
      </div> */}
        </div>
      )}

      {notFound && <p className="bg-red-300 px-2 py-1">Can't get the blogs</p>}
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://api.wetalkdev.com/blog/search", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return {
      props: {
        allPosts: result.data,
      },
      revalidate: 600, // 10 minutesّ
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

export default blogs;
