import React from 'react'
import { FaLinkedin } from "react-icons/fa";


function SocialLinks() {
  return (
    <div className='flex flex-col top-{35%} left-0 fixed'>
      <ul>
        <li className=' flex justify-between items-center w-40 h-1 px-4 bg-black'>
            <a href="" className='flex justify-between items-center w-full text-white '>
                <>
                LinkedIn <FaLinkedin /> </>
            </a>
        </li>
      </ul>
    </div>
  )
}

export default SocialLinks
