---
title: "What does next.js add to react.js"
date: "2022-12-11"
imageURL: "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
excerpt: "Next. js is a widely-used framework for building React applications that offer server-side rendering, automatic code-splitting, static exporting options, and easy production builds"

author: "Ahmed Abdella"
authorImage: "/images/creators/abdella.jpg"
tags: ["react", "next", "typescript", "tailwind"]

isFeatured: true
completed: true
---

**Next.js** provides three data fetching methods and based on these methods, it renders content differently. (You can learn about different rendering methods[here](https://nextjs.org/docs/basic-features/data-fetching/overview)

1. getStaticProps
2. getStaticPaths
3. getServerSideProps

**getStaticProps**:It preloads all of the data needed for a given page and renders pages ahead of the user’s request at build time. For speedier retrieval, all of the data is cached on a headless CMS. For better SEO performance, the page is pre-rendered and cached. If no other data fetching method is specified, Next.js will use this by default. It is used to implement Static Site Generation and Incremental Site Regeneration.

**Properties of getStaticProps:**

- It can only be exported from the page file, not the component file.
- It only runs on build time.
- It runs on every subsequent request in development mode.
- Its code is completely excluded from the client-side bundle.

**getStaticPaths:** If a page uses getStaticProps and has dynamic routes, it must declare a list of paths that will be statically generated. Next.js will statically pre-render all the paths defined by getStaticPaths when we export a function named getStaticPaths from a page.

**Properties of getStaticPaths:**

- It can only be exported from a page file.
- It is meant for dynamic routes.
- Page must also implement getStaticProps.
- It runs only at build time in production.
- It runs on every request in development mode.

**getServerSideProps:** It will pre-render the page on every subsequent request. It is slower as compared to getStaticProps as the page is being rendered on every request. getServerSideProps props return JSON which will be used to render the page all this work will be handled automatically by Next.js. It could be used for calling a CMS, database, or other APIs directly from getServerSideProps. It is used to implement Server Side Rendering.

**Properties of getServerSideProps:**

It runs on every subsequent request in development as well as production mode.
Its code is excluded from the client-side bundle.
It can only be exported from page file.
When to use which data fetching method: If your page’s content is static or doesn’t change frequently then you should go for getStaticProps as it builds pages on build time hence increasing performance. If your page has dynamic routes then getStaticPaths should be used along with getStaticProps.

But if your website contains a page whose data changes very frequently then you must use getServerSideProps as it fetches fresh data on every request.

**Example:** We will build a simple Next Js application with three pages of albums, posts, and a users page with dynamic routes. All three pages will implement different data fetching methods. For this example, we will use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API to fetch random data.

Run the following command to create a new Next Js application (Make sure you have NPM and node installed) :

```bash
npm install react-router-dom
```

When we open our project in a code editor, we see a straightforward project structure. For the scope of this tutorial, we will only focus on /pages directory. We’ll first cleanup the /pages/index.js file. Then we’ll create two new pages **albums**, **posts**, and a dynamic routes page **/users/[id]**.

**Project Structure:**

![project strucure in VScode project](https://media.geeksforgeeks.org/wp-content/uploads/20220401164247/filestructure-184x300.png "project structure")

**/pages/index.js** – We’ll first cleanup the homepage (index), delete all boilerplate code and add links to all the pages we’ll be implementing for easier Navigation.

```jsx
import React from "react";
import Link from "next/link";
const Home = () => {
  // This is the home page which will
  // contain links to all other pages
  return (
    <>
      <h1>Hello Geeks</h1>
      <ul>
        <li>
          getStaticProps :<Link href={"/about"}>About Page</Link>
        </li>
        <li>
          getStaticPaths :<Link href={"/users/1"}>User 1</Link>
        </li>
        <li>
          getServerSideProps :<Link href={"/posts"}>Posts Page</Link>
        </li>
      </ul>
    </>
  );
};

export default Home;
```

```jsx
function blogs({ posts }: { posts: PostDataType[] }) {
  return (
    <div>
      <Head>
        <title>all blogs</title>
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <div className=" flex flex-col items-center  justify-center mb-10">
        <div>
          <h1 className="text-4xl mt-10 font-semibold tracking-wide">
            All Articles
          </h1>
        </div>

        <SearchForm />
      </div>

      <PostsGrid posts={posts} />
    </div>
  );
}
```

#### that is a note taken by converting the **h4** element to div in the mark down component

##### that is a note taken by converting the **h4** element to div in the mark down component

###### that is a note taken by converting the **h4** element to div in the mark down component
