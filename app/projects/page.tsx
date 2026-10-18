import Link from "next/link";

export default function Projects() {
  return (
    <>
      <div className="flex justify-between">
        <p>
          <Link className="text-ds-green-2 link-hl" href="/">
            &lt; Back
          </Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      <div className="my-6">
        <h1 className="font-bold text-2xl text-ds-green-2">Selected Projects</h1>
        {[
          {
            id: 3,
            title: "End-to-End Business Intelligence Solution and Conversational AI Agent Implementation",
            client: "Union Group",
            link: "https://uniongroupjakarta.com/",
            industry: "Food and Beverage",
            tools: ["GCP", "BigQuery", "Google Data Studio", "Python"],
            outputs: ["dashboard", "AI implementation", "data warehouse", "pipeline"],
            period: "Ongoing (Sep 2026 - Present)",
            summary: [
              {
                label: "BI Solution Design & Process Optimization",
                text: "Consulted stakeholders to address reporting and operational inefficiencies, designed BI solutions, and delivered data products that improved efficiency by up to 15x, reducing turnaround time by 93%.",
              },
              {
                label: "Data Infrastructure & Analytics Engineering",
                text: "Built an end-to-end Google Cloud Platform (GCP) data ecosystem spanning data warehousing, cloud storage, API-driven services, orchestration, schema design, BI dashboards, and a conversational AI agent (text-to-SQL). Integrated data across POS platforms, CRM systems, SAP ERP, and operational tools.",
              },
              {
                label: "Cross-Functional Stakeholder Management",
                text: "Bridged business and technical teams across engineering, finance, business leadership, and operations, translating business requirements into scalable technical solutions.",
              },
            ],
          },
          {
            id: 2,
            title: "Data Scraper, Data Transformation, and Spatial-Based Dashboard",
            client: "Confidential Client",
            link: null,
            industry: "Consulting, Marketing",
            tools: ["Python", "Metabase", "PostgreSQL"],
            outputs: ["raw data", "dashboard", "report"],
            period: "1 month (Oct 2024 - Nov 2024)",
            summary: [
              {
                label: "Data Pipeline Development",
                text: "Developed automated scrapers to extract public data from national statistics websites and PDF documents, then cleaned and transformed raw data into structured, analysis-ready datasets.",
              },
              {
                label: "Solution Architecture & Delivery",
                text: "Designed and deployed a hosted PostgreSQL database and Metabase dashboards, structuring the schema and visualizations around recurring user questions to enable self-service data exploration.",
              },
              {
                label: "Analytics & Strategic Recommendations",
                text: "Applied statistical methods to analyze subregional data, uncover socioeconomic patterns, and develop recommendations to help the client prioritize its outreach strategy.",
              },
            ],
          },
          {
            id: 1,
            title: "Inventory Management Dashboard and Pipeline",
            client: "Eyelovin",
            link: "https://www.eyelovin.com/",
            industry: "Ecommerce, Fashion and Beauty",
            tools: ["Tableau", "Tableau Prep", "MySQL", "AWS"],
            outputs: ["data pipeline", "dashboard"],
            period: "4 months (Sep 2023 - Dec 2023)",
            summary: [
              {
                label: "Business Process Analysis",
                text: "Consulted stakeholders to understand inventory management, product lifecycles, and stockkeeping processes, identifying key metrics to monitor and improve daily operations.",
              },
              {
                label: "BI Solution Development",
                text: "Designed and implemented Tableau Cloud dashboards to support operational monitoring and performance tracking, addressing complex data schemas and integrating data from multiple sources.",
              },
              {
                label: "Data Preparation & Orchestration",
                text: "Built data preparation and orchestration workflows using Tableau Prep to consolidate multisource data and support reliable, consistent dashboard reporting.",
              },
            ],
          },
        ].map(({ id, title, client, link, industry, tools, outputs, period, summary }) => (
          <div key={id} className="flex flex-col gap-0.5 mt-5 pt-5 first:mt-6 first:pt-0 border-t border-gray-300 dark:border-gray-700 first:border-t-0">
            <h2 className="text-base font-bold">{title}</h2>

            <div className="flex items-start">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 w-[3.75rem] shrink-0 mr-3">Client</span>
              {link ? (
                <Link className="text-sm text-ds-green-2 link-hl" href={link} target="_blank" rel="noopener noreferrer">
                  {client}
                </Link>
              ) : (
                <p className="text-sm">{client}</p>
              )}
            </div>

            <div className="flex items-start">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 w-[3.75rem] shrink-0 mr-3">Industry</span>
              <p className="text-sm">{industry}</p>
            </div>
            <div className="flex items-start">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 w-[3.75rem] shrink-0 mr-3">Period</span>
              <p className="text-sm">{period}</p>
            </div>

            <div className="flex items-start">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 w-[3.75rem] shrink-0 mr-3">Tools</span>
              <div className="flex flex-wrap gap-1">
                {tools.map((tool) => (
                  <span key={tool} className="text-xs bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 rounded-full text-gray-800 dark:text-gray-100">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 w-[3.75rem] shrink-0 mr-3">Outputs</span>
              <div className="flex flex-wrap gap-1">
                {outputs.map((output) => (
                  <span key={output} className="text-xs bg-gray-100 dark:bg-gray-800 px-2.5 py-0.5 rounded-full text-gray-800 dark:text-gray-100">
                    {output}
                  </span>
                ))}
              </div>
            </div>

            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Summary</span>
            <ul className="list-disc ml-5 space-y-1">
              {summary.map(({ label, text }) => (
                <li key={label} className="text-sm">
                  <span className="font-semibold">{label}:</span> {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
