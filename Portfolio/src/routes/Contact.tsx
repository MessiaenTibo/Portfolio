import { useEffect } from 'react'


function Contact() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | Contact'
  }, [])

  return (
    <div className="Contact flex justify-center items-center h-full">
        <h1>Contact</h1>
    </div>
  )
}

export default Contact
