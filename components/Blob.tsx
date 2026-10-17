export default function Blob() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/2 left-1/2 scale-50 sm:scale-75 md:scale-100">
        <div className="absolute -ml-[26rem] -mt-[23rem] w-[34rem] h-[34rem] bg-[#FCE858] dark:bg-ds-purple rounded-full mix-blend-normal dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-70 animate-blob will-change-transform" />
        <div className="absolute -ml-[8rem] -mt-[20rem] w-[34rem] h-[34rem] bg-[#91DB80] dark:bg-ds-blue rounded-full mix-blend-normal dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-70 animate-blob will-change-transform animation-delay-2000" />
        <div className="absolute -ml-[17rem] -mt-[9rem] w-[34rem] h-[34rem] bg-[#50BDA2] dark:bg-[#22A884] rounded-full mix-blend-normal dark:mix-blend-screen filter blur-3xl opacity-50 dark:opacity-70 animate-blob will-change-transform animation-delay-4000" />
      </div>
    </div>
  );
}
