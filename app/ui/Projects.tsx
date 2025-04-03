import Image from "next/image";
import { BoltIcon, EyeIcon, CodeBracketIcon } from "@heroicons/react/24/solid";


export function Project({
  image,
  title,
  description,
  liveLink,
  githubLink,
}: {
  image: string | null;
  title: string;
  description: string;
  liveLink: string;
  githubLink: string;
}) {
  return (
    <div id="#projects" className="relative group p-6 flex flex-col items-center w-4/5 sm:w-[300px] bg-gray-50 border rounded-lg shadow-md hover:shadow-lg transition-shadow transform sm:hover:scale-105">
      {/* Image with Hover Overlay */}
      <div className="relative w-[200px] h-[110px] sm:w-[250px] sm:h-[160px] rounded-lg border mb-6 overflow-hidden">
        {image ? (
          <>
            {/* Image */}
            <Image
              alt={title}
              src={image}
              className="rounded-lg object-cover"
              fill={true}
            />
            {/* Hover Overlay */}

            {(liveLink !== "" || githubLink !== "") && (
              <div className="absolute inset-0 bg-black bg-opacity-85 hidden sm:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Eye Icon */}
                {liveLink !== "" && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-transform transform hover:scale-110"
                  >
                    <EyeIcon className="w-6 h-6 text-white" />
                  </a>
                )}

                {/* GitHub Icon */}
                {githubLink !== "" && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-transform transform hover:scale-110"
                  >
                    <CodeBracketIcon className="w-6 h-6 text-white" />
                  </a>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="relative w-full h-full flex items-center justify-center bg-yellow-300 rounded-lg overflow-hidden sm:group">
            {/* Default Bolt Icon */}
            <BoltIcon width={72} height={72} color="white" />

            {/* Hover Overlay */}
            {(liveLink !== "" || githubLink !== "") && (
              <div className="absolute inset-0 bg-black bg-opacity-85 hidden sm:flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {/* Eye Icon */}
                {liveLink !== "" && (
                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-transform transform hover:scale-110"
                  >
                    <EyeIcon className="w-6 h-6 text-white" />
                  </a>
                )}

                {/* GitHub Icon */}
                {githubLink !== "" && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full hover:bg-gray-700 transition-transform transform hover:scale-110"
                  >
                    <CodeBracketIcon className="w-6 h-6 text-white" />
                  </a>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Title and Description */}
      <p className="mb-3 font-bold text-xl text-gray-800">{title}</p>
      <p className="text-center text-lg text-gray-600">{description}</p>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      image: "/BarcodeScanner.jpg",
      title: "Barcode Scanning App",
      description:
        "A full stack solution to a full stack of problems -- this app tackles warehouse woes with the power of Firebase and React Native.",
      liveLink: "",
      githubLink: "",
    },
    {
      title: "Invoice Dashboard",
      description:
        "A dashboard I use for my personal business to keep track of customers and invoices. Speedy, minimal, and oh-so effective.",
      liveLink: "",
      githubLink: "https://github.com/jhaqq/freelanceDashboard",
    },
    {
      image: "/FineDining.png",
      title: "Fine Dining Landing Site",
      description:
        "Brought to life from an existing design file, this site doesn't hold back from trying to catch your eye.",
      liveLink: "https://finedining-site.netlify.app/",
      githubLink: "",
    },
    {
      image: "/Ecommerce.png",
      title: "E-Commerce Site",
      description:
        "Clean, yet punchy -- this site comes with all the bells and whistles including Stripe integration for payments.",
      liveLink: "https://git-ecommerce.vercel.app/",
      githubLink: "https://github.com/jhaqq/ecommerce",
    },
    {
      image: "/Portfolio2.png",
      title: "Portfolio",
      description:
        "Well, there isn't much to say... you're already here! A super minimal design allows my experience and projects to take the lime light.",
      liveLink: "https://www.jacobhaqq.com",
      githubLink: "https://github.com/jhaqq/portfolio",
    },
    {
      image: "/Cat.gif",
      title: "Cat Generator",
      description:
        "Where it all began. With the press of a button, generate a random cat!",
      liveLink: "",
      githubLink: "https://github.com/jhaqq/catgenerator",
    },
  ];

  return (
    <div className="min-h-screen py-10 px-4 sm:px-8 w-full bg-gradient-to-b from-yellow-200 to-yellow-50 flex justify-center items-center relative">
      {/* Decorative Background Elements */}
      <div className="absolute w-10 h-10 sm:w-16 sm:h-16 bg-yellow-400 rounded-full top-6 left-6 animate-pulse"></div>
      <div className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-yellow-300 rounded-full bottom-6 right-12 animate-bounce"></div>

      <div className="flex grow flex-col items-center justify-between relative">
        {/* Section Title */}
        <h1 className="font-extrabold text-5xl sm:text-6xl lg:text-7xl text-center text-gray-800 leading-tight mb-16">
          Projects
        </h1>

        {/* Projects Display */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-12 max-w-6xl">
          {projects.map((project, index) => (
            <Project
              key={index}
              image={project.image ? project.image : null}
              title={project.title}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

