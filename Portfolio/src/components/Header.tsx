import { useEffect, useState } from 'react'
import { Home, User, Scroll, Tv2, Contact } from 'lucide-react';

import { Link } from 'react-router-dom';
import ToggleDarkmode from './ToggleDarkmode';

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

  // const handleClick = () => {
  //   if(body) body.classList.toggle("has-mobile-nav");
  // }

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

  const selectContact = () => {
    setActive('Contact');
  }

  return (
    <header className="flex place-content-between bg-white dark:bg-dark dark:text-white px-4 content-center text-center place-items-center h-12 shadow-header dark:shadow-headerDark xl:h-16 xl:px-6 2xl:px-24">
      <div className='hidden sm:flex '>
        <Link to='/' onClick={selectHome}><h1 className='text-2xl font-medium xl:text-3xl hover:text-caribbean-current dark:hover:text-caribbean-current-dark'>{title}</h1></Link>
      </div>
      <div className='hidden sm:flex xl:text-xl'>
        <ul className='flex justify-center items-center'>
          {active === 'About me' ?
            <li><Link className='p-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark text-orange-peel dark:text-orange-peel-dark' to='/about'>About me</Link></li> :
            <li><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark hover:text-caribbean-current dark:hover:text-caribbean-current-dark' to='/about' onClick={selectAbout}>About me</Link></li>}

          {active === 'Learning Adventure' ?
            <li><Link className='p-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark text-orange-peel dark:text-orange-peel-dark' to='/learning'>Learning Adventure</Link></li> :
            <li><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark hover:text-caribbean-current dark:hover:text-caribbean-current-dark' to='/learning' onClick={selectLearning}>Learning Adventure</Link></li>}
          
          {active === 'Projects' ?
            <li><Link className='p-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark text-orange-peel dark:text-orange-peel-dark' to='/projects'>Projects</Link></li> :
            <li><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark hover:text-caribbean-current dark:hover:text-caribbean-current-dark' to='/projects' onClick={selectProjects}>Projects</Link></li>}
          {active === 'Contact' ?
            <li><Link className='p-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark text-orange-peel dark:text-orange-peel-dark' to='/projects'>Contact</Link></li> :
            <li><Link className='p-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark hover:text-caribbean-current dark:hover:text-caribbean-current-dark' to='/contact' onClick={selectContact}>Contact</Link></li>}
          
          <li><ToggleDarkmode /></li>
        </ul>
      </div>
      <div className='flex w-full sm:hidden xl:text-xl'>
        <ul className='flex items-center place-content-around w-full '>
            {active === 'Home' ?
              <li><Link className='py-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark' to='/'><Home className='inline p-2 stroke-orange-peel dark:stroke-orange-peel-dark' size={50}/></Link></li> :
              <li><Link className='py-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark' to='/' onClick={selectHome}><Home className='inline p-2 stroke-caribbean-current dark:stroke-caribbean-current-dark' size={50}/></Link></li>}
            {active === 'About me' ?
              <li><Link className='py-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark' to='/about'><User className='inline p-2 stroke-orange-peel dark:stroke-orange-peel-dark' size={50}/></Link></li> :
              <li><Link className='py-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark' to='/about' onClick={selectAbout}><User className='inline p-2 stroke-caribbean-current dark:stroke-caribbean-current-dark' size={50}/></Link></li>}

            {active === 'Learning Adventure' ?
              <li><Link className='py-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark' to='/learning'><Scroll className='inline p-2 stroke-orange-peel dark:stroke-orange-peel-dark' size={50}/></Link></li> :
              <li><Link className='py-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark' to='/learning' onClick={selectLearning}><Scroll className='inline p-2 stroke-caribbean-current dark:stroke-caribbean-current-dark' size={50}/></Link></li>}
            
            {active === 'Projects' ?
              <li><Link className='py-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark' to='/projects'><Tv2 className='inline p-2 stroke-orange-peel dark:stroke-orange-peel-dark' size={50}/></Link></li> :
              <li><Link className='py-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark' to='/projects' onClick={selectProjects}><Tv2 className='inline p-2 stroke-caribbean-current dark:stroke-caribbean-current-dark' size={50}/></Link></li>}
            
            {active === 'Contact' ?
              <li><Link className='py-3 xl:p-4 border-b-4 border-orange-peel dark:border-orange-peel-dark' to='/projects'><Contact className='inline p-2 stroke-orange-peel dark:stroke-orange-peel-dark' size={50}/></Link></li> :
              <li><Link className='py-3 xl:p-4 hover:border-b-4 border-caribbean-current dark:border-caribbean-current-dark' to='/contact' onClick={selectContact}><Contact className='inline p-2 stroke-caribbean-current dark:stroke-caribbean-current-dark' size={50}/></Link></li>}

            <li><ToggleDarkmode /></li>
          </ul>
      </div>
    </header>
  );
};