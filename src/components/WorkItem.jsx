import React from 'react'

export default function WorkItem(props) {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-300'>
        <li className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm'>
                <span className='inline-block py-1 px-2 font-semibold text-white bg-[#001b5e] rounded-full'>{props.year}</span>
                <span className='text-lg font-bold text-[#001b5e]'>{props.company}</span>
                <span className='text-sm font-semibold'>{props.title}</span>
                
            </p>
            <p className='my-2 text-base font-normal text-stone-500'>{props.details}</p>
        </li>
        
    </ol>
  )
}
