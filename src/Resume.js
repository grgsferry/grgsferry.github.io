import "./fonts.css";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <>
      <div class="flex justify-between">
        <p class="underline hover:font-bold hover:text-ds-green-2">
          <Link to="/">&lt; Back</Link>
        </p>
      </div>

      <hr class="h-px my-6 bg-gray-300 border-0 dark:bg-gray-300" />

      <div class="my-6">
        <h1 class="font-bold text-2xl text-ds-green-2">Work Experiences</h1>
        <div class="mt-4">
          <div class="flex flex-col md:flex-row justify-between">
            <h2 class="text-md font-[700]">Strategy & Planning at Gojek</h2>
            <p class="text-xs">May 2024 - Present</p>
          </div>
          <p class="text-sm mt-1">Driving supply analyses and experimentation for Gojek Strategy & Planning team, impacting growth and market leadership in Indonesia, Singapore, and Vietnam.</p>
        </div>
        <div class="mt-4">
          <div class="flex flex-col md:flex-row justify-between">
            <h2 class="text-md font-[700]">Budgeting & Planning at ShopeeFood</h2>
            <p class="text-xs">May 2023 - Apr 2024</p>
          </div>
          <p class="text-sm mt-1">Led ShopeeFood service quality, optimizing completion time, balancing demand and supply, and conducting data analysis for reliability improvement.</p>
        </div>
        <div class="mt-4">
          <div class="flex flex-col md:flex-row justify-between">
            <h2 class="text-md font-[700]">Data Analyst at Inspigo</h2>
            <p class="text-xs">Dec 2021 - May 2023</p>
          </div>
          <p class="text-sm mt-1">Conducted data analysis, communicated insights on product and marketing metrics, led data projects, implemented dashboards, and enhanced activation and engagement rates.</p>
        </div>
        <div class="mt-4">
          <div class="flex flex-col md:flex-row justify-between">
            <h2 class="text-md font-[700]">Business Analyst at DBS Bank</h2>
            <p class="text-xs">Jan 2021 - Dec 2021</p>
          </div>
          <p class="text-sm mt-1">Generated reports for DBS digital banking, covering transactions and user cohorts. Planned, implemented, and maintained dashboards for business and product teams.</p>
        </div>
      </div>

      <div class="my-12">
        <h1 class="font-bold text-2xl text-ds-green-2">Education</h1>
        <div class="mt-4">
          <div class="flex flex-col md:flex-row justify-between">
            <h2 class="text-md font-[700]">Bandung Institute of Technology</h2>
            <p class="text-xs">Aug 2015 - Oct 2019</p>
          </div>
          <p class="text-sm">Bachelor of Science, Civil Engineering</p>
          <p class="text-sm">Elective courses in transportation engineering</p>
        </div>
      </div>

      <div class="my-12">
        <h1 class="font-bold text-2xl text-ds-green-2">Others</h1>
        <div class="mt-4">
          <h2 class="text-md font-[700]">Skills</h2>
          <p class="text-sm">
            data analysis, data visualization, dashboarding, data mining, data scraping, data, cleaning, data modeling, statistics, statistical analysis, A/B testing, root cause analysis, presentation, reporting, graphic design, UI/UX
            design, prototyping, project management
          </p>
        </div>
        <div class="mt-4">
          <h2 class="text-md font-[700]">Programming Language</h2>
          <ul class="text-sm list-disc">
            <li class="ml-6">SQL : PostgreSQL, MySQL, SQLite, Presto</li>
            <li class="ml-6">Python : pandas, NumPy, Matplotlib, seaborn, Plotly, scikit-learn, Flask, Streamlit, Beautiful Soup, Scrapy</li>
          </ul>
        </div>
        <div class="mt-4">
          <h2 class="text-md font-[700]">Apps</h2>
          <ul class="text-sm list-disc">
            <li class="ml-6">Data visualiation : Google Data Studio / Looker Studio, Tableau</li>
            <li class="ml-6">Design : Adobe Photoshop, Adobe Illustrator, Figma</li>
            <li class="ml-6">Office suite : Microsoft Word, Excel, Powerpoint, Google Docs, Sheets, Slides</li>
            <li class="ml-6">Project management : Notion, Asana, ClickUp, Trello, FigJam, Miro</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Resume;
