import React from 'react'

const about = () => {
  return (
    <div className='px-5 max-w-[1560px] mx-auto pt-20 mt-10 py-10'>
       {/* title */}
       <div className=" mb-12">
        <div className=" text-white w-2/3 font-semibold text-[32px]">
          <div className="">
            <span className="text-[#C778DD]">/</span>About-Me
          </div>
          
         
        </div>
        <div className="text-white mt-[14px] font-normal text-base px-6">
          Who Am I?
        </div>
       
      </div>
      <div className=" flex-wrap flex items-center justify-between">
    {/* left */}
    <div className="md:w-[48%] w-full">
     
      {/* disc */}
      <p className="text-[#ABB2BF] ">
        Hello, I’m Ashish!
        <br />
        <br />
        I’m a self-taught fullstack developer based in Delhi, India. I
        can develop responsive websites from scratch and raise them into
        modern user-friendly web experiences.
        <br />
        <br />
        Transforming my creativity and knowledge into a websites has been
        my passion for over a year. I have been helping various clients to
        establish their presence online. I always strive to learn about
        the newest technologies and frameworks.
      </p>
     
    </div>
   {/* right */}
    <div className=" mx-auto">
      <img className="mx-auto" src={require("../about_section/imgs/man.png")} alt="" />
    </div>
  </div></div>
  )
}

export default about