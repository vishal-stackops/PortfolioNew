import bikeStatic from '../assets/Bike Static Website.png';
import carAnimation from '../assets/Car Animation Website.png';
import jobWebApp from '../assets/JobWebApp.png';
import gradientGenerator from '../assets/Gradient Generator.png';

const Projects = () => {
    const portfolios = [
        {
            id: 1,
            title: 'Job Web App',
            description: 'Job Web App with seeker & recruiter flows: search, save, apply, post jobs; resume uploads included.',
            link: 'https://github.com/vishal-stackops/Job-Web-App',
            src: jobWebApp,
            demo: 'https://talenthubportal.vercel.app/'
        },
        {
            id: 2,
            title: 'Car Animation Website',
            description: 'Interactive static website with engaging car animations.',
            link: 'https://github.com/vishal-stackops/Car-Animation-Static-Website',
            src: carAnimation,
            demo: 'file:///C:/Users/Admin/Desktop/GitHub%20Projects/Cars%20Animation%20Project/index.html'
        },
        {
            id: 3,
            title: 'Bike Static Website',
            description: 'A static website featuring bike showcases with responsive design.',
            link: 'https://github.com/vishal-stackops/Bike-Static--Website',
            src: bikeStatic,
            demo: '#'
        },
        {
            id: 4,
            title: 'Gradient Generator',
            description: 'Generate beautiful background gradient colors for web applications by clicking buttons.',
            link: 'https://github.com/vishal-stackops/Gradient-generator-Project',
            src: gradientGenerator,
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
                    {portfolios.map(({ id, title, description, link, src, demo }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                            <img
                                src={src}
                                alt={title}
                                className="rounded-md duration-200 hover:scale-105 h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                                <p className="text-sm text-gray-400 mb-4 h-20 overflow-hidden text-ellipsis">{description}</p>
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
