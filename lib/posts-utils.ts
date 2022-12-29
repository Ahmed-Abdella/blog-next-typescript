import fs from "fs";
import path from "path";
import { postDataType, postMetadataType } from "../interfaces/post-data";

import matter from "gray-matter";
import postType from "../interfaces/post-type";

const postsDir = path.join(process.cwd(), "data_source");

export function getPostsFiles() {
  return fs.readdirSync(postsDir);
}

export function readPostData(postIdentifier: string): postDataType {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //to remove file extension
  const filePath = path.join(postsDir, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const notComletedPost = {
    slug: postSlug,

    title: "not comlete",
    date: "N/A",
    excerpt: "not complete",
    imageURL:
      "https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    author: "N/A",
    authorImage: "N/A",
    tags: ["N/A"],
    isFeatured: false,
    content: "N/A",
    completed: false,
  };

  function isAPost(obj: any): obj is postMetadataType {
    return (
      "title" in obj &&
      "date" in obj &&
      "excerpt" in obj &&
      "imageURL" in obj &&
      "author" in obj &&
      "authorImage" in obj &&
      "tags" in obj &&
      "isFeatured" in obj &&
      "completed" in obj
    );
  }

  const postData: postDataType = isAPost(data)
    ? {
        slug: postSlug,

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
      }
    : notComletedPost;

  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();

  //   const allPosts = postsFiles.map((postFile) => {
  //     return readPostData(postFile);
  //   });

  const allPosts = postsFiles
    .map((postFile) => {
      return readPostData(postFile);
    })
    .filter((post) => post.completed);

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
