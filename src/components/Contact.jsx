import React from 'react'


const Contact = () => {

  return (
    <div id='contact' className='w-full h-screen bg-gradient-to-b mt-96 from-white-800 to-black'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className="py-6"> Submit the form below to get in touch with me</p>
        </div>
        
        <div className='flex justify-center items-center '>
            <form action='https://getform.io/f/pamqkpja'method="POST" className='flex flex-col w-full md:w-1/2'>
                 <input type="text" name='form' placeholder='Enter Your Name' className='p-2 py- bg-transparent border-2 rounded-md border-gray-500 text-black py-2 focus:outline-none'/>
                 <input type="email" name='form' placeholder='Enter Your Email' className=' my-4 p-2 py- bg-transparent border-2 border-gray-500 rounded-md text-black py-2 focus:outline-none'/>
            <textarea  name='message' rows='10' placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md border-gray-500  pt-2 focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from bg-gray-500 to-black-500  px-5 py-5 my-8 mx-auto flex items-center rounded-md h-10 hover:scale-110 duration -300'  > Let's Chat

            </button>
            </form>
        </div>
       
      </div>
    </div>
  )
}

export default Contact
