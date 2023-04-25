import Icon from './Icon';

import placeholder from '../assets/imgs/placeholder.png'
import AboutMe from '../assets/imgs/AboutMe.jpg'

import { Gamepad2, Waves, Target, Code2 } from 'lucide-react';

export default () => {

  return (
    <div className='my-4 p-10 bg-white lg:m-12 2xl:max-w-8xl 2xl:mx-auto overflow-hidden relative'>
      <div className='flex flex-col lg:flex-row items-center xl-items-start'>
        <div className='lg:w-1/2'>
          <div className=''>
            <h1 className='text-3xl font-bold mb-6 2xl:text-4xl'>About me</h1>
            <h2 className='text-xl font-bold mb-4 2xl:text-2xl'>Hello, I'm Tibo</h2>
            <p className='mb-6 2xl:text-xl'>I always liked the idea of being able to code my own app's and possible solutions for many problems. I can always program my app's exactly the way I wnat it to be, and you never have to pay any subscription fees.</p>
            <p className='mb-6 2xl:text-xl'>These coding skills complement very well with my other hobbies like swimming and darting. I created my own app to keep track of all my played dart games.</p>
            <p className='mb-6 2xl:text-xl'>I already have a very good application to track my swims and my progression (garmin connect). But still I always have the possibilty to create my own and improved version of it.</p>
          </div>

          <div>
            <h2 className='text-xl font-bold mb-4'>My hobbies</h2>
            <div className='xsm:inline-block'>
              <div className='inline-block'>
                <Code2 className='stroke-orange-peel rounded-full bg-anti-flash-white p-2 inline-block m-2 xsm:h-16 xsm:w-16' size={50} />
                <h2 className='inline-block pl-2 pr-4 xsm:text-xl'>Code</h2>
              </div>
              <div className='inline-block'>
                <Waves className='stroke-orange-peel rounded-full bg-anti-flash-white p-2 inline-block m-2 xsm:h-16 xsm:w-16' size={50} />
                <h2 className='inline-block pl-2 pr-4 xsm:text-xl'>Swimming</h2>
              </div>
            </div>
            <div className='xsm:inline-block'>
              <div className='inline-block'>
                  <Target className='stroke-orange-peel rounded-full bg-anti-flash-white p-2 inline-block m-2 xsm:h-16 xsm:w-16' size={50} />
                  <h2 className='inline-block pl-2 pr-4 xsm:text-xl'>Darts</h2>
              </div>
              <div className='inline-block'>
                  <Gamepad2 className='stroke-orange-peel rounded-full bg-anti-flash-white p-2 inline-block m-2 xsm:h-16 xsm:w-16' size={50} />
                  <h2 className='inline-block pl-2 pr-4 xsm:text-xl'>Gaming</h2>
              </div>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 lg:p-4'>
          <img src={AboutMe} alt="Image" className=' rounded-3xl shadow-xl'/>
        </div>
      </div>
    </div>
  );
};