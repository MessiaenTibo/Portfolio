import { useEffect, useState } from 'react';

// Videos
import TeamProject1vs1Demo from '../assets/videos/TeamProject1vs1Demo.mp4'
import TeamProjectShuttleRunDemo from '../assets/videos/TeamProjectShuttleRunDemo.mp4'
import ProjectOneDemo from '../assets/videos/ProjectOneDemo.mp4'

// Components
import Title from '../components/Title'
import ProjectInfo from '../components/ProjectInfo'
import CloudinaryImage from '../components/CloudinaryImage'
import ScrollArrow from '../components/ScrollArrow';


function Projects() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | Projects'
  }, [])

  

  return (
    <div className="Projects mx-4 md:mx-8 2xl:max-w-screen-2xl 2xl:m-auto">
      <Title title="Welcome"/>

        <div className='flex flex-col md:gap-8  md:flex-row-reverse'>
            <div className='flex items-center w-full pb-4 md:w-1/2 xl:p-12'>
              <CloudinaryImage link="AxxesConferenceTool_jxi8d4.png" alt="Portfolio Mockup" divClass='w-full'/>
            </div>
            <div className='w-full pb-12 md:w-1/2 place-self-center xl:p-12'>
              <ProjectInfo title="Industry project" paragraph={`Two classmates and I created this website as an Industry project. We got to work with the company Axxes, a IT consultancy. Axxes hosts a yearly conference for their employees, so that they can listen and learn from each other, and they wanted to digitalis this. So it was up to us to create a website, app and backend system, over the corse of 6 weeks.`} technologies={[{title:"Front-end", technologies:["React","HTML","Tailwindcss","Typescript"]},{title:"Back-end", technologies:["HTTP",".NET", "Firebase auth", "Bicep"]},{title:"Azure", technologies:["WebApp","KeyVault","BlobStorage","CosmosDB"]}]} footnote="Website:" footnoteLink={<a href="https://axxes-conference-tool.netlify.app/" target='_blank'>Axxes-Conference-Tool</a>} footnoteTwo='App:' footnoteLinkTwo={<a href="https://expo.dev/@tibomessiaen/Haxx?serviceType=classic&distribution=expo-go" target='_blank'>Expo dev QR-code</a>}/>
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:gap-8'>
            <div className='flex items-center w-full pb-4 md:w-1/2 xl:p-12'>
              <CloudinaryImage link="PortfolioMockup_qjs7ns.png" alt="Portfolio Mockup" divClass='w-full'/>
            </div>
            <div className='w-full pb-12 md:w-1/2 place-self-center xl:p-12'>
              <ProjectInfo title="Portfolio" paragraph="I created my own website portfolio" technologies={[{title:"Front-end", technologies:["HTML","Tailwindcss","Typescript"]}]} footnote="Website:" footnoteLink={<a href="https://tibomessiaen.netlify.app/" target='_blank'>Portfolio</a>}/>
            </div>
        </div>

        <div className='flex flex-colmd:gap-8 md:flex-row-reverse'>
            <div className='flex w-full pb-4 md:w-1/2 xl:p-12'>
              <video title='1VS1' className='xl:w-1/2 p-2' src={TeamProject1vs1Demo} controls>Your browser does not support the video tag.</video>
              <video title='1VS1' className='hidden xl:flex w-1/2 p-2' src={TeamProjectShuttleRunDemo} controls>Your browser does not support the video tag.</video>
            </div>
            <div className='w-full pb-12 md:w-1/2 place-self-center xl:p-12'>
              <ProjectInfo title="Team project" paragraph="We created this project in team. The assignment was to create an interactive game with poles. The main goal was to make people move. With the focus on children (age 8-18). I designed and created the website, I also handled the communication with the backend." technologies={[{title:"Design", technologies:["Adobe XD","Photoshop"]},{title:"Front-end", technologies:["HTML","CSS","Javascript"]},{title:"Back-end", technologies:["HTTP","MQTT","Socket IO"]}]}/>
            </div>
        </div>

        <div className='flex flex-col md:flex-row md:gap-8'>
            <div className='w-full pb-4 md:w-1/2 xl:p-12'>
             <video title='Shower monitor' src={ProjectOneDemo} controls>Your browser does not support the video tag.</video>
            </div>
            <div className='w-full pb-12 md:w-1/2 place-self-center xl:p-12'>
              <ProjectInfo title="Project One" paragraph="Dit is project one!" technologies={[{title:"Front-end", technologies:["HTML","CSS"]},{title:"Back-end", technologies:["C#",".NET"]}]} footnote="Instructables:" footnoteLink={<a href="https://www.instructables.com/Water-shower-monitor/" target='_blank'>Water Shower Monitor</a>}/>
            </div>
        </div>

        <div className='flex flex-col md:gap-8 md:flex-row-reverse'>
            <div className='flex items-center w-full pb-4 md:w-1/2 xl:p-12'>
              <CloudinaryImage link="Blackjack_rbtyfa.png" alt="blackjack" divClass='w-full' />
            </div>
            <div className='w-full pb-12 md:w-1/2 place-self-center xl:p-12'>
              <ProjectInfo title="Blackjack" paragraph="I reacreated the popular card game blackjack. Also know as 21." technologies={[{title:"Front-end", technologies:["HTML","CSS","Javascript"]}]} footnote='Website:' footnoteLink={<a href="https://messiaentibo.github.io/Interaction-Design-Eindopdracht/" target='_blank'>Blackjack</a>}/>
            </div>
        </div>
        <ScrollArrow />
    </div>
  )
}

export default Projects
