import ProjectCard from "../components/project_card/ProjectCard";
import third from "../components/projects_section/imgs/image-ditor.png";
import first from "../components/projects_section/imgs/zorchat.png";
import second from "../components/projects_section/imgs/ask-ash.png";
const ProjectPage = () => {
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
    {
      img: first,
      langs: ["chatengine", "javascript", "react", "tailwind css"],
      title: "ZorChat",
      disc: "A realtime chat app where one can chat with many using chatengine ",
      src: "https://github.com/AshishGupta18/Zorchat",
    },
    {
      img: first,
      langs: ["chatengine", "javascript", "react", "tailwind css"],
      title: "ZorChat",
      disc: "A realtime chat app where one can chat with many using chatengine ",
      src: "https://github.com/AshishGupta18/Zorchat",
    },
    {
      img: first,
      langs: ["chatengine", "javascript", "react", "tailwind css"],
      title: "ZorChat",
      disc: "A realtime chat app where one can chat with many using chatengine ",
      src: "https://github.com/AshishGupta18/Zorchat",
    },
  ];

  return (
    <>
      <div className="min-h-screen pt-[114px] px-5 max-w-[1560px] mx-auto">
        <div className="">
          <div className="text-white font-bold text-[32px]">
            <span className="text-[#C778DD]">/</span>
            <span>Projects</span>
          </div>
          <div className="text-white mt-[14px]">
            <span className="text-[#C778DD]">//</span>
            <i>List of My Projects</i>
          </div>
        </div>
        <div className="">
          <div className="text-white font-medium text-[32px] mt-[68px] mb-[48px]">
            <span className="text-[#C778DD]">#</span>
            <span>Completed Projects</span>
          </div>

          <div className="flex flex-wrap gap-4 my-12">
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
      </div>
    </>
  );
};
export default ProjectPage;
