const contact = () => {
  return (
    <div id="contact" className="flex min-h-[70vh] min-w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3 space-y-6 p-14">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="font-light text-white bg-clip-text text-transparent">Get in Touch?</span> 
        </h1>

        <p className="text-center text-lg font-semibold text-gray-500 cursor-pointer transition-all duration-300 hover:text-white">
          Feel free to send me an E-mail and I'll get back to you as soon as possible.
          <br />
              rjbanks38@gmail.com
        </p>

        <a href="mailto:rjbanks38@gmail.com" className="text-nowrap- rounded-lg border border-blue-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-blue-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-600">Contact Me</a>
      </div>
    </div>
  )
}

export default contact