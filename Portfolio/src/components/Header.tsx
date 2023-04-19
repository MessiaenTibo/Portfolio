import { useEffect, useState } from 'react'
import { Home, User, Scroll, Tv2, } from 'lucide-react';

import { Link } from 'react-router-dom';

import "../../src/assets/styles/mobileNavigation.scss"

interface Props {
  title: string,
  }

export default ({title}:Props) => {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    if(window.location.href.includes('home')) setActive('Home');
    if(window.location.href.includes('about')) setActive('About me');
    if(window.location.href.includes('learning')) setActive('Learning Adventure');
    if(window.location.href.includes('projects')) setActive('Projects');
  }, [])

  const body = document.querySelector("body");

  const handleClick = () => {
    if(body) body.classList.toggle("has-mobile-nav");
  }

  const selectHome = () => {
    setActive('Home');
  }

  const selectAbout = () => {
    setActive('About me');
  }

  const selectLearning = () => {
    setActive('Learning Adventure');
  }

  const selectProjects = () => {
    setActive('Projects');
  }

  return (
    <header className="flex place-content-between bg-white px-4 content-center text-center place-items-center h-12 shadow-header xl:h-16 xl:px-6 2xl:px-24">
      <div className='hidden sm:flex '>
        <Link to='/' onClick={selectHome}><h1 className='text-2xl font-medium xl:text-3xl'>{title}</h1></Link>
      </div>
      <div className='hidden sm:flex xl:text-xl'>
        <ul>
          {active === 'About me' ?
            <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/about'>About me</Link></li> :
            <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/about' onClick={selectAbout}>About me</Link></li>}

          {active === 'Learning Adventure' ?
            <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/learning'>Learning Adventure</Link></li> :
            <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/learning' onClick={selectLearning}>Learning Adventure</Link></li>}
          
          {active === 'Projects' ?
            <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/projects'>Projects</Link></li> :
            <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/projects' onClick={selectProjects}>Projects</Link></li>}

        </ul>
      </div>
      <div className='flex w-full sm:hidden xl:text-xl'>
        <ul className='flex place-content-around w-full '>
            {active === 'Home' ?
              <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/'><Home className='inline p-2 stroke-orange-peel' size={50}/></Link></li> :
              <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/' onClick={selectHome}><Home className='inline p-2 stroke-caribbean-current' size={50}/></Link></li>}
            {active === 'About me' ?
              <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/about'><User className='inline p-2 stroke-orange-peel' size={50}/></Link></li> :
              <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/about' onClick={selectAbout}><User className='inline p-2 stroke-caribbean-current' size={50}/></Link></li>}

            {active === 'Learning Adventure' ?
              <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/learning'><Scroll className='inline p-2 stroke-orange-peel' size={50}/></Link></li> :
              <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/learning' onClick={selectLearning}><Scroll className='inline p-2 stroke-caribbean-current' size={50}/></Link></li>}
            
            {active === 'Projects' ?
              <li className='inline'><Link className='p-3 xl:p-4 border-b-4 border-orange-peel' to='/projects'><Tv2 className='inline p-2 stroke-orange-peel' size={50}/></Link></li> :
              <li className='inline'><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current' to='/projects' onClick={selectProjects}><Tv2 className='inline p-2 stroke-caribbean-current' size={50}/></Link></li>}

          </ul>
      </div>
    </header>
  );
};