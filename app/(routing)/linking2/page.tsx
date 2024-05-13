"use client";

import Link from "next/link";
import { useRouter, redirect } from "next/navigation";

export default function Linking() {
  const posts = [
    {
      id: 1,
      title: "Hello",
      slug: "main",
    },
    {
      id: 2,
      title: "Hello 2",
      slug: "main2",
    },
    {
      id: 4,
      title: "Hello 3",
      slug: "main3",
    },
  ];

  const pathname = window.location.href;

  const router = useRouter();

  return (
    <div>
      {/* example 1 */}
      <div className="m-5 p-5">
        <h2>Example 1</h2>
        <Link href="/pages/dashboard">
          <p className="text-sky-400 hover:text-sky-600 hover:underline">
            This is the link
          </p>
        </Link>
      </div>

      {/* example 2 */}
      <ul className="m-5 p-5">
        <h2>Example 2</h2>
        {posts.map((post) => (
          <li
            key={post.id}
            className="underline hover:text-sky-500 text-red-400"
          >
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      {/* example 3 */}
      <div className="m-5 p-5">
        <h2>Example 3</h2>

        <h2
          className={`hover:underline cursor-pointer ${
            pathname === "/linking2" ? "text-white" : "text-violet-500"
          }`}
          onClick={() => {
            console.log(pathname);
            router.push("linking");
          }}
        >
          Link Change the color
        </h2>
      </div>
    </div>
  );
}
