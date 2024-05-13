import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

// Components
import InputField from '../components/InputField';

function Contact() {

  useEffect(() => {
    document.title = 'Tibo Messiaen | Contact'
  }, [])

  const navigate = useNavigate();
  const [infoMessage, setInfoMessage] = useState('');
  const [state, handleSubmitFormspree] = useForm("mzbnvgpk");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (window.confirm('Are you sure you want to submit this form?')) {
      handleSubmitFormspree(e);
    }
  };


  if (state.succeeded) {
    setTimeout(() => {
      //Navigate to the home page after 3 seconds
      navigate('/');
      //Refresh the page so that the header is updated
      navigate(0);
    }, 3000);
    return (
      <div className="flex flex-col items-center justify-center w-full m-auto">
        <h2 className="text-4xl">Thank you for your message!</h2>
        <h3 className="text-2xl">I will contact you as soon as possible.</h3>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center w-full m-auto">
      <h2 className="text-4xl">{infoMessage}</h2>
      <div className="Contact flex justify-center my-4 shadow-md h-full w-full xsm:max-w-xl xsm:text-sm md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 w-full bg-white dark:bg-dark p-4 sm:px-6 sm:border-l-8 border-caribbean-current dark:border-caribbean-current-dark"
        >
          <h1 className="text-3xl font-bold mb-6 text-caribbean-current dark:text-caribbean-current-dark 2xl:text-4xl">Contact</h1>
          <div className="flex flex-col gap-4 w-full md:flex-row">
            <InputField title="Firstname" id="firstname" type="text" required={true} placeholder="John" maxLenght={20} />
            <InputField title="Lastname" id="lastname" type="text" required={true} placeholder="Doe" maxLenght={20} />
          </div>
          <InputField title="Email" id="email" type="email" required={true} placeholder="John.Doe@email.com" maxLenght={50} />
          <InputField title="Subject" id="subject" type="text" maxLenght={100} />
          <InputField title="Message" id="message" type="textarea" maxLenght={500} />
          <button type="submit" disabled={state.submitting} className="rounded-md py-2 px-8 font-bold w-fit bg-caribbean-current dark:bg-caribbean-current-dark text-2xl text-white">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
