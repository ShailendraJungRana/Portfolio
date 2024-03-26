import React from 'react'
import HeroImage from "/Users/arun/Documents/project/Portfolio/src/assets/heroImage.jpg"
// import { MdKeyboardArrowRight } from "react-icons/md";

const About = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b' >
        <div className='max-w-screen-lg mx-auto flex-col texts-center 
        justify-center h-full px-4 py-3 md:flex-row'>
         <div className='flex flex-col justify-center items-center h-screen'>
         <div className='text-center'>
             <p className='text-2xl'>Hello, I'm</p>
             <h1 className='text-4xl font-bold'>Shailendra Jung Rana</h1>
             <p className='text-2xl'>Frontend Developer and UI/UX Designer.</p>
         </div>
         <div className='flex justify-center space-x-4 mt-8'>
             <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
               Download CV
             </button>
             <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
               Contact Info
             </button>
         </div>
         </div>

          <div>
                <img src ={HeroImage} alt=""/>

         </div>
         </div>
    </div>
    
  )
}

export default About
    //   {/* <MdKeyboardArrowRight /> */}
//     <div className='flex flex-col justify-center items-center h-screen'>
//   <div className='text-center'>
//     <p>Hello, I'm</p>
//     <h1>Shailendra Jung Rana</h1>
//     <p>Frontend Developer and UI/UX Designer.</p>
//   </div>
//   <div className='flex justify-center space-x-4 mt-8'>
//     <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
//       Download CV
//     </button>
//     <button className="bg-white hover:bg-gray-700 text-black font-bold py-2 px-4 rounded-full border-2 border-black">
//       Contact Info
//     </button>
//   </div>
// </div>
