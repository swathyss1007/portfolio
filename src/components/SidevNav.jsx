import React from 'react'
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject} from "react-icons/ai"
import {GrProjects} from "react-icons/gr"
import {BsPerson} from "react-icons/bs"

export default function SidevNav() {

    const [nav,setNav] = React.useState(false)

    function handleNav(){
        setNav(prev => !prev)
        console.log(nav)
    }

  return (
    <div>
        <AiOutlineMenu onClick = {handleNav} className='absolute top-4 right-4 z-[99] md:hidden cursor-pointer hover:scale-110 ease-in duration-75' size={25}/>
        {
            nav &&
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a href="#main" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20} />
                    <span className='pl-4'>Home</span>
                </a>
                <a href="#work" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20} />
                    <span className='pl-4'>Work</span>
                </a>
                <a href="#projects" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20} />
                    <span className='pl-4'>Projects</span>
                </a>
                <a href="#main" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20} />
                    <span className='pl-4'>Resume</span>
                </a>
                <a href="#contact" onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20} />
                    <span className='pl-4'>Contact</span>
                </a>
            </div>     
       
        }
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                </a>
                <a href='#projects' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineProject size={20}/>
                </a>
                <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsPerson size={20}/>
                </a>
                <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
    </div>
  )
}
