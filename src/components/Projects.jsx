import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg' ;
import navbar from '../assets/portfolio/navbar.jpg' ;
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';


const Projects = () => {

    const portfolio =[
        {
        id:1,
        src:arrayDestruct,
        href: 'https://github.com/ShailendraJungRana/5-mini-project/tree/main/google-book-api'
        },
        {
        id:2,
        src:reactParallax,
        href: 'https://github.com/ShailendraJungRana/5-mini-project/tree/main/google-book-api'
        },
        {
        id:3,
        src:reactSmooth
        },
        {
        id:4,
        src:reactWeather
        },
        {
        id:5,
        src:navbar
        },
];


  return (
    <div name="portfolio"  className="w-full h-screen bg-to-b from-white   to-black-800
    text-white md:h-screen"> 
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
    <div className='pb-10'> 
    <p className='text-4xl font-bold inline border-b-4 border-gray-500 py-2 text-black'>
        Projects

    </p>
    <p className='py-6 text-black'>Check out some of my work</p>
    </div>

    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 '>
    {
        portfolio.map(({id,src})=>(

        <div key ={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt='' className='rounder-md duration-200 hover:scale-105'/> 
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-black' > Demo </button> 
            {/* onclick handler use garni ani good to go */}
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-black' > Code</button>
            </div>
        </div>
        ))
    }
    </div>

    </div>
    </div>
  )
}

export default Projects