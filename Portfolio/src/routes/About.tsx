import { useEffect } from 'react'
import Aboutme from '../components/Aboutme'
import Header from '../components/Header'


function About() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | About'
  }, [])

  return (
    <div className="About flex justify-center items-center h-full">
        <Aboutme />
    </div>
  )
}

export default About
