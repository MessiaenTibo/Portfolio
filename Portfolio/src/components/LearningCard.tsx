import { useEffect, useState, useLayoutEffect } from "react";

export default ({title, subtitle, content, side}:{title:string, subtitle:string, content:string, side:string}) => {
    let [sideState, setSide] = useState<string>(side);
    const [size, setSize] = useState([0, 0]);

    useEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
            if(window.innerWidth < 640) {
                sideState = 'right';
                setSide(sideState);
            }
            else {
                sideState = side;
                setSide(sideState);
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);



    return (
        <div className="flex">

            {sideState === 'left' &&
                <div className="flex w-full">
                    <div className="inline-block w-full ml-6 mb-4 bg-white dark:bg-dark p-6 rounded-lg shadow-card sm:w-2/5">
                        <h1 className="font-bold text-xl mb-2 xl:text-2xl">{title}</h1>
                        <h2 className="text-xl font-light mb-3 xl:text-2xl">{subtitle}</h2>
                        <p className="xl:text-xl">{content}</p>
                    </div>

                    <div className="inline-block border-3 border-caribbean-current dark:border-caribbean-current-dark mx-8 -mt-22 -mb-20">
                        <div className="absolute -ml-12 mt-26 h-5 w-5 rotate-45 bg-white dark:bg-dark "></div>
                        <div className="absolute -ml-3 mt-26 h-6 w-6 rounded-full border-3 border-orange-peel dark:border-orange-peel-dark bg-white dark:bg-dark"></div>
                    </div>
                </div>
            }

            {sideState === 'right' &&
                <div className="flex w-full">
                    <div className="sm:mx-7"></div>
                    <div className="inline-block border-3 border-caribbean-current dark:border-caribbean-current-dark mx-8 -mt-22 -mb-20 sm:ml-2/5"></div>

                    <div className="inline-block w-full mr-6 mb-4 bg-white dark:bg-dark p-6 rounded-lg shadow-card sm:w-2/5">
                        <div className="absolute -ml-18 -mt-2 h-6 w-6 rounded-full border-3 border-orange-peel dark:border-orange-peel-dark bg-white dark:bg-dark"></div>
                        <div className="absolute -ml-8 -mt-2 h-5 w-5 rotate-45 bg-white dark:bg-dark"></div>
                        <h1 className="font-bold text-xl mb-2 xl:text-2xl">{title}</h1>
                        <h2 className="text-xl font-light mb-3 xl:text-2xl">{subtitle}</h2>
                        <p className="xl:text-xl">{content}</p>
                    </div>
                </div>
            }
        </div>
    );
  };