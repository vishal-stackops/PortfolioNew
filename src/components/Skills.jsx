import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaNodeJs, FaAws, FaDocker, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiSpringboot, SiMysql, SiMongodb } from 'react-icons/si';

const Skills = () => {
    const techs = [
        {
            id: 1,
            Icon: FaHtml5,
            title: 'HTML',
            style: 'shadow-orange-500',
            color: 'text-orange-500'
        },
        {
            id: 2,
            Icon: FaCss3Alt,
            title: 'CSS',
            style: 'shadow-blue-500',
            color: 'text-blue-500'
        },
        {
            id: 3,
            Icon: FaJs,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
            color: 'text-yellow-500'
        },
        {
            id: 4,
            Icon: FaReact,
            title: 'React',
            style: 'shadow-blue-600',
            color: 'text-blue-600'
        },
        {
            id: 5,
            Icon: SiTailwindcss,
            title: 'Tailwind',
            style: 'shadow-sky-400',
            color: 'text-sky-400'
        },
        {
            id: 6,
            Icon: SiNextdotjs,
            title: 'Next JS',
            style: 'shadow-white',
            color: 'text-white'
        },
        {
            id: 7,
            Icon: FaNodeJs,
            title: 'Node JS',
            style: 'shadow-green-500',
            color: 'text-green-500'
        },
        {
            id: 8,
            Icon: FaGithub,
            title: 'GitHub',
            style: 'shadow-gray-400',
            color: 'text-gray-400'
        },
        {
            id: 9,
            Icon: FaAws,
            title: 'AWS',
            style: 'shadow-orange-400',
            color: 'text-orange-400'
        },
        {
            id: 10,
            Icon: FaDocker,
            title: 'Docker',
            style: 'shadow-blue-400',
            color: 'text-blue-400'
        },
        {
            id: 11,
            Icon: SiSpringboot,
            title: 'Spring Boot',
            style: 'shadow-green-400',
            color: 'text-green-400'
        },
        {
            id: 12,
            Icon: FaJava,
            title: 'Java',
            style: 'shadow-red-400',
            color: 'text-red-400'
        },
        {
            id: 13,
            Icon: SiMysql,
            title: 'MySQL',
            style: 'shadow-blue-300',
            color: 'text-blue-300'
        },
        {
            id: 14,
            Icon: SiMongodb,
            title: 'MongoDB',
            style: 'shadow-green-500',
            color: 'text-green-500'
        },
    ];

    return (
        <div
            id="skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-auto py-20"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <h2 className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skills
                    </h2>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, Icon, title, style, color }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <Icon size={50} className={`mx-auto ${color}`} />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
