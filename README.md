# Gregorius Ferry — Portfolio (Next.js)

## Setup

```bash
npm install
npm run dev
```

## Blog

To publish a new post, add a `.md` file to the `/posts` folder:

```
/posts/my-new-post.md
```

Each file needs a frontmatter block at the top:

```markdown
---
title: "Your Post Title"
date: "2024-12-01"
description: "A short one-liner shown on the blog listing page."
tags: ["Tag1", "Tag2"]
---

Your content here. Supports full Markdown:
- **bold**, _italic_
- Code blocks
- Tables (via GFM)
- Images
```

The slug comes from the filename: `my-new-post.md` → `/blog/my-new-post`.

Posts are sorted by `date` descending. Tags and description are optional.

## Deployment

### Vercel (recommended)
Push to GitHub and connect to Vercel. Zero config needed.

### GitHub Pages (static export)
1. Uncomment `output: 'export'` in `next.config.js`
2. Set `basePath` if deploying to a subpath (e.g. `/grgsferry`)
3. `npm run build` → deploy the `/out` folder

Note: Static export doesn't support server-side features. The blog markdown reading happens at **build time** via `generateStaticParams`, so it works fine with static export.

## Project Structure

```
/app
  layout.tsx          ← shared shell + page transition wrapper
  page.tsx            ← Home (/)
  /projects/page.tsx  ← Projects (/projects)
  /resume/page.tsx    ← Resume (/resume)
  /blog
    page.tsx          ← Blog index (/blog)
    /[slug]/page.tsx  ← Individual post (/blog/[slug])
/components
  Blob.tsx            ← animated background
  PageTransition.tsx  ← framer-motion fade+slide wrapper
/lib
  posts.ts            ← markdown file reader (gray-matter + remark)
/posts
  *.md                ← YOUR BLOG POSTS GO HERE
/data
  loop-files.json     ← project cards data
```
