import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp} from "react-icons/fa"
import BgImg from "../assets/bg4.jpg"

export default function() {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover scale-x-[-1]' src={BgImg} alt=''></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
            <div className='max-w-[700px] m-auto w-full h-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-900 '>I'm Swathy S S</h1>
                <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-900'>I'm a 
                    <TypeAnimation 
                        sequence = {[
                            'Front-End Developer', 2000,
                            'Software Developer', 2000,
                            'Project Engineer', 2000
                        ]}
                        wrapper='span'
                        speed={70}
                        // style={{ fontSize: '1em', display: 'inline-block'}}
                        repeat={Infinity}
                        className='pl-[5px] font-bold'
                    />    
                </h2>
                <div className='flex justify-between pt-6 max-w-[150px] w-full'>
                    <a href='https://www.linkedin.com/in/swathy-s-s-270415231' target='_blank'>
                        <FaLinkedinIn className='cursor-pointer' size={20} />
                    </a>
                    <a href='https://github.com/swathyss1007' target='_blank'>
                        <FaGithub className='cursor-pointer' size={20}  />
                    </a>
                    <a href='https://www.instagram.com/swathyss_1007' target='_blank'>
                        <FaInstagram className='cursor-pointer' size={20}  />
                    </a>
                    <a href='https://wa.me/+919488217467' target='_blank'>
                        <FaWhatsapp className='cursor-pointer' size={20}  />
                    </a>       
                </div>
                <div>
                    <a href='https://drive.google.com/uc?export=download&id=13GiztJfztFfDifhWmwzl-zzM-CLFsH0F' download="SwathySS_Resume.pdf">
                        <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg hover:scale-110 ease-in duration-100'>
                            Download Resume
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    </div>
  )
}
