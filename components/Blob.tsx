export default function Blob() {
  return (
    <div className="relative top-0 left-0 right-0 h-64 flex items-center justify-center px-16 pointer-events-none">
      <div className="relative w-full max-w-lg">
        <div className="absolute left-12 md:left-28 w-40 h-40 bg-ds-yellow dark:bg-ds-purple rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob" />
        <div className="absolute right-12 md:right-28 w-40 h-40 bg-ds-green-1 dark:bg-ds-blue rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute left-18 md:left-40 w-40 h-40 bg-ds-green-2 dark:bg-ds-green-2 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>
    </div>
  );
}
