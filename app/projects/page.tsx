import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="flex justify-between">
        <p className="underline hover:font-bold hover:text-ds-green-2">
          <Link href="/">&lt; Back</Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <div className="my-6">
        <h1 className="font-bold text-2xl text-ds-green-2">Past Freelance Projects</h1>
        {[
          {
            id: 2,
            title: "Spatial-based demography data analysis",
            client: "Undisclosed",
            link: "/projects/#",
            industry: "Non-Governmental Organization",
            tools: ["Python", "Metabase", "PostgreSQL"],
            outputs: ["raw data", "dashboard", "report"],
            period: "1 month (Oct 2024 - Nov 2024)",
            summary: [
              "Extracted and processed publicly available demographic and socio-economic metrics",
              "Stored the data to a database",
              "Created a dashboard based on the stored data for the client to explore the data themselves",
              "Analyzed the data to derive insights on sub-regional level and gave recommendations for the client to effectively reach their goal using various statistics techniques",
            ],
          },
          {
            id: 1,
            title: "Inventory management dashboard and pipeline",
            client: "Eyelovin",
            link: "https://www.eyelovin.com/",
            industry: "Ecommerce, Fashion and Beauty",
            tools: ["Tableau", "Tableau Prep", "AWS", "MySQL"],
            outputs: ["data pipeline", "dashboard"],
            period: "4 months (Sep 2023 - Dec 2023)",
            summary: [
              "Determined the dashboard metrics and design by understanding client's needs",
              "Liased with client's software engineer to understand the complex data schema and multisource data problem",
              "Created a data pipeline and extract job from multiple data source that feeds into a SSOT table",
              "Created a dashboard that gives insights to inventory management, product cycle, and stock keeping",
            ],
          },
        ].map(({ id, title, client, link, industry, tools, outputs, period, summary }) => (
          <div key={id} className="flex flex-col gap-0.5 mt-6">
            <h2 className="text-md font-[700]">{title}</h2>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-[600] text-gray-500">Client:</span>
              {/* <p className="text-sm">{client}</p> */}
              <Link className="text-sm text-ds-green-2 underline hover:font-bold" href={link}>
                {client}
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-[600] text-gray-500">Industry:</span>
              <p className="text-sm">{industry}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-[600] text-gray-500">Period:</span>
              <p className="text-sm">{period}</p>
            </div>

            <div className="flex flex-wrap items-center gap-1">
              <span className="text-sm font-[600] text-gray-500">Tools:</span>
              {tools.map((tool) => (
                <span key={tool} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                  {tool}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-1">
              <span className="text-sm font-[600] text-gray-500">Outputs:</span>
              {outputs.map((output) => (
                <span key={output} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                  {output}
                </span>
              ))}
            </div>

            <span className="text-sm font-[600] text-gray-500">Summary:</span>
            <ul className="list-disc">
              {summary.map((item) => (
                <li key={item} className="mx-6 text-sm text-gray-600 dark:text-gray-100">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
