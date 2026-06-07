import Link from "next/link";
import { getPostData, getAllPostSlugs } from "@/lib/posts";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return getAllPostSlugs().map((p) => p.params);
}

export async function generateMetadata({ params }: Props) {
  try {
    const post = await getPostData(params.slug);
    return { title: `${post.title} — Gregorius Ferry` };
  } catch {
    return { title: "Post not found" };
  }
}

export default async function BlogPost({ params }: Props) {
  let post;
  try {
    post = await getPostData(params.slug);
  } catch {
    notFound();
  }

  return (
    <>
      <div className="flex justify-between">
        <p className="underline hover:font-bold hover:text-ds-green-2">
          <Link href="/blog">&lt; Back to Blog</Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <article>
        <h1 className="font-bold text-2xl text-gray-800 dark:text-gray-100 mb-1">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <p className="text-xs text-gray-400">{post.date}</p>
          {post.tags &&
            post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-ds-green-2 text-white px-2 py-0 rounded-full">
                {tag}
              </span>
            ))}
        </div>

        <div className="prose" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </>
  );
}
