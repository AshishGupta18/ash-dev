import ProjectCard from "../project_card/ProjectCard";
import second from "./imgs/Rectangle 22.png";

const Projects = () => {
  // date
  const projects = [
    {
      img: second,
      langs: ["html", "css", "javascript", "react", "tailwind css"],
      title: "ZorChat",
      disc: "A realtime chat app ",
    },
    {
      img: second,
      langs: ["Flutter", "API", "Xcode"],
      title: "Ask-Ash",
      disc: "Flutter App for ChatGPT with some added features ",
    },
    {
      img: second,
      langs: ["html", "css", "javascript"],
      title: "Image-Ditor",
      disc: "Responsive webapp to customize your images ",
    },
  ];

  return (
    <>
      <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
        {/* top */}
        <div className=" flex justify-between items-center gap-5">
          {/* left */}
          <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
            <div className="">
              <span className="text-[#C778DD]">#</span>projects
            </div>
            <div className="line w-2/3 h-px bg-[#C778DD]"></div>
          </div>
          {/* right */}
          <div className=" text-white font-medium">
            <a href="">
              <span>View all ~~&gt;</span>
            </a>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <ProjectCard
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
