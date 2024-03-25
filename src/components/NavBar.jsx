import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, FaTimes } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon



const Navbar = () => {
  const links=[
    {
      id:1,
      link:'about',
    },
    {
      id:2,
      link:'experience',
    },
    {
      id:3,
      link:'projects',
    },
    {
      id:4,
      link:'contact',
    },
  ];

  return (
    // px-4 is a bootstrap class that adds padding to all
    //py-1 is bootstrap class that adds padding to vertical
    <div className="flex justify-between items-center w-full h-20px-2 py-2  text-black fixed bg-white fixed"> 
      <div>
        <h1 className="text-4xl font-bold font-signature ml-2 px-5 cursor-pointer" >ShailendraJR</h1>
      </div>
      <ul className='flex'>

      {links.map(({id,link}) =>(
           <li key={link , id} className='px-5 cursor-pointer capitalize font-medium 
           text-black-500 hover:scale-105 duration-200'>{link}</li>
      ))}

       
       
      </ul>
    </div>
  )
}
// <FontAwesomeIcon icon={faBars} />


export default Navbar

