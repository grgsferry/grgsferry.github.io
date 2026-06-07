/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Uncomment for static export (GitHub Pages)
  // basePath: '', // Set if deploying to a subpath
  images: {
    unoptimized: true, // Required for static export
  },
  experimental: {
    // View Transitions API support (Next.js 14+)
  },
};

module.exports = nextConfig;
