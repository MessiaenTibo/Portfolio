// React
import { useEffect } from 'react'
// Components
import Title from '../components/Title'
import InputField from '../components/InputField'

function Contact() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | Contact'
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent the default form submit behavior
    e.preventDefault();

    // alert if the user is sure he wants to submit the form
    if (window.confirm('Are you sure you want to submit this form?')) {
        console.log('Form submitted');
    }

  }

  return (
    <div className="Contact flex justify-center shadow-md  items-center h-full w-full xsm:max-w-xl xsm:text-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center gap-4 w-full bg-white dark:bg-dark p-4 sm:px-6'
        >
            <h1 className='text-3xl font-bold mb-6 text-caribbean-current dark:text-caribbean-current-dark 2xl:text-4xl'>Contact</h1>
            <div className='flex flex-col gap-4 w-full md:flex-row'>
                <InputField title="Firstname" id="firstname" type="text" required={true}/>
                <InputField title="Lastname" id="lastname" type="text" required={true}/>
            </div>
            <InputField title="Email" id="email" type="email" required={true}/>
            <InputField title="Subject" id="subject" type="text"/>
            <InputField title="Message" id="message" type="textarea"/>
            <button type="submit" className=" rounded-md py-2 px-8 font-bold w-fit bg-caribbean-current dark:bg-caribbean-current-dark text-white">Submit</button>
        </form>
    </div>
  )
}

export default Contact
