import React from 'react'
import ProjectItems from "./ProjectItems"
import calculator from "../assets/calculator.jpeg"
import todolist from "../assets/todolist.jpeg"
import weather_app from "../assets/weather_app.jpeg"
import toll_application from "../assets/toll_application.jpeg"
import meme_generator from "../assets/meme_generator.jpeg"

const project_data = [
    {
        img: weather_app,
        title: 'Weather App',
        link: 'https://weather-app-redux-five.vercel.app/'
    },
    {
        img: todolist,
        title: 'To-do List',
        link: 'https://to-do-list-iota-wheat.vercel.app/'
    },
    // {
    //     img: calculator,
    //     title: 'Calculator',
    //     link: 'https://calculator-app-umber-nine.vercel.app/'
    // },
    {
        img: meme_generator,
        title: 'Meme Generator',
        link: 'https://meme-generator-lilac-ten.vercel.app/'
    },
    {
        img: toll_application,
        title: 'Toll Management App',
        link: 'https://swathyss1007.github.io/toll-application/'
    }
]

export default function Projects() {

  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 pl-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8 text-stone-500'>
            Explore my portfolio of ReactJS projects, where I leverage the power of modern web development to create intuitive and responsive user interfaces. Each project showcases my commitment to clean code, efficient architecture, and a seamless user experience. From dynamic single-page applications to interactive components, these projects represent my passion for crafting robust solutions using ReactJS. Dive into the world of innovation and creativity embodied in each line of code.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            {
                project_data.map((item, id) => {
                    return(
                        <ProjectItems 
                            key={id}
                            img={item.img}
                            title={item.title}
                            link={item.link}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}
