import React from 'react'

const Fun_facts = () => {
  return (
    <div className='px-5 max-w-[1560px] mx-auto pt-20 py-10'>
        <div className=" text-white font-medium text-[32px] mb-12">
          
            <span className="text-[#C778DD]">#</span>My-Fun-Facts
          
        <div className="flex justify-between items-center flex-wrap mt-10 ">
            {/* left */}
            <div className="flex justify-center gap-y-10 md:justify-around gap-4 w-full md:w-[48%] flex-wrap">
                <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    I am currently trying to learn Everything
                </div>
                <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                   I am in third year of my college
                </div>
                <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Hustling and Grinding for better future 
                </div>
                <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    I love to play sports
                </div>
                <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                    Always open for exciting collaborations
                </div>
                <div className="fact border border-[#ABB2BF] p-2 text-[#ABB2BF] text-base font-normal">
                I like winters more than summer
                </div>
            </div>
            {/* right */}
            <div className="flex justify-center items-center w-full md:w-[48%]">
                <img src={require("../skills_section/imgs/shapes.png")} className="w-[250px]" alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Fun_facts