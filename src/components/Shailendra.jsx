import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { FaArrowDown } from "react-icons/fa";


const Shailendra = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementsByName('about')[0];
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleDownloadCV=()=>{
    const link = document.createElement("a");
    link.href='/resume.pdf';
    link.download='resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     <div name='home' className='h-screen w-full bg-gradient-to-b' >
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 py-3 md:flex-row texts-center 
        justify-center h-full px-4 py-3 md:flex-row'>
        <div className="flex justify-center items-center md:mr-0">
            <img src={HeroImage} alt="profile" className='mx-auto rounded-full w-60 h-60 md:w-60 md:h-60 '/>
        </div>

         {/* <div className='max-w-screen-lg flex flex-col justify-center items-center h-screen'> */}
        <div className='flex flex-col justify-center items-center md:ml-8'>
        <div className='text-center md:mr-0' >
             <p className='text-2xl py-1'>Hello, I'm</p>
             <h1 className='text-4xl font-bold'>Shailendra Jung Rana</h1>
             <p className='text-2xl py-2'>Frontend Developer and UI/UX Designer.</p>
        </div>

        <div className='flex justify-center space-x-4 mt-8'>
             <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black " onClick={handleDownloadCV} >
               Download CV
             </button>

             <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
               Contact Info
             </button>

             
        </div>
        </div>
        </div>
        <div className='flex justify-end absolute bottom-0 right-5 mr-5 mb-5 down-arrow'>
          <FaArrowDown className='animate-bounce' onClick={handleScrollToAbout}/>
          
        </div>
     </div>
    
    
  )
}

export default Shailendra

// <div className='flex flex-col md:flex-row'>
//   <div className="flex justify-center items-center">
//     <img src={HeroImage} alt="profile" className='mx-auto rounded-full w-60 h-60 md:w-60 md:h-60'/>
//   </div>

//   <div className='flex flex-col justify-center items-center md:ml-8'>
//     <div className='text-center'>
//       <p className='text-2xl'>Hello, I'm</p>
//       <h1 className='text-4xl font-bold'>Shailendra Jung Rana</h1>
//       <p className='text-2xl'>Frontend Developer and UI/UX Designer.</p>
//     </div>
//     <div className='flex justify-center space-x-4 mt-8'>
//       <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
//         Download CV
//       </button>
//       <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
//         Contact Info
//       </button>
//     </div>
//   </div>
// </div>
