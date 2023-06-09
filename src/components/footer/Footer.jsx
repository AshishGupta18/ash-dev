const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src={require("./imgs/Logo.png")} alt="" />
                <span>Ashish</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">ashish189000@gmail.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>Web designer and fullstack developer based in India</p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2 mr-5">
              <a href="https://www.github.com/AshishGupta18" target="_blank">
                <img src={require("./imgs/Github.png")} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/ashish-gupta-6a144a221/" target="_blank">
                <img src={require("../contact_section/imgs/Linkedin.png")} alt="" />
              </a>
              <a href="https://www.instagram.com/whoisashish._/" target="_blank">
                <img src={require("../contact_section/imgs/Insta.png")} alt="" />
              </a>
              
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 2023. Made by Ashish
        </div>
      </div>
    </>
  );
};

export default Footer;
