import Head from "next/head";
import Image from "next/image";
import FeaturedPosts from "../components/home/featured-posts";

export default function Home() {
  return (
    <div>
      <Head>
        <title>We Talk Dev!</title>
        <meta
          name="description"
          content="aricles about software and web Development"
        />
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <div className=" flex  justify-center">
        <h1 className=" leading-relaxed text-4xl text-gray-900 text-center font-bold w-3/4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-violet-700 ">
          We Provide Articles And Tutorials About Software And Web Development
        </h1>
      </div>

      <FeaturedPosts></FeaturedPosts>
    </div>
  );
}
