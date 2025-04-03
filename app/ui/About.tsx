"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { useState } from "react";

function SkillCard({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center max-w-[60%] sm:max-w-72 sm:transition-transform sm:transform sm:hover:scale-105 sm:hover:rotate-1 shadow-lg bg-gradient-to-t from-white to-gray-50 rounded-lg overflow-hidden py-6">
      <div className="w-[200px] h-[100px] sm:w-[250px] sm:h-[190px] border relative mb-4 sm:mb-6 px-6 rounded-t-xl overflow-hidden">
        <Image alt={title} src={image} className="object-cover" fill={true} priority={true} />
      </div>
      <p className="mb-2 font-bold text-xl sm:text-2xl text-gray-800">
        {title}
      </p>
      <p className="text-center text-sm sm:text-lg text-gray-600 px-2 sm:px-4">
        {description}
      </p>
    </div>
  );
}

export default function About() {
  const [skillIndex, setSkillIndex] = useState(0);

  const handleDecrease = () => {
    if (skillIndex == 0) setSkillIndex(3);
    else setSkillIndex(() => skillIndex - 1);
  };

  const handleIncrease = () => {
    if (skillIndex == 3) setSkillIndex(0);
    else setSkillIndex(() => skillIndex + 1);
  }

  const skills = [
    {
      image: "/WebDev.jpg",
      title: "Websites",
      description:
        "Simple, but effective. A clean site can drive your engagement and boost your sales.",
    },
    {
      image: "/Dashboard.jpg",
      title: "Dashboards",
      description:
        "See your figures in a flash. Make the right business decisions using the most up-to-date information.",
    },
    {
      image: "/MobileDev.webp",
      title: "Mobile Apps",
      description:
        "Mobile apps are the future. Give your business an edge with an interactive application.",
    },
    {
      image: "/Question.jpg",
      title: "Something Else?",
      description:
        "The world is your oyster. We can work together to bring your most creative ideas to life.",
    },
  ];
  

  return (
    <div id="#about" className="h-screen w-full bg-gradient-to-b from-yellow-200 to-yellow-50 flex justify-center items-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute w-10 h-10 sm:w-16 sm:h-16 bg-purple-300 rounded-full top-4 left-4 sm:top-12 sm:left-8 animate-pulse"></div>
      <div className="absolute w-16 h-16 sm:w-24 sm:h-24 bg-purple-400 rounded-full bottom-10 right-8 sm:bottom-20 sm:right-14 animate-bounce"></div>
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 bg-purple-100 rounded-full top-1/4 right-1/5 opacity-30"></div>

      <div className="flex flex-col items-center justify-between gap-y-16 sm:gap-y-20 px-4 sm:px-0 3xl:max-w-3/5">
        {/* Main Heading */}
        <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-7xl text-center text-gray-800 leading-tight">
          So... What Should We Build{" "}
          <span className="text-purple-600 italic">Next?</span>
        </h1>

        <div className="flex 2xl:hidden justify-center items-center gap-7">
          <ChevronLeftIcon width={48} height={48} onClick={handleDecrease} className="text-yellow-600"/>
          <SkillCard
            image={skills[skillIndex].image}
            title={skills[skillIndex].title}
            description={skills[skillIndex].description}
          />
          <ChevronRightIcon width={48} height={48} onClick={handleIncrease} className="text-yellow-600"/>
        </div>

        {/* Skill Cards Section Large*/}
        <div className="hidden 2xl:flex flex-wrap justify-center gap-8 sm:gap-12">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              image={skill.image}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}