import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import React, {useState} from 'react';
import {Link} from "react-scroll";

const Navbar = () => {

  // const handleClick=()=>{
    
  // }
  const [nav,setNav]= useState(false);

 
    const toggleNav = ()=>{
      setNav(!nav);
      let body = document.body;
      if(!nav){
          body.style.overflow = "hidden";
      } 
      else{
          body.style.overflow ="auto";
      }
  };

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
  <div className={`flex justify-between items-center w-full h-20 ${nav ? 'bg-to-b from-white to-gray-800' : 'bg-white'} fixed`}>
    <div>
      <h1 className="text-3xl font-bold font-signature ml-4 px-5 hover:scale-105 duration-300 cursor-pointer">ShailendraJR</h1>
    </div>
    <div className="md:hidden">
      <div onClick={toggleNav} className="cursor-pointer pr-6 z-10 text-grey-500">
        <FontAwesomeIcon icon={nav ? faTimes : faBars} style={{ fontSize: "24px" }} />
      </div>
    </div>
    <ul className={`md:flex ${nav ? '' : 'hidden'} mr-15`}>
      {links.map(({ id, link }) => (
        <li key={id} className='px-5 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-300 mr-10 py-4 lg:py-4'>
          <Link to={link} smooth duration={500} onClick={toggleNav}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
    {nav && (
      <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-800 text-black">
        <ul className='flex flex-col justify-center'>
          {links.map(({ id, link }) => (
            <li key={id} className='px-5 cursor-pointer capitalize font-medium text-black-500 hover:scale-105 duration-300 mr-10 py-4 lg:py-4'>
              <Link to={link} smooth duration={500} onClick={toggleNav}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);
};

export default Navbar;