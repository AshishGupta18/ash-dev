import ProjectCard from "../project_card/ProjectCard";
import first from "./imgs/zorchat.png";
import third from "./imgs/image-ditor.png";
import second from "./imgs/ask-ash.png";
import {Link, Route, Routes} from 'react-router-dom';

const Projects = () => {
  // date
  const projects = [
    {
      img: first,
      langs: ["chatengine", "javascript", "react", "tailwind css"],
      title: "ZorChat",
      disc: "A realtime chat app where one can chat with many using chatengine ",
      src: "https://github.com/AshishGupta18/Zorchat",
    },
    {
      img: second,
      langs: ["Flutter", "API", "Xcode","OPENAI"],
      title: "Ask-Ash",
      disc: "Flutter App for ChatGPT with some added features ",
      src: "https://github.com/AshishGupta18/Ask-Ash-App",
    },
    {
      img: third,
      langs: ["html", "css", "javascript"],
      title: "Image-Ditor",
      disc: "Responsive webapp to customize your images ",
      src: "https://github.com/AshishGupta18/Image-Ditor",
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
            <Link to="/projects">
              <span>View all ~~&gt;</span>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <div className="flex flex-wrap justify-between gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc,src }) => {
            return (
              <>
                <ProjectCard
                  img={img}
                  langs={langs}
                  title={title}
                  disc={disc}
                  src={src}
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
