import React, { useState, useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

interface BackgroundAnimation {
  id: number;
  x: number;
  y: number;
  size: number;
}

const App: React.FC = () => {
  const [animations, setAnimations] = useState<BackgroundAnimation[]>([]);
  const [animationsTwo, setAnimationsTwo] = useState<BackgroundAnimation[]>([]);
  const lastFrameTime = useRef<number | null>(null);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {

    const { clientX, clientY } = e;
    const newAnimation: BackgroundAnimation = {
      id: Date.now(),
      x: clientX,
      y: clientY + window.scrollY, // Adjust for scroll offset
      size: 20, // initial size
    };

    const newAnimationTwo: BackgroundAnimation = {
      id: Date.now(),
      x: clientX,
      y: clientY + window.scrollY, // Adjust for scroll offset
      size: 20, // initial size
    };

    setAnimations((prevAnimations) => [...prevAnimations, newAnimation]);

    // Delete the animation after 4 seconds
    setTimeout(() => {
      setAnimations((prevAnimations) =>
        prevAnimations.filter((animation) => animation.id !== newAnimation.id)
      );
    }, 3000);

    setTimeout(() => {
      setAnimationsTwo((prevAnimations) => [...prevAnimations, newAnimationTwo]);

      // Delete the animation after 4 seconds
      setTimeout(() => {
        setAnimationsTwo((prevAnimations) =>
          prevAnimations.filter((animation) => animation.id !== newAnimation.id)
        );
      }, 2500);
    }, 500);
  };

  useEffect(() => {
    const updateAnimations = (timestamp: number) => {
      if (!lastFrameTime.current) {
        lastFrameTime.current = timestamp;
      }

      const elapsed = timestamp - lastFrameTime.current;
      lastFrameTime.current = timestamp;

      setAnimations((prevAnimations) =>
        prevAnimations.map((animation) => ({
          ...animation,
          size: animation.size + elapsed * 0.2, // Adjust the growth rate as needed
        }))
      );

      setAnimationsTwo((prevAnimations) =>
        prevAnimations.map((animation) => ({
          ...animation,
          size: animation.size + elapsed * 0.25, // Adjust the growth rate as needed
        }))
      );

      requestAnimationFrame(updateAnimations);
    };

    const animationFrameId = requestAnimationFrame(updateAnimations);

    return () => cancelAnimationFrame(animationFrameId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='relative overflow-hidden'>
      {/* Background (workaround background for the backgroundimage) */}
      <div className='bg-white dark:bg-dark fixed h-screen w-screen -z-10'></div>

      {/* Container for animations */}
      <div className='absolute top-0 left-0 w-full h-full pointer-events-none'>
        {animations.map((animation) => (
          <div
            key={animation.id}
            className='BackgroundAnimation rounded-full bg-caribbean-current dark:bg-caribbean-current-dark absolute -z-10 motion-reduce:hidden'
            style={{
              top: animation.y - animation.size / 2,
              left: animation.x - animation.size / 2,
              height: animation.size,
              width: animation.size,
            }}
          ></div>
        ))}
        {animationsTwo.map((animation) => (
          <div
            key={animation.id}
            className='BackgroundAnimation rounded-full bg-white dark:bg-dark absolute -z-10 motion-reduce:hidden'
            style={{
              top: animation.y - animation.size / 2,
              left: animation.x - animation.size / 2,
              height: animation.size,
              width: animation.size,
            }}
          ></div>
        ))}
      </div>

      {/* Main content */}
      <div
        onClick={handleBackgroundClick}
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
        className=' bg-[url(/background-pattern-light-small.svg)] dark:bg-[url(/background-pattern-dark-small.svg)] bg-transparent bg-repeat bg-auto'
      >
        <Header title='Tibo Messiaen' />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
