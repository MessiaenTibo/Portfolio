import { useEffect, useState } from 'react';

export default () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
        // Toggle dark mode class on the body
        document.documentElement.classList.toggle('dark', !darkMode);
        // Save the preference to localStorage
        localStorage.setItem('darkMode', JSON.stringify(!darkMode));
    };

    useEffect(() => {
        const darkModeOn = localStorage.getItem('darkMode');
        if (darkModeOn) {
            setDarkMode(JSON.parse(darkModeOn));
            document.documentElement.classList.toggle('dark', JSON.parse(darkModeOn));
        } else {
            // Set dark mode based on the system preferences
            const darkModeOn = window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches;
            setDarkMode(darkModeOn);
            document.documentElement.classList.toggle('dark', darkModeOn);
        }
    }, []);

    return (
        <div
            className="flex flex-col justify-center ml-3 focus-within:outline outline-2 outline-none"
        >
            <input
                type="checkbox"
                name="light-switch"
                className="light-switch sr-only"
                id="light-switch"
                onClick={toggleDarkMode}
            />
            <label className="relative cursor-pointer p-2" htmlFor="light-switch">
                <svg
                    className="dark:hidden scale-[2] transition-transform transform-gpu hover:scale-[2.2] duration-500 ease-in-out overflow-visible group/sun"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className=" transform origin-center fill-orange-500 motion-safe:animate-spin-slow motion-safe:group-hover/sun:animate-spin-fast"
                        d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                    />
                    {/* <path className="fill-orange-100" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" /> */}
                    <path
                        className="fill-orange-500"
                        d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                    />
                </svg>
                <svg
                    className="hidden dark:block scale-[2] hover:scale-[2.2] duration-500 ease-in-out transition-transform transform-gpu group/moon"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="fill-slate-400"
                        d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                    />
                    <path
                        className="fill-yellow-600 motion-safe:animate-twinkel-slow motion-safe:group-hover/moon:animate-twinkel-bright-slow"
                        d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                    />
                    <path
                        className="fill-yellow-500 motion-safe:animate-twinkel-medium motion-safe:group-hover/moon:animate-twinkel-bright-medium"
                        d="M11.5,3a.375.375,0,0,1-.375-.375.751.751,0,0,0-.75-.75.375.375,0,1,1,0-.75.751.751,0,0,0,.75-.75.375.375,0,1,1,.75,0,.751.751,0,0,0,.75.75.375.375,0,0,1,0,.75.751.751,0,0,0-.75.75A.375.375,0,0,1,11.5,3Z"
                        transform="translate(-3 2)"
                    />
                    <path
                        className="fill-yellow-400 motion-safe:animate-twinkel-fast motion-safe:group-hover/moon:animate-twinkel-bright-fast"
                        d="M12,4a.5.5,0,0,1-.5-.5,1,1,0,0,0-1-1,.5.5,0,1,1,0-1,1,1,0,0,0,1-1,.5.5,0,1,1,1,0,1,1,0,0,0,1,1,.5.5,0,0,1,0,1,1,1,0,0,0-1,1A.5.5,0,0,1,12,4Z"
                        transform="translate(-1 5)"
                    />
                </svg>

                <span className="sr-only">Switch to light / dark version</span>
            </label>
        </div>
    );
};
