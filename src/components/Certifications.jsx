import React from 'react';
import awsCert from '../certifications/AWS Cloud Practitioner Certifiaction.png';
import courseCert from '../certifications/Course_Completion_Certificate.jpg';
import ibmCert from '../certifications/IBM Certificate of Completion for Web Development using HTML.png';
import ibmJavaCert from '../certifications/IBM Certificate of Completion for Java.png';


const Certifications = () => {
    const certifications = [
        {
            id: 1,
            title: 'IBM Certificate of Completion for Java Fundamentals',
            issuer: 'IBM',
            date: '2026',
            description: 'Industry-recognized certification by IBM validating foundational knowledge of Java programming. Covered core Java concepts including data types, variables, operators, control statements, object-oriented programming (OOP), exception handling, and basic application development.',
            src: ibmJavaCert,
            link: 'https://courses.itvedant.skillsnetwork.site/certificates/6e4cf1a8114544af81ee97aa27f41c09'

        },
        {
            id: 2,
            title: 'IBM Certificate of Completion for Web Development using HTML',
            issuer: 'IBM',
            date: '2026',
            description: 'Industry-recognized certification by IBM demonstrating foundational knowledge of web development. Covered HTML5 structure, semantic elements, forms, multimedia integration, and best practices for building accessible and responsive web pages',
            src: ibmCert,
            link: 'https://courses.itvedant.skillsnetwork.site/certificates/f5133d966c9e4525a70ab356a8460d1f'

        },
        {
            id: 3,
            title: 'Master in Full Stack Web Development with Java',
            issuer: 'IT Vedant Pvt Ltd',
            date: '2025',
            description: 'Comprehensive certification covering front-end and back-end web development using Java. The program included HTML, CSS, JavaScript, React, Core Java, Spring Boot, REST APIs, MySQL, and hands-on project development.',
            src: courseCert,
            link: 'https://drive.google.com/file/d/1UAz7XOfviAfQkEFkJ7Ip7VeXuRilV2S_/view?usp=drive_link'
        },
        {
            id: 4,
            title: 'AWS Certified Cloud Practitioner',
            issuer: 'Amazon Web Services',
            date: '2024',
            description: 'Foundational certification validating knowledge of AWS Cloud concepts, core services, security and compliance, pricing models, and basic architectural best practices.',
            src: awsCert,
            link: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/c9babdb7a898418a8759288c80148bd0'
        }

    ];

    return (
        <div
            id="certifications"
            className="bg-gradient-to-b from-gray-800 to-black via-black to-gray-800 w-full text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Certifications
                    </p>
                    <p className="py-6">Achievements and recognitions</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {certifications.map(({ id, title, issuer, date, description, src, link }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                            <img
                                src={src}
                                alt={title}
                                className="rounded-md h-48 w-full object-contain bg-black p-2"
                            />
                            <div className="p-4 h-full">
                                <h3 className="text-xl font-bold mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm mb-1">{issuer}</p>
                                <p className="text-gray-500 text-xs mb-4">{date}</p>
                                <p className="text-gray-300 text-sm mb-4">{description}</p>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Certificate</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certifications;
