import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-neutral-800 text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-800">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Emman Cruz, nice to meet you!</p>
          </div>
          <div>
            <p>
              I am now a third-year computer science student that is primarily
              interested in web development. I primarily utilize ReactJs
              technology to create various websites for fun and educational
              purpose.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
