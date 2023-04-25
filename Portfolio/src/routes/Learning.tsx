import Header from '../components/Header'
import Title from '../components/Title'
import SeperatorLine from '../components/SeperatorLine'
import LearningCard from '../components/LearningCard'


function Learning() {

  return (
    <div className="Learning">
        <Title title="My learning adventure"/>

        <div className='max-w-6xl m-auto'>
          <SeperatorLine year="2020"/>
          <LearningCard side='left' title='ICT year 1' subtitle='C#, C++, arduino' content="I started programming in my 5th year of high school. We learned the activate led's with arduino and micro controllers. And we started creating our first console applications with C# to get used to the syntax."/>

          <SeperatorLine year="2021"/>
          <LearningCard side='right' title='ICT year 2' subtitle='C#, c++, arduino' content='In our second year of ICT, we went from console applications to desktop applications. And we went in depth of the c++ of how the shift registers work.'/>
          <LearningCard side='left' title='Self Learning' subtitle='C#' content='I really enjoyed the C# programmes we made and so I started creating my own C# applications with the help of youtube tutorials. I created one big dasboard application with all the different usefull features we created over the years (sorting algorithms, random number generators, ...). This was also the year that I created my first snake and tetris desktop application.'/>
          
          <SeperatorLine year="2022"/>
          <LearningCard side='right' title='1MCT' subtitle='HTML, CSS, Javascript' content='This is the first year that I started to create my own websites. In the beginning of the year I started learning HTML en CSS. Once I got used to these languages I started to add some basic javascript to the websites. This immediately made the websites more usefull.'/>
          <LearningCard side='left' title='1MCT' subtitle='Python, arduino, SQL' content='As the year went on we even created our own backend for the website. Making us able the show different data sets from our databases on our own website.'/>
          <LearningCard side='right' title='Project One' subtitle='HTML, CSS, Javascript, Python, SQL' content='With all this behind us, it was time to create a big project to show our teachers that we mastered everything we learned this year. This was "project one". Our first complete website website with every possible aspect of it.'/>
          <LearningCard side='left' title='Spotify App' subtitle='C#, Xamarin' content='We had our first app to create. And I choose to recreate the spotify app with the official spotify api for developers. The app has a 2.O authentication to log you in and get all your spotify playlists and songs. You can even create, update en delete all your spotify playlist. you just cant listen to any songs in the app.'/>
          
          <SeperatorLine year="2023"/>
          <LearningCard side='right' title='2MCT' subtitle='C#, Azure, Docker, Dapr' content='We learned a more modern way of making api routes in the module BACKEND. We also saw the basic aspects of docker so we could publish a docker image to azure. This made our api routes publicaly available.'/>
          <LearningCard side='left' title='2MCT' subtitle='HTML, CSS, Javascript, Typescript, Tailwind, React' content='This portfolio website you are looking at right now'/>
          <LearningCard side='right' title='2MCT' subtitle='React Native, TypeScript' content='I created a DartCounter app in react native. I like to dart in my free time and this project was my opportunity to create my own version of a dart app, completely to my likings.'/>
          
          <SeperatorLine year="NOW"/>
        </div>
    </div>
  )
}

export default Learning
