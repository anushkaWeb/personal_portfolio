import React from 'react'
import {FaAddressBook,FaPhoneAlt,FaEnvelope} from 'react-icons/fa'

const Contact = () => {
  return (
    <div>
    
    <div className=' bg-[#fecaca]'>
 <div className='w-full bg-[#fecaca] space-y-0'>


       <div className='max-w-[1000px] mx-auto p-5 flex flex-col justify-center w-full h-full bg-[#fecaca]'>
            <div className='pb-8 w-full flex justify-center items-center flex-col  '>
          <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center text-black '>
            CONTACT
          </p>
          

<hr/><br/><br/><br/>
    <div name='contact' className='w-full h-screen bg-[#2c7a7b] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 flex flex-col justify-center w-full h-full items-center'>
                
                <h2 className='text-gray-300 py-4'>Send me a message</h2>
            </div>
            <form action="https://formspree.io/f/xwkznzan"
            method="POST">
            <div className='shift'>
            <input className='bg-[#ccd6f6] p-4  w-92 flex w-full items-end gap-4 mx-8 px-8' type="text" placeholder='Name' name='name'  required  /><br/>
            <input className='mt-2 p-4 bg-[#ccd6f6] w-92 flex w-full items-end gap-4 mx-8 px-8' type="email" placeholder='Email' name='email'  required /><br/>
            <textarea className='bg-[#ccd6f6] p-4 my-2 w-92 flex w-full items-end gap-4 mx-8 px-8' name="message" rows="8" placeholder='Message'  required ></textarea>
            <button className='text-white border-2 hover:bg-cyan-500 hover:border-cyan-500 px-3 py-3 my-8 mx-auto flex  w-52 text-center '>SEND</button>
            </div>
            </form>
        </div>
        </div>
    </div>
  




</div>
</div>
</div>
 
          
 
  <div className="bg-[#2c7a7b] relative flex flex-wrap py-6 rounded shadow-md">
           
            <div className="lg:w-1/2 px-6">
            <h2 className='italic  mb-0  text-2xl font-extrabold text-transparent  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600' >Quick connect</h2>
              <h2 className="title-font font-semibold text-white flex items-center w-full text-gray-300">
              

              <FaAddressBook/>Address
              </h2>
              <p className="mt-1 text-white text-base">
               Seva ashram choraha <br />
                Shubhash nagar, Udaipur
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs ">
                EMAIL<FaEnvelope/>
              </h2>
              <a className="text-indigo-400 leading-relaxed" href='https://mail.google.com/mail/u/0/?ogbl#inbox'>
                kakeriwalanushka@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs ">
              Phone<FaPhoneAlt/>
              </h2>
              <p className="leading-relaxed text-white">6376254855</p>
            </div>
            </div>
           
          
          <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14512.227563673796!2d73.68812831349499!3d24.587232759139464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e576f4b4730f%3A0xce9b334c05917298!2sWebSenor%20-%20Web%20Development%2C%20Mobile%20App%20Development%20%26%20Digital%20Marketing%20in%20Udaipur!5e0!3m2!1sen!2sin!4v1672991183156!5m2!1sen!2sin" 
      width="100%"
       height="250"
        style={ {border:0}}
         allowFullScreen=""
          loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
          
          
        
    
   
  )
}

export default Contact




