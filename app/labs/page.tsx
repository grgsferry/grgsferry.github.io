import Link from "next/link";
import loopData from "@/data/loop-files.json";

type Project = {
  name: string;
  description: string;
  photo: string;
  tags: string[];
  link: string;
};

const projects: Project[] = loopData as Project[];

export default function Labs() {
  return (
    <>
      <div className="flex justify-between">
        <p className="underline hover:font-bold hover:text-ds-green-2">
          <Link href="/">&lt; Back</Link>
        </p>
      </div>

      <hr className="h-px my-6 bg-gray-300 dark:bg-gray-700 border-0" />

      {projects.map((data) => (
        <Link
          key={data.name}
          href={data.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="container flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 outline outline-[1px] outline-gray-300 dark:outline-gray-700 rounded-sm my-4 hover:shadow-xl hover:outline-ds-green-2 transition-shadow duration-200">
            <img
              className="max-h-32 md:min-w-52 md:max-w-60 md:min-h-12 md:max-h-36 object-cover"
              src={data.photo}
              alt={data.name}
              loading="lazy"
              decoding="async"
            />
            <div className="flex-col space-y-1">
              <h2 className="font-bold text-md dark:text-gray-100">{data.name}</h2>
              <div className="flex flex-wrap gap-1">
                {data.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-ds-green-2 text-white px-2 py-0 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm">{data.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
