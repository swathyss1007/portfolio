import React from 'react'
import WorkItem from "./WorkItem"

const data = [
    
    {
        year: '2022 - Present',
        title: 'Project Engineer',
        company: 'Wipro',
        details: 'As a Project Engineer at Wipro, I played a pivotal role in enhancing the user experience of Verizon\'s e-commerce website. My primary responsibilities included addressing frontend and UI issues through the efficient resolution of JIRA defects. Operating on the frontline, I successfully identified and resolved critical production issues, ensuring the seamless functioning of Verizon\'s e-commerce platform. This experience not only honed my technical skills but also deepened my understanding of delivering high-quality solutions in a dynamic and fast-paced environment.'
    }
]

export default function Work() {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-6'>Work</h1>

        {data.map((item,id) => {
            return(
                <WorkItem 
                key={id} 
                year={item.year}
                title={item.title}
                company={item.company}
                details={item.details}
            />
            )
        })}
    </div>
  )
}
