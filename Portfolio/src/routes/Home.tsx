import { Download, Github, Send, Linkedin, Mail, MapPin, Globe, Cake, UserPlus } from 'lucide-react';

import profileIcon from '../assets/imgs/profileIcon.png'
import cv from '../assets/pdfs/Curriculum_vitae.pdf'
import ContactInfo from '../components/ContactInfo';
import EducationInfo from '../components/EducationInfo';
import Title from '../components/Title';
import { useEffect } from 'react';

function Home() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | Home'
  }, [])

  return (
    <div className="Home">

      <Title title="Welcome" typeAnimation={true} />

      <p className='text-center text-sm px-4 pb-4 max-w-lg m-auto xl:p-0 xl:text-base xl:max-w-xl xl:pb-6 2xl:text-xl 2xl:max-w-2xl 2xl:pb-8'>
        Hey, I am Tibo Messiaen, a full stack web & app developer from Belgium. I have a Bachelor's degree in Multimedia and Creative Technologies. I am a hardworking individual and always eager to learn new things.
      </p>

      <a href={cv} target="_blank" className='flex overflow-visible place-items-center place-content-center gap-2 px-5 py-2 bg-caribbean-current dark:bg-caribbean-current-dark w-fit m-auto text-white rounded mb-16 group/Resume hover:text-orange-peel dark:hover:text-orange-peel-dark'>
        <p className=''>Resume</p>
        {/* <Download className='' /> */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-download overflow-visible">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <g className=' motion-safe:group-hover/Resume:animate-custom-bounce'>
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" x2="12" y1="15" y2="3" />
          </g>
        </svg>
      </a>

      <div className='xl:flex xl:mx-24 motion-safe:animate-fade-in-from-bottom'>
        <div className='w-full bg-caribbean-current dark:bg-caribbean-current-dark text-center max-w-md m-auto xl:inline-block xl:h-[45.85rem] xl:mt-0 xl:mr-6'>
          <div className='p-10 text-white border-b border-whtie'>
            <img src={profileIcon} alt="Profile icon" className='rounded-full w-16 h-16 m-auto mb-4' />

            <h2 className='text-2xl'>Tibo Messiaen</h2>

            <h3 className='text-sm'>Full stack web & app developer</h3>

          </div>

          <div className='flex justify-evenly text-white p-4'>
            <a href='https://github.com/MessiaenTibo' className='w-full group/Phone' target='_blank'>
              <Github className='stroke-white group-hover/Phone:stroke-orange-peel dark:group-hover/Phone:stroke-orange-peel-dark   w-12 h-12 m-auto' />
              <p className='group-hover/Phone:text-orange-peel dark:group-hover/Phone:text-orange-peel-dark'>Github</p>
            </a>

            <a href='mailto:tibomessiaen@gmail.com' className='border-x w-full group/Email'>
              <Send className='fill-white group-hover/Email:fill-orange-peel dark:group-hover/Email:fill-orange-peel-dark stroke-caribbean-current dark:stroke-caribbean-current-dark w-12 h-12 m-auto' />
              <p className='group-hover/Email:text-orange-peel dark:group-hover/Email:text-orange-peel-dark'>Email</p>
            </a>

            <a href='https://www.linkedin.com/in/tibo-messiaen/' className='w-full group/Linkedin' target='_blank'>
              <Linkedin className='fill-white group-hover/Linkedin:fill-orange-peel dark:group-hover/Linkedin:fill-orange-peel-dark stroke-caribbean-current dark:stroke-caribbean-current-dark w-12 h-12 m-auto' />
              <p className='group-hover/Linkedin:text-orange-peel dark:group-hover/Linkedin:text-orange-peel-dark'>linked-in</p>
            </a>

          </div>

          <div className='bg-white dark:bg-dark p-8 mb-16 xl:mb-0'>

            <ContactInfo icon={Mail}
              title="tibomessiaen@gmail.com"
              subtitle="Email" />

            <ContactInfo icon={MapPin}
              title="Sint-Eloois-Vijve - West-Flanders"
              title2="- Belgium"
              subtitle="Location" />

            <ContactInfo icon={Globe}
              title="www.tibomessiaen.be"
              subtitle="Website" />

            <ContactInfo icon={Cake}
              title="26/02/2003"
              subtitle="Birthday" />

            <a href="/Tibomessiaen.vcf" download className='flex place-items-center place-content-center bg-caribbean-current dark:bg-caribbean-current-dark w-fit m-auto rounded text-white hover:text-orange-peel dark:hover:text-orange-peel-dark'>
              <UserPlus className='text-2xl m-4' />
              <p className='m-4 ml-0'>DOWNLOAD MY VCARD</p>
            </a>

          </div>

        </div>
        <div className='bg-white dark:bg-dark relative overflow-hidden p-12 m-auto mb-16 max-w-lg xl:h-[45.85rem] xl:max-w-3xl xl:flex xl:flex-start'>
          <div className='inline-block xl:mr-12'>
            <h2 className='text-2xl text-center text-caribbean-current dark:text-caribbean-current-dark font-bold mb-6'>Education</h2>

            <EducationInfo title='Howest - Bechelor'
              subtitle='Multimedia & creative technologies - Next Web Developer'
              years='2021 - 2024' />

            <EducationInfo title='VTI Waregem'
              subtitle='Industrial Information and Communication Technologie'
              years='2019 - 2021' />

            <EducationInfo title='VTI Waregem'
              subtitle='Electricity and Electronics'
              years='2017 - 2019' />

            <EducationInfo title='VTI Waregem'
              subtitle='Industrial Sciences'
              years='2015 - 2017' />
          </div>

          <div className='inline-block'>
            <h2 className='text-2xl text-center text-caribbean-current dark:text-caribbean-current-dark  font-bold mb-6 mt-12 xl:mt-0'>Skills</h2>

            <ol className='list-disc pl-4'>
              <li>Full stack developer</li>
              <li>App developer</li>
              <li>Desktop applications</li>
            </ol>

          </div>

          <div className='invisible xl:visible absolute bg-caribbean-current dark:bg-caribbean-current-dark h-48 w-200 -rotate-45 bottom-0'>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
