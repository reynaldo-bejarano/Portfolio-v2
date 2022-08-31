import React from 'react'
import dotted from "../../static/dotted_lines.svg"

const Experience = () => {
    return (
        <div>
            <img className='w-full h-6' src={dotted} alt="dotted lines"></img>
            <div className='lg:p-10'>
                <h3 className='text-center py-5 font-bold text-4xl 2xl:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-900 to-blue-400'>Some Things I’ve learn</h3>
                <p className='text-center font-bold text-md 2xl:text-xl text-slate-700 py-5 px-0 lg:px-32'>There are a number of technologies that allow developers to quickly create efficient and aesthetically appealing applications. Here are some of these technologies or programming languages that I currently use for frontend web development.</p>
            </div>
            <div className='lg:flex lg:justify-center lg:items-center gap-x-20'>
                <button className='bg-red-400 px-4 py-2 font-bold text-xl border-4 shadow-lg rounded-3xl'>Base</button>
                <button>Framework CSS</button>
                <button>Library</button>
                <button>Platform</button>
            </div>
        </div>
    )
}

export default Experience