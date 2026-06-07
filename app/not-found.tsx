import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-12">
      <h1 className="font-bold text-4xl text-gray-300 mb-4">404</h1>
      <p className="text-gray-500 mb-6">Page not found.</p>
      <p className="underline hover:font-bold hover:text-ds-green-2">
        <Link href="/">&lt; Go home</Link>
      </p>
    </div>
  );
}
