import React from 'react'
import HeroImage from "../assets/shailendra.jpg";
import { FaArrowDown } from "react-icons/fa";


const Shailendra = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementsByName('about')[0];
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
 

  return (
     <div name='home' className='h-screen w-full bg-gradient-to-b' >
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 py-3 md:flex-row texts-center '>
      
      <div className="flex justify-center items-center md:mr-0">
  <div className="w-60 h-60 md:w-60 md:h-60">
    <img src={HeroImage} alt="profile" className='object-cover  rounded-full w-full h-full' />
  </div>
</div>

         {/* <div className='max-w-screen-lg flex flex-col justify-center items-center h-screen'> */}
        <div className='flex flex-col justify-center items-center md:ml-8 p-8'>
        <div className='text-center md:mr-0' >
             <p className='text-2xl py-1'>Hello, I'm</p>
             <h1 className='text-4xl font-bold'>Shailendra Jung Rana</h1>
             <p className='text-2xl py-2'>Frontend Developer and UI/UX Designer.</p>
        </div>

        <div className='flex justify-center space-x-4 mt-8'>
             <a href='/ShailendraJR.pdf'  target="_blank" className="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-full border-2 border-black "  >
               Download CV
             </a>

             <button className="bg-white hover:bg-gray-700 hover:text-white text-black font-bold py-2 px-4 rounded-full border-2 border-black">
               Contact Info
             </button>

             
        </div>
        </div>
        </div>
        <div id='about' className='flex justify-end absolute bottom-0 right-5 mr-5 mb-5 down-arrow'>
          <FaArrowDown className='animate-bounce' onClick={handleScrollToAbout} />
          
        </div>
     </div>
    
    
  )
}

export default Shailendra
