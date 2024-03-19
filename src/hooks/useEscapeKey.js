import React from 'react';

const useEscapeKey = (callback) => {
  if (typeof callback !== 'function') {
    throw new Error('argument must be a function');
  }

  React.useEffect(() => {
    const handleEscPress = (e) => {
      if (e.key === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleEscPress);

    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, [callback]);
};

export default useEscapeKey;
