// React
import { useEffect, useState } from 'react';

// Components
import Title from '../components/Title';
import SeperatorLine from '../components/SeperatorLine';
import LearningCard from '../components/LearningCard';
import ScrollArrow from '../components/ScrollArrow';

function Learning() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | Learning';
  }, []);

  return (
    <div className="Learning">
      <Title title="My learning adventure" classAtribute='text-center' />

      <div className='max-w-6xl m-auto'>
        <SeperatorLine year="NOW" />
        <LearningCard side='left' title='Internship' subtitle='React-Native, Expo, i18n, Intercom, Mixpanel, Rollbar, Clairity' content='I did a 14 week internship at a start-up company called "JobFunders". I was the sole developer of the mobile app version of there platform. I created the app in react-native and expo. It is a career platform for students and companies to find each other.' />
        <LearningCard side='right' title='Bachelor Thesis' subtitle='Chrome-extension, eye-tracking, thesis' content="My bachelor thesis is about the Chrome extension I created during the Research Project. I wrote a 12,000-word essay on how I developed the project and what other experts in eye-tracking thought of it. The essay also includes advice on how to create a similar project and what could be added to it." />
        <LearningCard side='left' title='Research Project' subtitle='Chrome-extension, eye-tracking, mediapipeline' content="For my 6st and final semester of MCT I had to make a research project. This project is very important and is the base for my bachelor's thesis. In this project I answered the question:&quot;Can eye movements and blinks be translated into website interactions via a Chrome extension?&quot;" />

        <SeperatorLine year="2023" />
        <LearningCard side='right' title='2MCT' subtitle='C#, Azure, Docker, Dapr' content='We learned a more modern way of making api routes in the module BACKEND. We also saw the basic aspects of docker so we could publish a docker image to azure. This made our api routes publicaly available.' />
        <LearningCard side='left' title='2MCT' subtitle='HTML, CSS, Javascript, Typescript, Tailwind, React' content='This portfolio website you are looking at right now is created with the framework React and styled with the tailwindcss library.' />
        <LearningCard side='right' title='2MCT' subtitle='React Native, TypeScript' content='I created a DartCounter app in react native. I like to dart in my free time and this project was my opportunity to create my own version of a dart app, completely to my likings.' />
        <LearningCard side='left' title='3MCT' subtitle='Vue.js, GraphQL, Node.js, PWA, Bootstrap i18n, Unit testing, lerna' content='This year we have a module called Advenced Full Stack Development. We had 1 big project over the year, were we worked in a group of 3 to create a website about a sports complex with vue.js for the frontend and node.js for the backend.' />

        <SeperatorLine year="2022" />
        <LearningCard side='right' title='1MCT' subtitle='Python, SQL' content='As the year went on we even created our own backend for the website. Making us able the show different data sets from our databases on our own website.' />
        <LearningCard side='left' title='Project One' subtitle='HTML, CSS, Javascript, Python, SQL' content='With all this behind us, it was time to create a big project to show our teachers that we mastered everything we learned this year. This was "project one". Our first complete website website with every possible aspect of it.' />
        <LearningCard side='right' title='Spotify App' subtitle='C#, Xamarin' content='We had our first app to create. And I choose to recreate the spotify app with the official spotify api for developers. The app has a 2.O authentication to log you in and get all your spotify playlists and songs. You can even create, update en delete all your spotify playlist. you just cant listen to any songs in the app.' />

        <SeperatorLine year="2021" />
        <LearningCard side='right' title='1MCT' subtitle='Python' content="Going into my first year of MCT, I could already write some decent code in C#. But the programming language we needed to use was Python. This was a relative easy transformation. All the coding skill's I had developt could still be applied to the projects. It was only a matter of learnign and getting used to the new syntax." />
        <LearningCard side='left' title='1MCT' subtitle='Arduino' content="I further developt my arduino skills to control more and more complex circuits, making use of multiple inputs (buttons, sensors, controllers, ...) and outputs (leds, led matrix, 7segment display, ...)." />
        <LearningCard side='right' title='1MCT' subtitle='HTML, CSS, Javascript' content='This is the first year that I started to create my own websites. In the beginning of the year I started learning HTML en CSS. Once I got used to these languages I started to add some basic javascript to the websites. This immediately made the websites more usefull.' />

        <SeperatorLine year="2020" />
        <LearningCard side='left' title='ICT year 2' subtitle='C#, C++, arduino' content='In our second year of ICT, we went from console applications to desktop applications. And we went in depth of the C++ of how the shift registers work.' />
        <LearningCard side='right' title='Self Learning' subtitle='C#' content='I really enjoyed the C# programmes we made and so I started creating my own C# applications with the help of youtube tutorials. I created one big dasboard application with all the different usefull features we created over the years (sorting algorithms, random number generators, ...). This was also the year that I created my first snake and tetris desktop application.' />

        <SeperatorLine year="2019" />
        <LearningCard side='left' title='ICT year 1' subtitle='C#' content="C# is the first programming language I learned. We created console applications to create a strong basic understand and foundation of C# knowledge." />
        <LearningCard side='right' title='ICT year 1' subtitle='C++' content="We started learning C++ to program microcontrollers. We were able to control some leds with some buttons and a microcontroller." />
        <LearningCard side='left' title='ICT year 1' subtitle='Arduino' content="I also learned to work with arduino to program and control led's instead of using microcontrollers." />

        <SeperatorLine year="START" />
      </div>
      <ScrollArrow />
    </div>
  )
}

export default Learning
