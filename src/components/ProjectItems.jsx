import React from 'react'

export default function ProjectItems(props) {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 group rounded-xl hover:bg-gradient-to-r from-gray-400 to-gray-950'>
        <img src={props.img} className='rounded-xl group-hover:opacity-10'></img>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl font-bold text-white tracking-wider text-center'>{props.title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>ReactJS</p>
            <a href={props.link} target='_blank'>
                <p className='text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg'>More Info</p>            
            </a>
        </div>
        
    </div>
  )
}
