import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
    return (
        <div
            id="contact"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Get in touch with me</p>
                </div>

                <div className="flex flex-col gap-6 justify-center items-start md:items-center pl-10 md:pl-0">
                    <div className="flex items-center gap-4 text-xl">
                        <MdEmail size={30} className="text-cyan-500" />
                        <span>vishal.rajput050403@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <MdPhone size={30} className="text-cyan-500" />
                        <span>+91 9325628255</span>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <a href="#" target="_blank" rel="noreferrer" className="flex items-center gap-4 duration-200 hover:scale-110">
                            <FaLinkedin size={30} className="text-cyan-500" />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-xl">
                        <a href="https://github.com/vishal-stackops" target="_blank" rel="noreferrer" className="flex items-center gap-4 duration-200 hover:scale-110">
                            <FaGithub size={30} className="text-cyan-500" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
