import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#fecaca] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi<span class="animate-waving-hand">👋🏻</span>. I'm Anushka kakeriwal, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
               I did my graduation in bachlore's in computer application, Currently pursuing Master's in computer application from geetanjali institution of technical studies.
               along with internship in web development at websenor company udaipur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;