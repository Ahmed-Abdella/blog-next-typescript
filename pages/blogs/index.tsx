import Head from "next/head";
import Image from "next/image";

function blogs() {
  return (
    <div>
      <Head>
        <title>all blogs</title>
      </Head>

      <h1 className="text-3xl font-bold underline text-red-900 bg-red-200 shadow-lg">
        all blogs!
      </h1>
    </div>
  );
}

export default blogs;
