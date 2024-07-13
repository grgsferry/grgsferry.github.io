import "./fonts.css";
import emailIcon from "./email_icon_2.svg";
import linkedinIcon from "./iconmonstr-linkedin-3.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1 class="font-bold text-4xl">Hello!</h1>
      <div class="mt-4">
        <p>
          My name is <span class="font-bold">Gregorius Ferry</span>. I am a data analyst and business intelligence expert with years of professional experience in SQL, Python programming, and various data visualization and dashboarding
          tools. Currently I am:
        </p>
        <ul class="my-2 list-disc">
          <li class="ml-6">Working in one of Indonesia's largest tech company</li>
          <li class="ml-6">Freelancing on data related projects</li>
          <li class="ml-6">Developing data visualizations that piqued my interests</li>
        </ul>
        <p>Contact me if you have any interesting opportunity for us to collaborate!</p>
      </div>
      <hr class="h-px my-6 bg-gray-300 border-0 dark:bg-gray-300" />
      <div class="flex justify-between">
        <ul class="flex items-center space-x-4">
          <li class="underline hover:font-bold hover:text-ds-green-2">
            <Link to="/projects">Projects</Link>
          </li>
          <li class="underline hover:font-bold hover:text-ds-green-2">
            <Link to="/resume">Resume</Link>
          </li>
          <li class="underline hover:font-bold hover:text-ds-green-2">
            <Link to="https://medium.com/@grgsferry" target="_blank" rel="noopener noreferrer">
              Blog
            </Link>
          </li>
        </ul>
        <ul class="flex items-center space-x-4">
          <li>
            <Link to="mailto:grgsferry@gmail.com" target="_blank" rel="noopener noreferrer">
              <img class="w-6 max-h-6 opacity-50" src={emailIcon} alt="logo" />{" "}
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/gregoriusferry/" target="_blank" rel="noopener noreferrer">
              <img class="w-6 max-h-5 opacity-50" src={linkedinIcon} alt="logo" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
