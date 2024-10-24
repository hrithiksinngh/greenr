import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ImQuotesLeft } from "react-icons/im";
import { getImageUrl } from '../../utils/images';
import { useSwipeable } from 'react-swipeable';

const Carousel = (props) => {
  const { handleConnect, slides } = props;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  useEffect(() => {
    if (isChanging) {
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isChanging]);

  // Add new useEffect for auto-changing slides
  useEffect(() => {
    const autoChangeTimer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(autoChangeTimer);
  }, [currentSlide]);

  const changeSlide = (index) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentSlide(index);
    }, 250);
  };

  const nextSlide = () => {
    changeSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    changeSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div className="relative">
      <div {...handlers} className="relative w-full h-full bg-[#39546e] text-white p-4 pb-8 pt-8 md:pt-32 md:p-32 md:pl-40 md:pb-20 flex flex-col md:flex-row justify-between items-center shadow-lg">
        {/* Image section */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
          <div className={`transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
            <Image
              src={slides[currentSlide]?.image}
              alt={`${slides[currentSlide]?.name} Image`}
              width={400}
              height={400}
              className="w-full h-auto max-w-[300px] md:max-w-[400px]"
            />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full md:w-1/2 relative order-2 md:order-1">
          <div className="relative">
            <h2 className={`text-2xl md:text-4xl font-bold mb-4 relative z-10 transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
              {slides[currentSlide]?.name}
            </h2>
            <span className="absolute -top-10 md:-top-20 -left-3 md:-left-20 text-[60px] md:text-[120px] text-[#4b637b] opacity-30 z-0"><ImQuotesLeft /></span>
          </div>
          <p className={`text-sm md:text-md leading-6 mb-6 font-arimo transition-opacity duration-500 ${isChanging ? 'opacity-0' : 'opacity-100'}`}>
            {slides[currentSlide]?.description}
          </p>
          <div className="flex items-center justify-between">
            <button className="bg-[#6B9080] text-white font-semibold py-2 px-6 rounded-lg transition duration-300" onClick={handleConnect}>
              Let's Connect
            </button>
          </div>
        </div>

        {/* Navigation buttons - desktop view (hidden on mobile) */}
        <button
          onClick={prevSlide}
          className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl px-4 py-2"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl px-4 py-2"
        >
          &#10095;
        </button>
      </div>

      {/* Navigation buttons - mobile view (outside and below the container) */}
      <div className="flex justify-center w-full mt-4 md:hidden">
        <button
          onClick={prevSlide}
          className="bg-white text-[#39546e] rounded-full w-10 h-10 flex items-center justify-center mr-4 shadow-md"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="bg-white text-[#39546e] rounded-full w-10 h-10 flex items-center justify-center shadow-md"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
