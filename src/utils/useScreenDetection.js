import { useState, useEffect } from 'react';

  const useScreenDetection = () => {
    const checkForDevice = () => {
      let windowWidth = window.innerWidth;
      if (windowWidth < 768) {
        return true;
      } else {
        return false;
      }
    };

    const [isMobile, setIsMobile] = useState(checkForDevice());

    useEffect(() => {
      const handlePageResized = () => {
        setIsMobile(checkForDevice);
      };

      window.addEventListener('resize', handlePageResized);
      window.addEventListener('orientationchange', handlePageResized);
      window.addEventListener('load', handlePageResized);
      window.addEventListener('reload', handlePageResized);

      return () => {
        window.removeEventListener('resize', handlePageResized);
        window.removeEventListener('orientationchange', handlePageResized);
        window.removeEventListener('load', handlePageResized);
        window.removeEventListener('reload', handlePageResized);
      };
    }, []);

    return {
      isMobile,
    };
  };

  export default useScreenDetection;
