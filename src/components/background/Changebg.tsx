import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { backgrounds } from "../../content";
import "../../scss/pages/_bgchange.scss";

const Changebg = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const prevSlide = () => {
    const isFirstSlide: boolean = currentIndex === 0;
    const newIndex: number = isFirstSlide ? backgrounds.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide: boolean = currentIndex === backgrounds.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex: number = (currentIndex + 1) % backgrounds.length;
      setCurrentIndex(nextIndex);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="imges_container">
      <div className="background_img" style={{ backgroundImage: `url(${backgrounds[currentIndex].img})` }}>
        <div className='prev'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='next'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
      </div>
    </div>
  );
};

export default Changebg;