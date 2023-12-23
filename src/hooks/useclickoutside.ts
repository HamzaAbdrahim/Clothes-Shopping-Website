import { useEffect, useRef } from 'react';

type ClickOutsideHandler = (event: MouseEvent | TouchEvent) => void;

const useClickOutside = (onClickOutside: ClickOutsideHandler) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleClick = (event: MouseEvent | TouchEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      onClickOutside(event);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return ref;
};

export default useClickOutside;

