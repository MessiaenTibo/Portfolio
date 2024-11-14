import { Download, Github, Send, Linkedin, Mail, MapPin, Globe, Cake, UserPlus } from 'lucide-react';

import profileIcon from '../assets/imgs/profileIcon.png'
import cv from '../assets/pdfs/Curriculum_vitae.pdf'
import ContactInfo from '../components/ContactInfo';
import EducationInfo from '../components/EducationInfo';
import Title from '../components/Title';
import { Link } from 'react-router-dom';
import ProgramerIlustration from '../components/ProgramerIlustration';
import { useEffect } from 'react';

function HomeTwo() {

    useEffect(() => {
        document.title = 'Tibo Messiaen | Home'
    }, [])

    return (
        <div className="flex flex-col items-center lg:flex-row px-4 lg:w-full max-w-8xl gap-6 lg:gap-16">
            <div className=''>
                <Title title="Welcome to my portfolio!" typeAnimation={true} animationDelay={80} />

                <p className='pb-4 text-sm max-w-lg m-auto xl:p-0 xl:text-base xl:max-w-xl xl:pb-6 2xl:text-xl 2xl:max-w-2xl 2xl:pb-8'>
                    Hey, I am Tibo Messiaen, a <b>Full Stack Web & App Developer</b> from Belgium. I have a <b>Bachelor's degree in Multimedia and Creative Technologies</b>. I am a hardworking individual and always eager to learn new things.
                </p>

                <a href={cv} target="_blank" className='flex overflow-visible gap-2 px-5 py-2  bg-caribbean-current dark:bg-caribbean-current-dark w-fit text-white rounded mb-8 group/Resume hover:text-orange-peel dark:hover:text-orange-peel-dark'>
                    <p className=''>Resume</p>
                    {/* <Download className='' /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-download overflow-visible">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <g className=' motion-safe:group-hover/Resume:animate-custom-bounce'>
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" x2="12" y1="15" y2="3" />
                        </g>
                    </svg>
                </a>

                <div className='flex gap-2 mb-8'>
                    <a href="/learning" className='flex flex-col justify-center p-2 w-full max-w-[200px] aspect-[3/2] bg-white text-center shadow-md hover:bg-orange-peel group/experience transition-colors duration-200'>
                        <div className='flex justify-center items-center text-caribbean-current font-bold text-4xl group-hover/experience:text-white transition-colors duration-200'>4+</div>
                        <div className=' font-medium group-hover/experience:text-white transition-colors duration-200'>Years of experience</div>
                    </a>
                    <a href="/projects" className='flex flex-col justify-center p-2 w-full max-w-[200px] aspect-[3/2] bg-white text-center shadow-md hover:bg-orange-peel group/projects  transition-colors duration-200'>
                        <div className='flex justify-center items-center text-caribbean-current font-bold text-4xl group-hover/projects:text-white transition-colors duration-200'>11</div>
                        <div className=' font-medium  group-hover/projects:text-white transition-colors duration-200'>Projects</div>
                    </a>
                </div>


                <div className='flex justify-evenly bg-caribbean-current text-white py-3 mb-8'>
                    <a href='https://github.com/MessiaenTibo' className='w-full group/Phone' target='_blank'>
                        <Github className='stroke-white group-hover/Phone:stroke-orange-peel dark:group-hover/Phone:stroke-orange-peel-dark   w-12 h-12 m-auto' />
                        <p className='group-hover/Phone:text-orange-peel dark:group-hover/Phone:text-orange-peel-dark m-auto w-fit'>Github</p>
                    </a>

                    <a href='mailto:tibomessiaen@gmail.com' className='border-x w-full group/Email'>
                        <Send className='fill-white group-hover/Email:fill-orange-peel dark:group-hover/Email:fill-orange-peel-dark stroke-caribbean-current dark:stroke-caribbean-current-dark w-12 h-12 m-auto' />
                        <p className='group-hover/Email:text-orange-peel dark:group-hover/Email:text-orange-peel-dark m-auto w-fit'>Email</p>
                    </a>

                    <a href='https://www.linkedin.com/in/tibo-messiaen/' className='w-full group/Linkedin' target='_blank'>
                        <Linkedin className='fill-white group-hover/Linkedin:fill-orange-peel dark:group-hover/Linkedin:fill-orange-peel-dark stroke-caribbean-current dark:stroke-caribbean-current-dark w-12 h-12 m-auto' />
                        <p className='group-hover/Linkedin:text-orange-peel dark:group-hover/Linkedin:text-orange-peel-dark m-auto w-fit'>linked-in</p>
                    </a>

                </div>
            </div>
            <div className='m-auto w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
                <ProgramerIlustration />
            </div>
        </div>
    )
}

export default HomeTwo
