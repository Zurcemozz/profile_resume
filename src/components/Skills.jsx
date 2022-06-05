import React from 'react'
import CSS from '../assets/css.png'
import Github from '../assets/github.png'
import HTML from '../assets/html.png'
import JavaScript from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import Node from '../assets/node.png'
import Tailwind from '../assets/tailwind.png'
const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-neutral-800 text-gray-300 h-screen w-full "
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-content w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-800 py-4">
            Skills
          </p>
          <p>Knoweledgable at these technologies</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p>HTML</p>
          </div>
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="" />
            <p>CSS</p>
          </div>
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="" />
            <p>JavaScript</p>
          </div>
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="" />
            <p>Node</p>
          </div>
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="" />
            <p>GitHub</p>
          </div>
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="" />
            <p>Tailwind</p>
          </div>
          <div className="shadow-md shadow-neutral-900 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="" />
            <p>Mongo</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
