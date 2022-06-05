import React from 'react'

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-neutral-800 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/d5e6ba05-26de-41b8-8baa-4d19578a5785"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-800 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">Shoot me an email! </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          placeholder="Message"
          name="message"
          rows="10"
        />
        <button className="text-white border-2 hover:bg-blue-800 hover:border-blue-800 px-4 py-8 my-8 mx-auto flex items-center rounded-lg">
          Contact me!
        </button>
      </form>
    </div>
  )
}

export default Contact
