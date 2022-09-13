import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="p-4 border-2 bg-slate-100 rounded-md">
      <img
        alt=""
        src={post.frontmatter.cover_image}
        className="w-full rounded-md"
      />
      <div className="bg-gray-200 p-1 rounded-md my-1">
        Posted on {post.frontmatter.date}
      </div>
      <h3 className="text-xl font-semibold mt-4 text-gray-700">
        {post.frontmatter.title}
      </h3>
      <p className="text-base font-medium mb-4 text-gray-500">
        {post.frontmatter.excerpt}
      </p>
      <Link href={`/blog/${post.slug}`}>
        <a className="px-2 py-1 bg-amber-400 focus:border-2 text-gray-700 rounded-lg ">
          Read more
        </a>
      </Link>
    </div>
  );
}
