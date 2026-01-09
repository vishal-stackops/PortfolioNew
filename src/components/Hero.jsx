import HeroImage from '../assets/vishal.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div
            id="home"
            className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl sm:text-7xl font-bold text-white"
                    >
                        I'm a Full Stack Developer
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-gray-500 py-4 max-w-md"
                    >
                        I’m Vishal Rajput, a passionate Full Stack Developer with a strong foundation in
                        Java, Spring Boot, React, and web technologies. I enjoy building scalable web
                        applications and solving real-world problems through clean and efficient code.
                        I’m eager to learn new technologies and grow as a software professional.
                    </motion.p>

                    <div>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            Vishal Rajput
                            <span className="group-hover:rotate-90 duration-300">
                                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                            </span>
                        </motion.button>
                    </div>
                </div>

                {/* User Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="mt-10 md:mt-0"
                >
                    <img
                        src={HeroImage}
                        alt="my profile"
                        className="rounded-2xl mx-auto w-2/3 md:w-full max-w-sm shadow-lg shadow-cyan-500/50 duration-300 hover:scale-105"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
