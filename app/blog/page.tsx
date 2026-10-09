import Link from "next/link";
import { getSortedPostsMetadata } from "@/lib/posts";

export const dynamic = "force-static";

export default function Blog() {
  const posts = getSortedPostsMetadata();

  return (
    <>
      <div className="flex justify-between">
        <p className="underline hover:font-bold hover:text-ds-green-2">
          <Link href="/">&lt; Back</Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <h1 className="font-bold text-2xl text-ds-green-2 mb-6">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-500">
          No posts yet. Add a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.md</code> file to the <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/posts</code> folder to get started.
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="p-4 outline outline-[1px] outline-gray-300 dark:outline-gray-700 rounded-sm hover:shadow-xl hover:outline-ds-green-2 transition-shadow duration-200 my-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h2 className="font-bold text-md dark:text-gray-100">{post.title}</h2>
                  <p className="text-xs text-gray-400 shrink-0">{post.date}</p>
                </div>
                {post.description && <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">{post.description}</p>}
                {(post.draft || (post.tags && post.tags.length > 0)) && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.draft && <span className="text-xs bg-gray-500 text-white px-2 py-0 rounded-full">Draft</span>}
                    {post.tags?.map((tag) => (
                      <span key={tag} className="text-xs bg-ds-green-2 text-white px-2 py-0 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
