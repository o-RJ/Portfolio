import image from "/public/image.jpg"
import { motion } from "framer-motion"
import AnimatedText from './AnimatedText'

{/* home/about me section */}
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-31">
      <div className="flex flex-col items-center justify-center gap-10 text-white">

        <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        >
        <img src={image} alt="" className="w-[300px] cursor-pointer rounded-full shadow-xl shadow-gray-700 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-gray-500 md:w-[350px]"/>
        </motion.div>
        
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} 
        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-green-300 to-blue-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">Robert Banks Jr.</h1>
          <h3 className="text-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl"><AnimatedText /></h3>
          <p className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">
          While attending Louisiana Tech University, I chose to deepen my knowledge in Computer Science. I have experience designing and developing beautiful, functional websites as a web developer. In addition, I am passionate about cybersecurity and am actively seeking opportunities to start my career in the cybersecurity or software development field.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero