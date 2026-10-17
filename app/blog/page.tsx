import Link from "next/link";
import { getSortedPostsMetadata } from "@/lib/posts";

export const dynamic = "force-static";

export default function Blog() {
  const posts = getSortedPostsMetadata();

  return (
    <>
      <div className="flex justify-between">
        <p>
          <Link className="link-hl" href="/">&lt; Back</Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <h1 className="font-bold text-2xl text-ds-green-2 mb-6">Blog</h1>

      {posts.length === 0 ? (
        <p className="text-sm text-gray-600 dark:text-gray-300">
          No posts yet. Add a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">.md</code> file to the <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">/posts</code> folder to get started.
        </p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <div className="p-4 outline outline-[1px] outline-gray-300 dark:outline-gray-700 rounded-sm hover:shadow-xl hover:outline-ds-green-2 dark:hover:outline-ds-green-2 dark:hover:shadow-[0_0_8px_rgba(52,211,160,0.6),0_0_28px_rgba(52,211,160,0.45)] transition-[box-shadow,outline-color] duration-200 my-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                  <h2 className="font-bold text-base dark:text-gray-100">{post.title}</h2>
                  <p className="text-xs shrink-0 text-gray-600 dark:text-gray-300">{post.date}</p>
                </div>
                {post.description && <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">{post.description}</p>}
                {(post.draft || (post.tags && post.tags.length > 0)) && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.draft && <span className="text-xs bg-gray-500 text-white px-2 py-0 rounded-full">Draft</span>}
                    {post.tags?.map((tag) => (
                      <span key={tag} className="text-xs bg-ds-green-2 text-white dark:text-gray-900 px-2 py-0 rounded-full">
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
