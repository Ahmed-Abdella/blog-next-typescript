import Link from "next/link";
import PostsGrid from "../posts/posts-grid";

const featuredPosts = [
  {
    id: 1,
    imageURL:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80",
    title: "All you need to know about HTML forms",
    description:
      "HTML Form is a document that stores information of a user on a web server using interactive controls. An HTML form contains different kinds of information such as username, password, contact number, email id, etc.",
    author: "Ahmed Abdella",
    tags: ["react", "next", "typescript", "tailwind"],
  },
  {
    id: 2,
    imageURL:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "React hooks Rules and limits",
    description:
      "React Hooks have quickly become the recommended way to handle component local state and side effects in React function components.",
    author: "Ahmed Abdella",
    tags: ["react", "next", "typescript", "tailwind"],
  },
  {
    id: 3,
    imageURL:
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "How Javascript works behind the scenes",
    description:
      "JavaScript is a synchronous, single threaded language with specific order of execution. Everything inside a JavaScript function executes inside the Execution Context. ",
    author: "Ahmed Abdella",
    tags: ["react", "next", "typescript", "tailwind"],
  },
  {
    id: 4,
    imageURL:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1188&q=80",
    title: "Learn the basics of Git and GitHub",
    description:
      "Git is an open-source, version control tool created in 2005 by developers working on the Linux operating system; GitHub is a company founded in 2008 that makes tools which integrate with git.",
    author: "Ahmed Abdella",
    tags: ["react", "next", "typescript", "tailwind"],
  },
  {
    id: 5,
    imageURL:
      "https://images.unsplash.com/photo-1610986603166-f78428624e76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80",
    title: "How actually CSS works ",
    description:
      "After it parses the HTML document, all it stores the code in a DOM (Document Object Model). It describes the entire web page consisting of parents, children, and siblings.",
    author: "Ahmed Abdella",
    tags: ["react", "next", "typescript", "tailwind"],
  },

  {
    id: 6,
    imageURL:
      "https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "What Does Next.js add to React.js",
    description:
      "Next. js is a widely-used framework for building React applications that offer server-side rendering, automatic code-splitting, static exporting options, and easy production builds.",
    author: "Ahmed Abdella",
    tags: ["react", "next", "typescript", "tailwind"],
  },
];

function FeaturedPosts() {
  console.log("run in the browser");

  return (
    <>
      <div className="mt-16">
        <h2 className="mb-8 underline  decoration-2 decoration-gray-300  underline-offset-8 text-gray-900 text-2xl font-base ">
          Featured Articles
        </h2>
        <PostsGrid posts={featuredPosts} />

        <div className="mt-12  text-right mr-12">
          <Link
            href="/blogs"
            className="text-xl  text-cyan-500 hover:text-cyan-600 transition duration-300 underline"
          >
            All Articles &rarr;
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeaturedPosts;
