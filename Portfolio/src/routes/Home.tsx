import { Github, Send, Linkedin } from 'lucide-react';

// import cv from '../assets/pdfs/Curriculum_vitae.pdf'
import Title from '../components/Title';
import ProgramerIlustration from '../components/ProgramerIlustration';
import { useEffect } from 'react';

function Home() {

    useEffect(() => {
        document.title = 'Tibo Messiaen | Home'
    }, [])

    const handleDownload = () => {
        import('../assets/pdfs/Curriculum_vitae.pdf').then((cv) => {
            window.open(cv.default, '_blank', 'noopener,noreferrer');
        });
    };


    return (
        <div className="flex flex-col items-center lg:flex-row px-4 lg:w-full max-w-8xl gap-6 lg:gap-16">
            <div className=''>
                <Title title="Welcome to my portfolio!" typeAnimation={true} animationDelay={80} />

                <p data-testid="cypress-home-description-1" className='pb-2 text-sm max-w-lg m-auto xl:p-0 xl:text-base xl:max-w-xl xl:pb-3 3xl:text-xl 3xl:max-w-2xl 3xl:pb-5'>
                    Hey, I am Tibo Messiaen, a <b>Full Stack Web & App Developer</b> from Belgium. I have a <b>Bachelor's degree in Multimedia and Creative Technologies</b>. I am a hardworking individual and always eager to learn new things.
                </p>

                <p data-testid="cypress-home-description-2" className='pb-4 text-sm max-w-lg m-auto xl:p-0 xl:text-base xl:max-w-xl xl:pb-6 3xl:text-xl 3xl:max-w-2xl 3xl:pb-8'>
                    This portfolio website is designed to highlight my skills as a full-stack developer and to provide insights into who I am as an individual. It serves as a platform to showcase the projects I have worked on, the technologies I am proficient in, and the creative solutions I bring to the table.
                </p>

                <a data-testid="cypress-home-download-resume" onClick={handleDownload} target="_blank" rel="noopener noreferrer" className='flex cursor-pointer overflow-visible gap-2 px-5 py-2  bg-caribbean-current dark:bg-caribbean-current-dark w-fit text-white rounded mb-6 3xl:mb-8 group/Resume hover:text-orange-peel dark:hover:text-orange-peel-dark'>
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

                <div className='flex gap-2 mb-6 3xl:mb-8'>
                    <a data-testid="cypress-home-experience-card" href="/learning" className='flex flex-col justify-center p-2 w-full max-w-[200px] aspect-[3/2] bg-white dark:bg-dark text-center shadow-md hover:bg-orange-peel dark:hover:bg-orange-peel-dark group/experience'>
                        <div className='flex justify-center items-center text-caribbean-current dark:text-caribbean-current-dark font-bold text-4xl group-hover/experience:text-white'>4+</div>
                        <div className=' font-medium group-hover/experience:text-white'>Years of programming experience</div>
                    </a>
                    <a data-testid="cypress-home-projects-card" href="/projects" className='flex flex-col justify-center p-2 w-full max-w-[200px] aspect-[3/2] bg-white dark:bg-dark text-center shadow-md hover:bg-orange-peel dark:hover:bg-orange-peel-dark group/projects'>
                        <div className='flex justify-center items-center text-caribbean-current dark:text-caribbean-current-dark font-bold text-4xl group-hover/projects:text-white'>11</div>
                        <div className=' font-medium  group-hover/projects:text-white'>Projects</div>
                    </a>
                </div>


                <div data-testid='cypress-home-socials-holder' className='flex justify-evenly bg-caribbean-current dark:bg-caribbean-current-dark text-white py-3 mb-6 3xl:mb-8'>
                    <a data-testid='cypress-home-sociallink-github' href='https://github.com/MessiaenTibo' className='w-full group/Phone' target='_blank'>
                        <Github className='stroke-white group-hover/Phone:stroke-orange-peel dark:group-hover/Phone:stroke-orange-peel-dark   w-12 h-12 m-auto' />
                        <p className='group-hover/Phone:text-orange-peel dark:group-hover/Phone:text-orange-peel-dark m-auto w-fit'>Github</p>
                    </a>

                    <a data-testid='cypress-home-sociallink-email' href='mailto:tibomessiaen@gmail.com' className='border-x w-full group/Email'>
                        <Send className='fill-white group-hover/Email:fill-orange-peel dark:group-hover/Email:fill-orange-peel-dark stroke-caribbean-current dark:stroke-caribbean-current-dark w-12 h-12 m-auto' />
                        <p className='group-hover/Email:text-orange-peel dark:group-hover/Email:text-orange-peel-dark m-auto w-fit'>Email</p>
                    </a>

                    <a data-testid='cypress-home-sociallink-linkedin' href='https://www.linkedin.com/in/tibo-messiaen/' className='w-full group/Linkedin' target='_blank'>
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

export default Home
