import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon
import React, {useState} from 'react';

const Navbar = () => {

  const [nav,setNav]= useState(false);

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
        <h1 className="text-3xl font-bold font-signature ml-4 px-5 cursor-pointer"  >ShailendraJR</h1>
      </div>
      <ul className='hidden md:flex mr-15' > 
      {/* //changes in here and li key mr-10 */}

      {links.map(({id,link}) =>(
           <li key={id} className='px-5 cursor-pointer capitalize font-medium 
           text-black-500 hover:scale-105 duration-300 mr-10 py-4 lg:py-4'>{link}</li> //key={link,id}
      ))}
      </ul>
      <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-6 z-10 text-grey-500 md:hidden'>
        {nav ?  <FontAwesomeIcon icon={faTimes} style ={{fontSize: "24px"}}/> : <FontAwesomeIcon icon={faBars} style ={{fontSize: "24px"}}/>}
      </div>

        {nav && (
          
          
          <ul className='flex flex-col justify-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-800 text-black'>
      {links.map(({id,link}) =>(
        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-3xl'>{link}</li> //key={link,id}
        ))} 

      </ul>
        )}
    </div>
  )
}



// {/* <FontAwesomeIcon icon={faBars} style ={{fontSize: "24px"}}/> */}

export default Navbar

