import Project_card from "../components/project_card/Project_card";
import second from "./imgs/Rectangle 22.png";
const ProjectPage = () => {

 
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
        langs: ["Flutter","API","Xcode"],
        title: "Ask-Ash",
        disc: "Flutter App for ChatGPT with some added features ",
      },
      {
        img: second,
        langs: ["Flutter","API","Xcode"],
        title: "Ask-Ash",
        disc: "Flutter App for ChatGPT with some added features ",
      },
      {
        img: second,
        langs: ["Flutter","API","Xcode"],
        title: "Ask-Ash",
        disc: "Flutter App for ChatGPT with some added features ",
      },
      {
        img: second,
        langs: ["html", "css", "javascript"],
        title: "Image-Ditor",
        disc: "Responsive webapp to customize your images ",
      },
      {
        img: second,
        langs: ["html", "css", "javascript"],
        title: "I dont Know",
        disc: "Responsive webapp to customize your images ",
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
      <div className="text-white mt-[14px]"><span className="text-[#C778DD]">//</span><i>List of My Projects</i></div>
    </div>
    <div className="">
    <div className="text-white font-medium text-[32px] mt-[68px] mb-[48px]"><span className="text-[#C778DD]">#
      </span>
      <span>Completed Projects</span></div>
      
      <div className="flex flex-wrap gap-4 my-12">
          {/* cards */}
          {projects.map(({ img, langs, title, disc }) => {
            return (
              <>
                <Project_card
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
    </div>
  
  </>
  );
};
export default ProjectPage;
