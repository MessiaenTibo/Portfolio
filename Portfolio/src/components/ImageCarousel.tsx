import { useEffect, useState } from 'react';
import CloudinaryImage from '../components/CloudinaryImage'

export default () => {

    // Carousel image list
    const images = [
        {link: 'AboutMe_rhhb8j.png', alt: 'AboutMe'},
        {link: 'PortfolioMockup_qjs7ns.png', alt: 'AboutMe'},
        {link: 'Blackjack_rbtyfa.png', alt: 'AboutMe'},
        {link: 'Portfolio_j9ncfs.png', alt: 'AboutMe'},
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
        <div>
            <CloudinaryImage link={images[current].link} alt={images[current].alt} imgClass='rounded-3xl shadow-xl w-full'/>
        </div>
        <div className='flex gap-1.5 justify-center p-2'>
            {/* for each link */}
            {images.map((image, index) => (
                <button onClick={setImage(index)} key={index} className={`bg-dark dark:bg-white rounded-full h-4 w-4 ${index === current ? 'opacity-100' : 'opacity-20'}`}></button>
            ))}
        </div>
    </div>
  );
};