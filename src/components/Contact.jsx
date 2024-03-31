import React from 'react'
import { FaGithub , FaLinkedin , FaFacebook} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';

const Contact = () => {
  const SocialLink = [
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
    id:3,
    child:(
        <>
        Mail<HiOutlineMail size={30}/>
        </>
    ),
    href : "mailto:shailendera.jungrana@gmail.com",
    style:'rounderd-tr-md' 
},
{
    id:3,
    child:(
        <>
       Facebook<FaFacebook size={30}/> 

        </>
    ),
    href : "mailto:https://www.facebook.com/arun.jangrana/",
    style:'rounderd-tr-md' 
},

];
  return (
    <div name='contact ' className='w-full h-screen bg-gradient-to-b from-white-800 to-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className="py-6"> Submit the form below to get in touch with me</p>
        </div>
        
        <div className='flex justify-center items-center'>
            <form action='https://getform.io/f/pamqkpja'method="POST" className='flex flex-col w-full md:w-1/2'>
                 <input type="text" name='form' placeholder='Enter Your Name' className='p-2 py- bg-transparent border-2 rounded-md border-gray-500 text-black py-2 focus:outline-none'/>
                 <input type="email" name='form' placeholder='Enter Your Email' className=' my-4 p-2 py- bg-transparent border-2 border-gray-500 rounded-md text-black py-2 focus:outline-none'/>
            <textarea  name='message' rows='10' placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md border-gray-500  pt-2 focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from bg-gray-500 to-black-500  px-5 py-5 my-8 mx-auto flex items-center rounded-md h-10 hover:scale-110 duration -300'  > Let's Chat

            </button>
            </form>
        </div>
        <ul>
            {SocialLink.map(({id, child, href,style})=>(
            <li key={id}
                className= {" flex justify-between items-center w-40 h-14 px-4 py-6 bg-white ml-[-100px] hover:ml-[-10px] hover:rounder-md duration-300 bg-white-500 " + style}>
             <a href={href} 
                className='flex justify-between items-center w-full text-black '
                target='_blank'
                rel='noreferrer'
              >
                 {child}
             </a>
             </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default Contact
