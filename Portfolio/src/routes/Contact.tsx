// React
import { useEffect } from 'react'
import { useNavigate  } from 'react-router-dom';

// Components
import InputField from '../components/InputField'

function Contact() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Tibo Messiaen | Contact'
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (window.confirm('Are you sure you want to submit this form?')) {
      const formData = new FormData(e.currentTarget);
  
      try {
        const response = await fetch('http://127.0.0.1:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        });
  
        if (response.ok) {
          console.log('Form submitted successfully');
          // clear form
          // e.currentTarget.reset();
          // Give feedback to user (notification)
          Notification.requestPermission().then(function(result) {
            if (result === 'granted') {
              navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('Form submitted successfully', {
                  body: 'Thank you for your message, I will contact you as soon as possible.',
                  icon: 'https://tibomessiaen.be/static/media/profile.3c4e5d9a.png',
                  vibrate: [200, 100, 200, 100, 200, 100, 200],
                  tag: 'vibration-sample'
                });
              });
            }
          });
          // Redirect to homepage
          navigate('/');
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error submitting form', error);
      }
    }
  };
  

  return (
    <div className="Contact flex justify-center shadow-md h-full w-full xsm:max-w-xl xsm:text-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <form
            onSubmit={handleSubmit}
            className='flex flex-col items-center gap-4 w-full bg-white dark:bg-dark p-4 sm:px-6 sm:border-l-8 border-caribbean-current dark:border-caribbean-current-dark'
        >
            <h1 className='text-3xl font-bold mb-6 text-caribbean-current dark:text-caribbean-current-dark 2xl:text-4xl'>Contact</h1>
            <div className='flex flex-col gap-4 w-full md:flex-row'>
                <InputField title="Firstname" id="firstname" type="text" required={true} placeholder='John' maxLenght={20}/>
                <InputField title="Lastname" id="lastname" type="text" required={true} placeholder='Doe' maxLenght={20}/>
            </div>
            <InputField title="Email" id="email" type="email" required={true} placeholder='John.Doe@email.com' maxLenght={50}/>
            <InputField title="Subject" id="subject" type="text" maxLenght={100}/>
            <InputField title="Message" id="message" type="textarea" maxLenght={500}/>
            <button type="submit" className=" rounded-md py-2 px-8 font-bold w-fit bg-caribbean-current dark:bg-caribbean-current-dark text-white">Submit</button>
        </form>
    </div>
  )
}

export default Contact
