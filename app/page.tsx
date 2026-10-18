import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl sm:text-4xl">Hello!</h1>
      <div className="mt-4 text-sm sm:text-base">
        <p>
          I am <span className="font-bold">Gregorius Ferry</span>, a data professional with 6 years of experience leveraging SQL, Python, and various tools implementing end-to-end data products that drive strategy and decisions across
          multiple technology sectors. Currently I am:
        </p>
        <ul className="my-2 list-disc">
          <li className="ml-6">
            Leading the analytics for{" "}
            <Link className="text-ds-green-2 link-hl" href={"https://www.gojek.com/"} target="_blank" rel="noopener noreferrer">
              {"Gojek"}
            </Link>
            , a major ride-hailing service in Southeast Asia
          </li>
          <li className="ml-6">
            Consulting as freelancer on specialized{" "}
            <Link className="text-ds-green-2 link-hl" href={"/projects"}>
              {"data and IT projects"}
            </Link>
          </li>
          <li className="ml-6">
            Implementing technologies on various{" "}
            <Link className="text-ds-green-2 link-hl" href={"/labs"}>
              {"passion projects"}
            </Link>
          </li>
        </ul>
        <p>Have an interesting project or an opportunity to collaborate? Let's connect!</p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <div className="flex flex-wrap justify-between gap-x-4 gap-y-4">
        <ul className="flex items-center gap-x-4 text-sm sm:text-base">
          {[
            { href: "/resume", label: "Resume" },
            { href: "/projects", label: "Projects" },
            { href: "/labs", label: "Labs" },
            { href: "/blog", label: "Blog" },
          ].map(({ href, label }) => (
            <li key={href}>
              <Link className="text-ds-green-2 link-hl" href={href}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center gap-x-4">
          <li>
            <Link href="mailto:grgsferry@gmail.com" target="_blank" rel="noopener noreferrer">
              {/* Email icon inline SVG */}
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/gregoriusferry/" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/grgsferry" target="_blank" rel="noopener noreferrer">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.8 1.18 1.82 1.18 3.08 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
