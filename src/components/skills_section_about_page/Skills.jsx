import React from "react";
const skills = [
  {
    title: "Languages",
    languages: ["JavaScript", "HTML5", "CSS", "Python", "C++", "Dart"],
  },
  { title: "Databases", languages: ["Firebase", "Mongo"] },
  {
    title: "Tools",
    languages: ["VSCode", "Xcode", "Teta", "Figma", "Git", "Font Awesome"],
  },

  {
    title: "Platforms",
    languages: ["Github", "Vercel", "Netlify", "InfinityFree", "Leetcode"],
  },
  {
    title: "Frameworks",
    languages: [
      "React",
      "Vite",
      "Node",
      "Tailwind CSS",
      "FLutter",
      "Express.js",
    ],
  },
  {
    title: "Other",
    languages: ["Postman", "Canva", "Thunder Client", "Anaconda"],
  },
];
const Skills = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 mt-10 py-10">
      <div className=" mb-10">
        <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
          <div className="">
            <span className="text-[#C778DD]">#</span>Skills
          </div>
          <div className="line w-1/3 h-px bg-[#C778DD]"></div>
        </div>
      </div>
      {/* cards */}
      <div className="flex justify-around gap-4 flex-wrap">
        {skills.map(({ title, languages }) => {
          return (
            <>
              <div className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[15%] border border-[#ABB2BF]">
                <div className=" text-white p-2">
                  <h2 className=" font-semibold">{title}</h2>
                </div>
                <div className=" flex gap-2 border-t border-[#ABB2BF] flex-wrap p-2 text-[#ABB2BF]">
                  {languages.map((e) => {
                    return <span>{e}</span>;
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
