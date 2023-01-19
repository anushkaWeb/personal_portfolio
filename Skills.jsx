import React from 'react';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#fecaca] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className=' w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center text-black  '>Skills 💻 and Certifications 📃</p>
              <p className='py-4 text-2xl text-black bg-[#fecaca]'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>GITHUB</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'></p> */}
              {/* </div> */}
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>C</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>C++</p>
              </div>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'></p>
              </div> */}
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>JAVA 📃</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>MYSQL</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>Responsive website (HTML,CSS)📃</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 text-black bg-[#2c7a7b]'>
                  <p className='my-4 bg-[#2c7a7b] text-black text-gray-100'>Basic of SQL DBMS 📃 </p>
              </div>
              <br/>
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'></p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Django</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Sass</p>
              </div> */}
              {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>Mongodb</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <p className='my-4'>GraphQl</p>
              </div> */}
          </div>
      </div>
    </div>

  );
};
export default Skills;