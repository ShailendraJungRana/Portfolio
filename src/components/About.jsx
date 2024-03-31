import React from 'react'
import { FaArrowDown } from "react-icons/fa";
const About = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementsByName('experience')[0];
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div name='about' className="w-screen h-screen  bg-to-b from-white to-black ">
      
        <div className='max-w-screem-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-10'>
                <p className='text-4xl font-bold  border-b-4 border-gray-500 py-2 inline border-500'>About</p>
            </div>
            <p className='text-xl mt-10 pl-11' >
            Hello, I'm Shailendra Jung Rana, a passionate UI/UX designer with a
             keen enthusiasm for learning and growth. Recently, I've embarked on a journey into 
             frontend development to complement my design skills and broaden my understanding of digital experiences.
            </p>

            <br/>

            <p className='text-xl pl-11'>

            Crafting user-centric designs blending aesthetics with functionality. Proficient in Figma, Jitter, Webflow, and exploring React.js. Committed to staying ahead in UI/UX design and frontend development. Thrive on challenges, value teamwork, and open communication for exceptional digital experiences. Excited for a journey ahead, filled with creativity, innovation, and endless possibilities.
            </p>
        </div>
        <div className='flex justify-end   bottom-0 right-5 mb-5 mr-14  '>
          <FaArrowDown className='animate-bounce' onClick={handleScrollToAbout} />
        
        </div>
    </div>
  )
}

export default About
