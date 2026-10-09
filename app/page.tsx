import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl">Hello!</h1>
      <div className="mt-4">
        <p>
          I am <span className="font-bold">Gregorius Ferry</span>, a Data Analyst and Business Intelligence professional with extensive experience leveraging SQL, Python, and data visualization tools to drive decisions across multiple
          technology sectors. Currently I am:
        </p>
        <ul className="my-2 list-disc">
          <li className="ml-6">
            Leading the analytics for{" "}
            <Link className="text-ds-green-2 underline hover:font-bold" href={"https://www.gojek.io/"} target="_blank" rel="noopener noreferrer">
              {"Gojek"}
            </Link>
            , a major ride-hailing service in Southeast Asia
          </li>
          <li className="ml-6">
            Consulting as freelancer on specialized{" "}
            <Link className="text-ds-green-2 underline hover:font-bold" href={"/projects"}>
              {"data and IT projects"}
            </Link>
          </li>
          <li className="ml-6">
            Building{" "}
            <Link className="text-ds-green-2 underline hover:font-bold" href={"/labs"}>
              {"passion projects"}
            </Link>{" "}
            exploring datasets and analysis techniques
          </li>
        </ul>
        <p>Have an interesting project or an opportunity to collaborate? Let's connect.</p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <div className="flex justify-between">
        <ul className="flex items-center space-x-4">
          {[
            { href: "/resume", label: "Resume" },
            { href: "/projects", label: "Projects" },
            { href: "/labs", label: "Labs" },
            { href: "/blog", label: "Blog" },
          ].map(({ href, label }) => (
            <li key={href} className="underline hover:font-bold text-ds-green-2">
              <Link href={href}>{label}</Link>
            </li>
          ))}
        </ul>

        <ul className="flex items-center space-x-4">
          <li>
            <Link href="mailto:grgsferry@gmail.com" target="_blank" rel="noopener noreferrer">
              {/* Email icon inline SVG */}
              <svg className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/gregoriusferry/" target="_blank" rel="noopener noreferrer">
              <svg className="w-6 h-6 opacity-50 hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
