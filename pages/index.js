import fs from "fs";
import path from "path";
import Head from "next/head";
import matter from "gray-matter";
import Post from "../components/post";
import { sortByDate } from "../utils";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Next-MDX static blog app</title>
        <meta name="description" content="Next MDX static blog app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid my-8 gap-6 mx-4 grid-cols-1 md:grid-cols-2">
        {posts.map((post, index) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  //get files from posts dir
  const files = fs.readdirSync(path.join("posts"));

  //get slug and frontmatter from posts
  const posts = files.map((filename) => {
    //create slug
    const slug = filename.replace(".md", "");
    //get frontmatter
    const mdWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");

    const { data: frontmatter } = matter(mdWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  // console.log(posts);
  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
