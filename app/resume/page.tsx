import Link from "next/link";

export default function Resume() {
  return (
    <>
      <div className="flex justify-between">
        <p className="underline hover:font-bold hover:text-ds-green-2">
          <Link href="/">&lt; Back</Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <div className="my-6">
        <h1 className="font-bold text-2xl text-ds-green-2">Work Experiences</h1>
        {[
          {
            company: "Gojek",
            title: "Analytics & Insights Manager",
            period: "Oct 2025 - Present",
            desc: "Led cross-functional initiatives to drive GoRide sustainable market growth through data standardization, demand optimization, and actionable business insights.",
          },
          {
            company: "",
            title: "Senior Strategic Insights",
            period: "Jun 2024 - Sep 2025",
            desc: "Driving supply analyses and experimentation for Gojek Strategy & Planning team, impacting growth and market leadership in Indonesia, Singapore, and Vietnam.",
          },
          {
            company: "ShopeeFood",
            title: "Associate, Platform Reliability",
            period: "May 2023 - Apr 2024",
            desc: "Led ShopeeFood service quality, optimizing completion time, balancing demand and supply, and conducting data analysis for reliability improvement.",
          },
          {
            company: "Inspigo",
            title: "Data Analyst",
            period: "Dec 2021 - Jun 2023",
            desc: "Conducted data analysis, communicated insights on product and marketing metrics, led data projects, implemented dashboards, and enhanced activation and engagement rates.",
          },
          {
            company: "DBS Bank",
            title: "Analyst",
            period: "Jan 2021 - Dec 2021",
            desc: "Generated reports for DBS digital banking, covering transactions and user cohorts. Planned, implemented, and maintained dashboards for business and product teams.",
          },
        ].map(({ company, title, period, desc }) => (
          <div key={title} className="mt-4">
            <h2 className="text-md font-[700]">{company}</h2>
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-sm font-[500] mt-1">{title}</h2>
              <p className="text-xs">{period}</p>
            </div>
            <p className="text-sm mt-1">{desc}</p>
          </div>
        ))}
      </div>

      <div className="my-12">
        <h1 className="font-bold text-2xl text-ds-green-2">Education</h1>
        <div className="mt-4">
          <div className="flex flex-col md:flex-row justify-between">
            <h2 className="text-md font-[700]">Bandung Institute of Technology</h2>
            <p className="text-xs">Aug 2015 - Oct 2019</p>
          </div>
          <p className="text-sm">Bachelor of Science, Civil Engineering</p>
          <p className="text-sm">Elective courses in transportation engineering</p>
        </div>
      </div>

      <div className="my-12">
        <h1 className="font-bold text-2xl text-ds-green-2">Skills and Tools</h1>

        <div className="mt-4">
          <h2 className="text-sm font-[500] mb-2">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {[
              "data analysis",
              "descriptive statistics",
              "inferential statistics",
              "experimentation",
              "causal inference",
              "modeling and simulation",
              "machine learning",
              "root cause analysis",
              "data visualization",
              "dashboard development",
              "data mining",
              "data scraping",
              "data cleaning",
              "data modeling",
            ].map((skill) => (
              <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-[500] mb-2">Programming Languages</h2>
          <div className="flex flex-wrap gap-1">
            {["SQL", "Python", "JavaScript", "TypeScript"].map((skill) => (
              <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-[500] mb-2">Databases</h2>
          <div className="flex flex-wrap gap-1">
            {["BigQuery", "MySQL", "PostgreSQL", "SQL Server", "SQLite", "Presto", "MaxCompute"].map((skill) => (
              <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-[500] mb-2">Dashboard & BI Tools</h2>
          <div className="flex flex-wrap gap-1">
            {["Data Studio", "Tableau", "Power BI", "Quick BI", "Metabase", "Redash"].map((skill) => (
              <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-[500] mb-2">Python Libraries</h2>
          <div className="flex flex-wrap gap-1">
            {["pandas", "NumPy", "Matplotlib", "seaborn", "Plotly", "scikit-learn", "scipy", "Streamlit", "Beautiful Soup", "Scrapy"].map((skill) => (
              <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-sm font-[500] mb-2">Others</h2>
          <div className="flex flex-wrap gap-1">
            {["Airflow", "Git", "Docker"].map((skill) => (
              <span key={skill} className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
