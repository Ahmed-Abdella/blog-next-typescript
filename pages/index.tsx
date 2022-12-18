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

      <FeaturedPosts></FeaturedPosts>
    </div>
  );
}
