import { useEffect, useState } from 'react';
import CloudinaryImage from '../components/CloudinaryImage'

export default () => {

    // Carousel image list
    const images = [
        {link: 'AboutMe_rhhb8j.png', alt: 'AboutMe'},
        {link: 'Koetstocht_tkviuw.png', alt: 'AboutMe'},
        {link: 'Projectone_zl8l5g.png', alt: 'AboutMe'},
        {link: 'Trouwfeest_cjmie3.png', alt: 'AboutMe'},
    ]

    const [current, setCurrent] = useState(0);
    const delay = 5000;
    let interval = setInterval(() => {}, delay);

    // next image
    const nextImage = () => {
        if(current < images.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    }

    const setImage = (index:number) => () => {
        setCurrent(index);
        interval.refresh();
    }

    useEffect(() => {
        interval = setInterval(() => {
            nextImage();
        }, delay);
        return () => clearInterval(interval);
    }, [current]);

  return (
    <div >
        <CloudinaryImage link={images[current].link} alt={images[current].alt} imgClass='rounded-3xl shadow-xl w-full'/>
        <div className='flex gap-1.5 justify-center p-2'>
            {images.map((image, index) => (
                <button onClick={setImage(index)} key={index} className={`bg-caribbean-current dark:bg-caribbean-current-dark rounded-full h-4 w-4 ${index === current ? 'opacity-100' : 'opacity-30'}`}></button>
            ))}
        </div>
    </div>
  );
};