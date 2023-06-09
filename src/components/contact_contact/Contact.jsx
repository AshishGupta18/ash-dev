import React from "react";

const Contact = () => {
  return (
    <div className="px-5 max-w-[1560px] mx-auto pt-20 py-10  pr-20">
      {/* title */}
      <div className=" mb-12">
        <div className=" text-white mt-12 font-semibold text-[32px]">
          <div className="">
            <span className="text-[#C778DD]">/</span>Contact Me
          </div>
          
        </div>
        <div className="text-white mt-[14px] mb-[46px]">Who Am I?</div>
        {/* flex */}
        <div className="flex justify-between flex-wrap gap-10">
          {/* left */}
          <div className="md:w-3/5">
            <div className="text-[#ABB2BF] font-medium">
              I am interested in freelance and internship opportunities.
              However, if you have any other requests or questions, feel free to
              contact me.
            </div>
          </div>

          {/* right */}
          <div className="flex gap-3">
            {/* {/* boxes flex */}
            {/* 1 */}
            {/* <div className="p-4 border-[#ABB2BF] border">
              <h2 className="text-white font-medium pb-2">Support me here</h2>
              <span className="text-[#ABB2BF]">Random thing</span>
            </div> */}
            {/* 2 */}
            <div className="p-4 border-[#ABB2BF] border">
              <h2 className="text-white font-medium pb-4">Message me Here</h2>
              <div className="text-[#ABB2BF]">
                <div className="flex gap-1 items-center">
                  <img
                    src={require("../contact_section/imgs/Phone.png")}
                    alt=""
                    srcset=""
                  />
                  <span>+91 7505231375</span>
                </div>
                <div className="flex gap-1 items-center">
                  <img
                    src={require("../contact_section/imgs/Email.png")}
                    alt=""
                    srcset=""
                  />
                  <span>ashish189000@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* media */}
      <div className="mt-6 mb-5x">
        {/* title */}
        <div className="text-[32px] font-medium text-white">
          <span className="text-[#C778DD]">#</span>All Media
        </div>
        {/* media */}
        <div className="flex gap-6 mt-5">
            <a href="https://www.github.com/AshishGupta18" target="_blank" rel="noopener noreferrer"> <div className="text-[#ABB2BF] flex items-center gap-1">
            <img src={require("../footer/imgs/Github.png")} alt="" srcset="" />
            <span>Github</span>
          </div></a>
         <a href="https://www.linkedin.com/in/ashish-gupta-6a144a221/" target="_blank">
         <div className="text-[#ABB2BF] flex items-center gap-1">
            <img src={require("../contact_section/imgs/Linkedin.png")} alt="" srcset="" />
            <span>LinkedIn</span>
          </div>
         </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
