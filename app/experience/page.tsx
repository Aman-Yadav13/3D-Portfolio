"use client";

import React from "react";
import { experiences, skills, testimonials } from "@/data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "./style.min.css";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { Footer } from "./footer";
import BackgroundIntro from "@/components/BgLayer";

const ExperiencePage = () => {
  return (
    <>
      {<BackgroundIntro />}
      <div className="h-auto w-full relative bg-gray-900 overflow-hidden">
        <div className="h-full w-full lg:px-36 md:py-10 md:px-32 px-6">
          <div className="h-full w-full flex flex-col">
            <div className="flex flex-col">
              <p className="text-white font-bold lg:text-5xl md:text-4xl text-3xl mt-4">
                My{" "}
                <span className="bg-gradient-to-r from-[#cd22e6] to-[#df97e8] bg-clip-text text-transparent">
                  Experience
                </span>
              </p>
              <p className="text-slate-500 lg:mt-4 mt-2 leading-relaxed text-xs md:text-lg">
                I have worked with some companies and on several freelance
                projects during my time in Web Development, leveling up my
                skills and collaborating with smart people.
              </p>
            </div>
            <div className="mt-12 ">
              <VerticalTimeline className="">
                {experiences.map((experience, index) => (
                  <VerticalTimelineElement
                    key={experience.company_name}
                    date={experience.date}
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                      <div className="flex justify-center items-center w-full h-full">
                        <img
                          src={experience.icon}
                          alt={experience.company_name}
                          className="w-[60%] h-[60%] object-contain rounded-full"
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      color: "white",
                      borderBottomColor: experience.iconBg,
                      boxShadow: "none",
                      background:
                        index % 2 == 0
                          ? "rgb(192 132 252)"
                          : "rgb(244 114 182)",
                    }}
                  >
                    <div className="">
                      <h3 className="text-xl font-poppins font-bold">
                        {experience.title}
                      </h3>
                      <p
                        className="text-black-500 font-semibold text-base"
                        style={{ margin: 0 }}
                      >
                        {experience.company_name}
                      </p>
                    </div>
                    rgb(253 186 116)
                    <ul className="my-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => (
                        <li
                          key={`experience-point-${index}`}
                          className="text-black-500/50 font-normal pl-1 text-sm"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </div>
            <hr className="bg-gray-500 w-[90vw] md:w-[80vw] mx-auto md:mt-8 mt-4" />

            <div className="flex flex-col lg:mt-12 mt-6">
              <p className="text-white font-bold lg:text-5xl md:text-4xl text-3xl">
                My{" "}
                <span className="bg-gradient-to-r from-[#cd22e6] to-[#df97e8] bg-clip-text text-transparent">
                  Skills
                </span>
              </p>
              <div className="lg:mt-16 mt-10 flex flex-wrap lg:gap-20 md:gap-15 gap-6">
                {skills.map((skill) => (
                  <div
                    className="block-container lg:w-20 lg:h-20 md:w-15 md:h-15 w-10 h-10"
                    key={skill.name}
                  >
                    <div className="btn-back rounded-xl" />
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className="w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col lg:mt-16 mt-10">
              <p className="font-bold lg:text-5xl md:text-4xl text-3xl  text-white">
                Kind words from{" "}
                <span className="bg-gradient-to-r from-[#cd22e6] to-[#df97e8] bg-clip-text text-transparent">
                  satisfied clients
                </span>
              </p>
              <div className="flex flex-col items-center mt-2 lg:mt-10">
                <InfiniteMovingCards
                  items={testimonials}
                  direction="right"
                  speed="slow"
                />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
