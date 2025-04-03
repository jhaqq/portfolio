"use client";

import React, { useState } from "react";
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
          className="rounded-full w-12 h-12 sm:w-16 sm:h-16"
        />
      </div>
      <p className="text-lg font-bold text-gray-700">{name}</p>
    </div>
  );
}

export default function Experience() {
  const [jobIndex, setJobIndex] = useState(0);

  const skills = [
    {
      image: "/react.png",
      name: "React",
    },
    {
      image: "/javascript.png",
      name: "Javascript",
    },
    {
      image: "/css.png",
      name: "CSS",
    },
    {
      image: "/typescript.png",
      name: "Typescript",
    },
    {
      image: "/git.png",
      name: "Git",
    },
    {
      image: "/html.png",
      name: "HTML",
    },
  ];

  const jobs = [
    {
      year: "2022",
      title: "Software Development Intern",
      responsibilities: [
        "Assisted in company migration to modern browsers in Java",
        "Learned and made use of the Object-Oriented Programming style to increase code readablility and future development speeds.",
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
        " Develop a reputation for quick turnarounds and high-quality solutions, helping to maintain a high percentage of repeat business.",
      ],
    },
  ];

  return (
    <div className="h-screen w-full flex flex-1 justify-center items-center bg-gradient-to-b from-yellow-200 to-yellow-50 relative">
      {/* Decorative Elements */}
      <div className="absolute w-16 h-16 bg-yellow-400 rounded-full top-10 left-10 animate-pulse"></div>
      <div className="absolute w-24 h-24 bg-yellow-300 rounded-full bottom-10 right-20 animate-bounce"></div>

      <div className="flex flex-col w-full h-screen sm:w-4/5 items-center relative px-4 py-3 justify-center gap-y-10 sm:gap-y-0">
        {/* Section Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-10 sm:mb-14 text-gray-800 text-center">
          Skills & Experience
        </h1>

        <div className="flex flex-col xl:flex-row xl:justify-between items-center gap-8 xl:gap-12 w-full 3xl:w-3/5">
          {/* Skills Section */}
          <div className="flex flex-wrap gap-x-10 justify-center items-center flex-shrink-0">
            {skills.map((skill, index) => (
              <Skill key={index} image={skill.image} name={skill.name} />
            ))}
          </div>

          {/* Experience Section */}
          <div className="flex-grow w-full xl:w-auto xl:max-w-[800px]">
            <div className="flex flex-row items-center gap-6 sm:gap-8">
              <ChevronUpIcon
                width={36}
                className={`text-yellow-600 ${
                  jobIndex === 0 ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => setJobIndex(jobIndex - 1)}
              />
              <p className="text-2xl sm:text-4xl h-fit py-2 px-6 bg-yellow-500 text-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                {jobs[jobIndex].year}
              </p>
              <ChevronDownIcon
                width={36}
                className={`text-yellow-600 ${
                  jobIndex === 2 ? "opacity-50 pointer-events-none" : ""
                }`}
                onClick={() => setJobIndex(jobIndex + 1)}
              />
            </div>

            <div className="mt-6">
              <p className="text-2xl sm:text-3xl font-semibold mb-4 text-yellow-700">
                {jobs[jobIndex].title}
              </p>
              {jobs[jobIndex].responsibilities.map((responsibility, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-6 py-4 bg-white text-left rounded-lg shadow-md mb-3 transition-shadow hover:shadow-xl"
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
