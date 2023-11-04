import React, { useEffect, useState } from 'react';
import { ScrollTop } from '@assets/icons/ScrollTop';

export const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (document.scrollingElement?.scrollTop) {
        setShowButton(true);
      } else setShowButton(false);
    };
    document.addEventListener('scroll', handleScrollEvent);

    return () => {
      document.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <button
        aria-label="Scroll To Top Button"
        onClick={scrollTop}
        disabled={!showButton}
        className={`fixed bottom-32 right-32 ${
          !showButton ? 'opacity-0' : 'opacity-100'
        } rounded bg-dark p-8  transition-opacity duration-150 dark:bg-light`}
      >
        <ScrollTop className="w-[24px] fill-light dark:fill-dark lg:w-[32px]" />
      </button>
    </div>
  );
};
