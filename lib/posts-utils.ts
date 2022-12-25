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

  const postData: postDataType = {
    slug: postSlug,

    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    imageURL: data.imageURL,
    author: data.author,
    tags: data.tags,
    isFeatured: data.isFeatured,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postsFiles = getPostsFiles();

  const allPosts = postsFiles.map((postFile) => {
    return readPostData(postFile);
  });

  const sortedPosts = allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
