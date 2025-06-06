// React
import { useEffect, useState } from "react";

// Lucide icons
import { ArrowUp } from 'lucide-react';


export default () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {

    // Add an event listener to track scroll position
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to the top when the button is clicked
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div data-testid="cypress-scroll-arrow">
      {showScrollButton && (
        <button
          className={`fixed bottom-8 right-8 bg-caribbean-current dark:bg-caribbean-current-dark text-white p-2 rounded ${showScrollButton ? 'block' : 'hidden'}`}
          onClick={handleScrollToTop}
        >
          <ArrowUp size={40} />
        </button>
      )}

    </div>
  );
};

