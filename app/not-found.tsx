import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="font-bold text-4xl mb-4 text-gray-600 dark:text-gray-300">404</h1>
      <p className="mb-6 text-gray-600 dark:text-gray-300">Page not found.</p>
      <p>
        <Link className="link-hl" href="/">&lt; Go home</Link>
      </p>
    </div>
  );
}
