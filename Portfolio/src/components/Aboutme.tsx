import Icon from './Icon';

import placeholder from '../assets/imgs/placeholder.png'
import AboutMe from '../assets/imgs/AboutMe.jpg'

import { Gamepad2, Waves, Target, Code2 } from 'lucide-react';

// import CloudinaryImage from '../components/CloudinaryImage'
import ImageCarousel from '../components/ImageCarousel'

export default () => {

  return (
    <div className='my-4 p-10 bg-white shadow-md dark:bg-dark lg:border-l-8 border-caribbean-current dark:border-caribbean-current-dark lg:m-12 2xl:max-w-8xl 2xl:mx-auto overflow-hidden relative'>
      <div className='flex flex-col lg:flex-row items-center xl-items-start'>
        <div className='lg:w-1/2'>
          <div className=' motion-safe:animate-fade-in-medium'>
            <h1 data-testid="cypress-title-1" className='text-3xl font-bold mb-6 text-caribbean-current dark:text-caribbean-current-dark 2xl:text-4xl'>About me</h1>
            <h2 data-testid="cypress-title-2" className='text-xl font-bold mb-4 2xl:text-2xl'>Hello, I'm Tibo</h2>
            <p data-testid="cypress-about-description-1" className='mb-6 2xl:text-xl'>I always liked the idea of being able to code my own app's and possible solutions for many problems. I can always program my app's exactly the way I want it to be, and you never have to pay any subscription fees.</p>
            <p data-testid="cypress-about-description-2" className='mb-6 2xl:text-xl'>These coding skills complement very well with my other hobbies like swimming and darting. I created my own app to keep track of all my played dart games.</p>
            <p data-testid="cypress-about-description-3" className='mb-6 2xl:text-xl'>I already have a very good application to track my swims and my progression (garmin connect). But still I always have the possibilty to create my own and improved version of it.</p>
          </div>

          <div className=''>
            <h2 data-testid="cypress-title-3" className='text-xl font-bold mb-4'>My hobbies</h2>
            <div data-testid="cypress-about-hobbys-holder" className='flex flex-wrap'>
              <div data-testid="cypress-about-hobby-1" className='flex items-center motion-safe:animate-fade-in-from-left-1'>
                <Code2 className='stroke-orange-peel dark:stroke-orange-peel-dark rounded-full bg-anti-flash-white dark:bg-anti-flash-white-dark p-2  m-2 xsm:h-14 xsm:w-14 h-10 w-10' />
                <h2 className=' pl-2 pr-4 xsm:text-xl'>Code</h2>
              </div>
              <div data-testid="cypress-about-hobby-2" className='flex items-center motion-safe:animate-fade-in-from-left-2'>
                <Waves className='stroke-orange-peel dark:stroke-orange-peel-dark rounded-full bg-anti-flash-white dark:bg-anti-flash-white-dark p-2  m-2 xsm:h-14 xsm:w-14 h-10 w-10' />
                <h2 className=' pl-2 pr-4 xsm:text-xl'>Swimming</h2>
              </div>
              <div data-testid="cypress-about-hobby-3" className='flex items-center motion-safe:animate-fade-in-from-left-3'>
                <Target className='stroke-orange-peel dark:stroke-orange-peel-dark rounded-full bg-anti-flash-white dark:bg-anti-flash-white-dark p-2  m-2 xsm:h-14 xsm:w-14 h-10 w-10' />
                <h2 className=' pl-2 pr-4 xsm:text-xl'>Darts</h2>
              </div>
              <div data-testid="cypress-about-hobby-4" className='flex items-center motion-safe:animate-fade-in-from-left-4'>
                <Gamepad2 className='stroke-orange-peel dark:stroke-orange-peel-dark rounded-full bg-anti-flash-white dark:bg-anti-flash-white-dark p-2  m-2 xsm:h-14 xsm:w-14 h-10 w-10' />
                <h2 className=' pl-2 pr-4 xsm:text-xl'>Gaming</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 lg:p-4 w-full motion-safe:animate-fade-in-medium'>
          {/* <CloudinaryImage link='AboutMe_rhhb8j.png' alt='AboutMe' imgClass='rounded-3xl shadow-xl w-full'/> */}
          <ImageCarousel />
        </div>
      </div>
    </div>
  );
};