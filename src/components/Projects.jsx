import { useState, useEffect } from 'react';
import bikeStatic from '../assets/Bike Static Website.png';
import carAnimation from '../assets/Car Animation Website.png';
import jobWebApp from '../assets/JobWebApp.png';
import jobWebApp1 from '../assets/JobWebApp1.png';
import jobWebApp2 from '../assets/JobWebApp2.png';
import jobWebApp3 from '../assets/JobWebApp3.png';
import jobWebApp4 from '../assets/JobWebApp4.png';
import jobWebApp5 from '../assets/JobWebApp5.png';
import jobWebApp6 from '../assets/JobWebApp6.png';
import jobWebApp7 from '../assets/JobWebApp7.png';
import jobWebApp8 from '../assets/JobWebApp8.png';
import jobWebApp9 from '../assets/JobWebApp9.png';
import gradientGenerator from '../assets/Gradient Generator.png';
import emsProject from '../assets/EMS.png';
import emsProject1 from '../assets/EMS1.png';
import emsProject2 from '../assets/EMS2.png';
import emsProject3 from '../assets/EMS3.png';
import emsProject4 from '../assets/EMS4.png';
import emsProject5 from '../assets/EMS5.png';
import emsProject6 from '../assets/EMS6.png';
import emsProject7 from '../assets/EMS7.png';
import emsProject8 from '../assets/EMS8.png';
import emsProject9 from '../assets/EMS9.png';

const ProjectCard = ({ id, title, description, link, images, demo }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    // Auto-slide effect on hover
    useEffect(() => {
        let interval;
        if (isHovering && images.length > 1) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 1500); // Change image every 1.5 seconds
        }
        return () => clearInterval(interval);
    }, [isHovering, images.length]);

    return (
        <div className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
            <div
                className="relative h-64 w-full overflow-hidden rounded-t-md bg-gray-900"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => {
                    setIsHovering(false);
                    setCurrentImageIndex(0);
                }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`${title} - ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-500 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}

                {/* Image indicators */}
                {images.length > 1 && (
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
                        {images.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                    ? 'bg-white w-6'
                                    : 'bg-gray-400'
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden text-ellipsis">
                    {description}
                </p>
                <div className="flex items-center justify-center">
                    <a href={demo} target="_blank" rel="noreferrer" className="w-1/2">
                        <button className="w-full px-6 py-2 duration-200 hover:scale-105 border border-gray-500 rounded-l-md hover:bg-gray-700">
                            Demo
                        </button>
                    </a>
                    <a href={link} target="_blank" rel="noreferrer" className="w-1/2">
                        <button className="w-full px-6 py-2 duration-200 hover:scale-105 border border-gray-500 rounded-r-md hover:bg-gray-700">
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            title: 'Employee Management System',
            description: 'Full-stack EMS with employee, department, payroll, and analytics management. Features role-based access control and admin approval workflow.',
            link: 'https://github.com/vishal-stackops/EMS-Frontend',
            images: [emsProject, emsProject1, emsProject2, emsProject3, emsProject4, emsProject5, emsProject6, emsProject7, emsProject8, emsProject9],
            demo: 'https://empify-ems.vercel.app/login'
        },
        {
            id: 2,
            title: 'Job Web App',
            description: 'Job Web App with seeker & recruiter flows: search, save, apply, post jobs; resume uploads included.',
            link: 'https://github.com/vishal-stackops/Job-Web-App',
            images: [jobWebApp, jobWebApp1, jobWebApp2, jobWebApp3, jobWebApp4, jobWebApp5, jobWebApp6, jobWebApp7, jobWebApp8, jobWebApp9],
            demo: 'https://talenthubportal.vercel.app/'
        },
        {
            id: 3,
            title: 'Car Animation Website',
            description: 'Interactive static website with engaging car animations.',
            link: 'https://github.com/vishal-stackops/Car-Animation-Static-Website',
            images: [carAnimation], // Add more images here
            demo: 'file:///C:/Users/Admin/Desktop/GitHub%20Projects/Cars%20Animation%20Project/index.html'
        },
        {
            id: 4,
            title: 'Bike Static Website',
            description: 'A static website featuring bike showcases with responsive design.',
            link: 'https://github.com/vishal-stackops/Bike-Static--Website',
            images: [bikeStatic], // Add more images here
            demo: '#'
        },
        {
            id: 5,
            title: 'Gradient Generator',
            description: 'Generate beautiful background gradient colors for web applications by clicking buttons.',
            link: 'https://github.com/vishal-stackops/Gradient-generator-Project',
            images: [gradientGenerator], // Add more images here
            demo: '#'
        },
    ];

    return (
        <div
            id="projects"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map((project) => (
                        <ProjectCard key={project.id} {...project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
