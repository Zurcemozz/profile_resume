import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="bg-neutral-800 w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-400">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] border-b border-white">
          Emmanuel Joseph Cruz
        </h1>
        <h2 className="text-1xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          In today's technological environment, the greatest approach to express
          yourself is to exhibit with simplicity.
        </p>
        <div>
          <a href="/works">
            <button
              className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-800 hover:border-blue-800"
              name="workd"
            >
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home
