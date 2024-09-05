import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'
import figma from '../assets/Figma.png'
import dribble from '../assets/dribble.png'
import { FaArrowDown } from "react-icons/fa";

const Experience = () => {

    // const handleScrollToExperience = () => {
    //     const experienceSection = document.getElementsByName('Projects')[0];
    //     if (experienceSection) {
    //       experienceSection.scrollIntoView({ behavior: 'smooth' });
    //     }
    //   };

    const Technology =[
        {
            id:1,
            src : html,
            tittle:'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src : css,
            tittle:'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src : javascript,
            tittle:'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            src : reactImage,
            tittle:'React',
            style: 'shadow-sky-500'
        },
        {
            id:5,
            src : tailwind,
            tittle:'Tailwind',
            style: 'shadow-green-500'
        },
        {
            id:6,
            src : github,
            tittle:'GitHub',
            style: 'shadow-grey-500'
        },
        {
            id:7,
            src : figma,
            tittle:'Figma',
            style: 'shadow-purple-500'
        },
        {
            id:8,
            src : dribble,
            tittle:'Dribble',
            style: 'shadow-pink-500'
        },
     
    ];

  return (
    <div name="experience"className='w-full h-screen bg-to-b from-white to-black'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6'>These are the Technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
           
            {
                Technology.map(({id,src,tittle,style})=>(
            <div key={id} className={`shadow-md shadow-gray-600 rounded-lg py-6 hover:scale-105 ease-in duration-300 ${style}`}>
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{tittle}</p>
            </div>
                    
                ))
            }

        </div>
      </div>
      <div className='flex justify-end absolute bottom-0 right-5 mr-5 mb-5 down-arrow'>
          <FaArrowDown className='animate-bounce' /> 
          {/* onClick={handleScrollToExperience} */}
          
        </div>
    </div>
  )
}

export default Experience
