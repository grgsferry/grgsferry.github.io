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
  trailingSlash: true, // Forces Next.js to fix page routing paths for static hosting
};

module.exports = nextConfig;
