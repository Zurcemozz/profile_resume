import React from 'react'
import { FaBars, FaFacebook, FaGithub, FaTimes } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoColored.png'
import { useStateContext } from '../context/ContextProvider'

const Navbar = () => {
  const { activeMenu, setActiveMenu } = useStateContext()
  const handleClose = () => setActiveMenu(!activeMenu)

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-neutral-800 text-gray-300">
      <div>
        <img src={Logo} alth="Logo Image" style={{ width: '150px' }} />
      </div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/works">Works</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Hamburerger */}
      <div
        className="md:hidden z-100 text-3xl cursor-pointer"
        onClick={handleClose}
      >
        {activeMenu ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          activeMenu
            ? 'hidden'
            : 'absolute z-50 top-0 left-0 w-full h-screen bg-neutral-800 flex flex-col justify-center items-center'
        }
      >
        <ul>
          <li className="py-6 text-3xl">
            <a href="/">Home</a>
          </li>
          <li className="py-6 text-3xl">
            <a href="/about">About</a>
          </li>
          <li className="py-6 text-3xl">
            <a href="/skills">Skills</a>
          </li>
          <li className="py-6 text-3xl">
            <a href="/works">Works</a>
          </li>
          <li className="py-6 text-3xl">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Social Menu */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 border rounded-lg drop-shadow-lg	">
            <a
              className="flex justify-between font-extrabold items-center w-full text-gray-300"
              href="https://www.facebook.com/Useless.Doggo/"
            >
              Facebook <FaFacebook size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-neutral-800 border rounded-lg drop-shadow-lg	">
            <a
              className="flex justify-between font-extrabold items-center w-full text-gray-300"
              href="https://github.com/Zurcemozz"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600 border rounded-lg drop-shadow-lg	">
            <Link
              to="contact"
              className="flex justify-between font-extrabold items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
