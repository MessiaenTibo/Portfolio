// React
import { useEffect, useState } from 'react';
// Components
import CloudinaryImage from '../components/CloudinaryImage'
// Lucid Icons
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';


export default () => {
    // Carousel image list
    const images = [
        { link: 'AboutMe_rhhb8j.png', alt: 'AboutMe' },
        { link: 'Koetstocht_tkviuw.png', alt: 'AboutMe' },
        { link: 'Projectone_zl8l5g.png', alt: 'AboutMe' },
        { link: 'Trouwfeest_cjmie3.png', alt: 'AboutMe' },
    ];

    const [play, setPlay] = useState(true);
    const [current, setCurrent] = useState(0);
    const delay = 5000;

    // next image
    const nextImage = () => {
        if (current < images.length - 1) {
            setCurrent(current + 1);
        } else {
            setCurrent(0);
        }
    };

    // previous image
    const prevImage = () => {
        if (current > 0) {
            setCurrent(current - 1);
        } else {
            setCurrent(images.length - 1);
        }
    };

    const setImage = (index: number) => () => {
        setCurrent(index);
    };

    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (play) {
            // Start the interval
            intervalId = setInterval(() => {
                nextImage();
            }, delay);

            return () => {
                // Clear the interval on component unmount or when play is false
                clearInterval(intervalId);
            };
        }

        return () => {
            // Clear the interval on component unmount
            clearInterval(intervalId);
        };
    }, [play, current]);

    return (
        <div>
            <div className='flex flex-col items-center justify-center relative group'>
                <button
                    onClick={prevImage}
                    className={`absolute left-1 bg-anti-flash-white invisible group-hover:visible dark:bg-anti-flash-white-dark h-20 w-8 flex justify-center items-center border-2 border-caribbean-current dark:border-caribbean-current-dark rounded-sm text-caribbean-current dark:text-caribbean-current-dark opacity-80 transition-opacity`}
                >
                    <ChevronLeft />
                </button>
                <div className='h-full w-full'>
                    <CloudinaryImage
                        link={images[current].link}
                        alt={images[current].alt}
                        imgClass='rounded-3xl shadow-xl w-full'
                    />
                </div>
                <button
                    onClick={nextImage}
                    className={`absolute right-1 bg-anti-flash-white invisible group-hover:visible dark:bg-anti-flash-white-dark h-20 w-8 flex justify-center items-center border-2 border-caribbean-current dark:border-caribbean-current-dark rounded-sm text-caribbean-current dark:text-caribbean-current-dark opacity-80 transition-opacity`}
                >
                    <ChevronRight />
                </button>
            </div>
            <div className='flex gap-1.5 justify-center items-center p-2'>
                {play ? (
                    <button
                        onClick={() => setPlay(false)}
                        className='text-caribbean-current dark:text-caribbean-current-dark'
                    >
                        <Pause />
                    </button>
                ) : (
                    <button
                        onClick={() => setPlay(true)}
                        className='text-caribbean-current dark:text-caribbean-current-dark'
                    >
                        <Play />
                    </button>
                )}
                {images.map((image, index) => (
                    <button
                        onClick={setImage(index)}
                        key={index}
                        className={`bg-caribbean-current dark:bg-caribbean-current-dark rounded-full h-4 w-4 ${
                            index === current ? 'opacity-100' : 'opacity-30'
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};