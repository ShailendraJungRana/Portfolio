import React from 'react'
import { FaGithub , FaLinkedin } from "react-icons/fa";
// import { SiGmail } from "react-icons/si";


function SocialLinks() {
    const links = [
        {
            id:1,
            child:(
                <>
            LinkedIn <FaLinkedin  size={30}/> 

            </>
        ),
        href:"https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/",
        style:'rounderd-tr-md'
    },
    {
        id:2,
        child:(
            <>
            GitHub <FaGithub size={30} />


            </>
        ),
        href:"https://github.com/ShailendraJungRana",
    },
    {
        id:1,
        child:(
            <>
            LinkedIn <FaLinkedin  size={30}/> 

            </>
        ),
        href:"https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/",
        style:'rounderd-tr-md' 
    },
];

        return (
<div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        <li className=' flex justify-between items-center w-40 h-14 px-4 bg-white ml-[-100px] hover:ml-[-10px] hover:rounder-md duration-300 bg-white-500'>
            <a href="https://www.linkedin.com/in/shailendra-jung-rana-aa78781a1/" className='flex justify-between items-center w-full text-black '>
               
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
