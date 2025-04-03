"use client";

import React, { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import clsx from "clsx";

function Skill({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="rounded-full p-6 bg-gradient-to-b from-gray-100 to-gray-200 shadow-lg mb-3 transition-transform transform hover:scale-105">
        <Image
          src={image}
          alt={`${name} icon`}
          height={64}
          width={64}
          className="rounded-full w-8 h-8 sm:w-16 sm:h-16"
        />
      </div>
      <p className="text-lg font-bold text-gray-700">{name}</p>
    </div>
  );
}

export default function Experience() {
  const [jobIndex, setJobIndex] = useState(0);
  const [active, setActive] = useState("skills");
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const skills = [
    { image: "/react.png", name: "React" },
    { image: "/javascript.png", name: "Javascript" },
    { image: "/css.png", name: "CSS" },
    { image: "/typescript.png", name: "Typescript" },
    { image: "/git.png", name: "Git" },
    { image: "/html.png", name: "HTML" },
  ];

  const jobs = [
    {
      year: "2022",
      title: "Software Development Intern",
      responsibilities: [
        "Assisted in company migration to modern browsers in Java",
        "Learned and made use of the Object-Oriented Programming style to increase code readability and future development speeds.",
      ],
    },
    {
      year: "2023 - 2024",
      title: "Lead Software Developer",
      responsibilities: [
        "Coded complex programs in Javascript to provide quick access to critical information, allowing important decisions to be made using the most current data.",
        "Overhauled logic of third-party software to decrease manual workload by upwards of 80%.",
      ],
    },
    {
      year: "2025",
      title: "Freelance Software Developer",
      responsibilities: [
        "Collaborate with clients to deliver custom web and mobile applications.",
        "Develop a reputation for quick turnarounds and high-quality solutions, helping to maintain a high percentage of repeat business.",
      ],
    },
  ];

  useEffect(() => {
    // Function to handle screen width change
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1536);
    };

    // Set initial screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-gradient-to-b from-yellow-200 to-yellow-50 relative">
      {/* Decorative Elements */}
      <div className="absolute w-12 h-12 bg-yellow-400 rounded-full top-8 left-8 animate-pulse"></div>
      <div className="absolute w-20 h-20 bg-yellow-300 rounded-full bottom-8 right-16 animate-bounce"></div>

      <div className="flex flex-col w-full h-full sm:w-4/5 items-center px-4 py-6 justify-center gap-y-10 sm:gap-y-12 relative">
        {/* Section Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-8 sm:mb-12 text-gray-800 text-center">
          Skills & Experience
        </h1>

        {/* Toggle Buttons for Small Screens */}
        {!isLargeScreen && (
          <div className="flex justify-center items-center 2xl:hidden gap-4">
            <div
              className={clsx(
                "rounded-xl px-4 py-2 text-center font-bold text-lg transition-colors",
                {
                  "bg-blue-600 text-white": active === "skills",
                  "bg-white text-blue-600 border border-blue-600":
                    active !== "skills",
                }
              )}
              onClick={() => setActive("skills")}
            >
              Skills
            </div>
            <div
              className={clsx(
                "rounded-xl px-4 py-2 text-center font-bold text-lg transition-colors",
                {
                  "bg-blue-600 text-white": active === "experience",
                  "bg-white text-blue-600 border border-blue-600":
                    active !== "experience",
                }
              )}
              onClick={() => setActive("experience")}
            >
              Experience
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex flex-col 2xl:flex-row xl:justify-between items-center gap-6 xl:gap-12 w-full max-w-5xl">
          {/* Skills Section */}
          <div
            className={clsx(
              "grid grid-cols-2 2xl:grid-cols-3 gap-6 justify-center items-center flex-shrink-0",
              {
                hidden: !isLargeScreen && active !== "skills",
              }
            )}
          >
            {skills.map((skill, index) => (
              <Skill key={index} image={skill.image} name={skill.name} />
            ))}
          </div>

          {/* Experience Section */}
          <div
            className={clsx(
              "flex flex-col items-center w-full xl:max-w-[800px]",
              {
                hidden: !isLargeScreen && active !== "experience",
              }
            )}
          >
            {/* Navigation for Experience */}
            <div className="flex flex-row items-center gap-4 sm:gap-6">
              <ChevronUpIcon
                width={32}
                className={`text-yellow-600 ${
                  jobIndex === 0
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }`}
                onClick={() => setJobIndex(jobIndex - 1)}
              />
              <p className="text-lg w-fit sm:text-2xl py-2 px-6 bg-yellow-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                {jobs[jobIndex].year}
              </p>
              <ChevronDownIcon
                width={32}
                className={`text-yellow-600 ${
                  jobIndex === jobs.length - 1
                    ? "opacity-50 pointer-events-none"
                    : "cursor-pointer"
                }`}
                onClick={() => setJobIndex(jobIndex + 1)}
              />
            </div>

            {/* Experience Details */}
            <div className="mt-4 text-center">
              <p className="text-xl sm:text-2xl font-semibold text-yellow-700 mb-4">
                {jobs[jobIndex].title}
              </p>
              {jobs[jobIndex].responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 py-4 bg-white text-left rounded-lg shadow-md mb-3 transition-shadow hover:shadow-lg"
                >
                  <p className="text-md sm:text-lg text-gray-600">
                    {responsibility}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}