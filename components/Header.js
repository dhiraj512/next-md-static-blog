import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="sticky top-0">
        <div className="bg-amber-300 w-full rounded-b-md h-12 items-center justify-between flex px-3">
          <Link href="/" passHref>
            <h2 className=" cursor-pointer">Static Blog</h2>
          </Link>
          <Link href="https://github.com/dhiraj512/next-md-static-blog">
            <a target="_blank">
              <img className="h-6 w-6 " src="/github.svg" alt="" />
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
