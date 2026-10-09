import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "posts");

// Drafts (`draft: true` in frontmatter) are visible in `next dev` but excluded from production builds.
const showDrafts = process.env.NODE_ENV !== "production";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = PostMeta & {
  contentHtml: string;
};

export function getAllPostSlugs(): { params: { slug: string } }[] {
  return getSortedPostsMetadata().map(({ slug }) => ({ params: { slug } }));
}

export function getSortedPostsMetadata(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames
    .filter((f) => f.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title ?? slug,
        date: data.date ?? "",
        description: data.description ?? "",
        tags: data.tags ?? [],
        draft: data.draft === true,
      } as PostMeta;
    })
    .filter((post) => showDrafts || !post.draft);

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  if (data.draft === true && !showDrafts) throw new Error(`Post "${slug}" is a draft`);

  const processedContent = await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    description: data.description ?? "",
    tags: data.tags ?? [],
    draft: data.draft === true,
    contentHtml,
  };
}
