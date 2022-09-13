import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className="mx-4 my-8">
      <Link href={"/"}>
        <a className="px-2 py-1 mb-4 text-gray-700 bg-amber-400 focus:border-2 rounded-lg">
          go back
        </a>
      </Link>
      <div className="">
        <h1 className="text-2xl font-semibold my-2 text-gray-700 ">{title}</h1>
        <div className="text-gray-500 text-sm">Posted on {date} </div>
        <img src={cover_image} alt="" className="rounded-lg w-full" />
        <div className="my-2 article">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const mdWithMeta = fs.readFileSync(path.join("posts", slug + ".md"), "utf-8");

  const { data: frontmatter, content } = matter(mdWithMeta);

  return {
    props: { frontmatter, slug, content },
  };
}
