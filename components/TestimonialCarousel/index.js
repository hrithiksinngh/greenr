import React, { useState, useRef, useEffect } from 'react';

const TestimonialCarousel = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    updateArrowStates();
  }, [currentIndex]);

  const updateArrowStates = () => {
    setIsAtStart(currentIndex === 0);
    setIsAtEnd(currentIndex === testimonials.length - 1);
  };

  const nextTestimonial = () => {
    const container = carouselRef.current;
    if (window.innerWidth >= 640) { // Desktop view
      const cardWidth = container.children[0].offsetWidth;
      container.scrollBy({ left: cardWidth + 16, behavior: 'smooth' });
      // Update currentIndex for desktop view
      setCurrentIndex(prevIndex => Math.min(prevIndex + 1, testimonials.length - 1));
    } else { // Mobile view
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const prevTestimonial = () => {
    const container = carouselRef.current;
    if (window.innerWidth >= 640) { // Desktop view
      const cardWidth = container.children[0].offsetWidth;
      container.scrollBy({ left: -cardWidth - 16, behavior: 'smooth' });
      // Update currentIndex for desktop view
      setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    } else { // Mobile view
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const renderMedia = (testimonial) => {
    switch (testimonial.mediaType) {
      case 'youtube':
        return (
          <iframe
            className="w-full h-48 rounded-t-lg"
            src={testimonial.mediaUrl}
            title={testimonial.name}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        );
      case 'image':
        return (
          <img
            className="w-full h-48 rounded-t-lg object-cover"
            src={testimonial.mediaUrl}
            alt={testimonial.name}
          />
        );
      case 'video':
        return (
          <video
            className="w-full h-48 rounded-t-lg"
            src={testimonial.mediaUrl}
            controls
          />
        );
      default:
        return null;
    }
  };

  const renderTestimonial = (testimonial, index) => (
    <div 
      key={index} 
      className={`relative pb-20 bg-white shadow-md rounded-lg w-full sm:w-80 flex-shrink-0 flex flex-col 
        sm:block
        ${index !== currentIndex ? 'hidden' : ''}
        transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
    >
      {renderMedia(testimonial)}
      <div className="p-6 pb-0 flex flex-col flex-grow">
        <p className="text-gray-700 mb-4 text-[14px] flex-grow">{testimonial.description}</p>
        <div className="flex items-center mt-auto absolute bottom-0 left-0 p-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="font-bold text-lg">{testimonial.name}</h3>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const ArrowButton = ({ direction, onClick, disabled }) => (
    <button
      onClick={onClick}
      className={`text-[#4C7297] font-bold p-2 border border-[#4C7297] rounded-full
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4C7297]
        sm:hover:bg-transparent sm:focus:ring-0
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={isAnimating || disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"}
        />
      </svg>
    </button>
  );

  return (
    <div className="w-full overflow-hidden">
      <div className="grid-main-container flex justify-between items-center mb-10 px-4">
        <h1 className="text-3xl font-bold">{testimonials[0].testimonialsHeading || 'Entrepreneur Wins Testimonials'}</h1>
        <div className="hidden sm:flex space-x-4">
          <ArrowButton direction="left" onClick={prevTestimonial} disabled={isAtStart} />
          <ArrowButton direction="right" onClick={nextTestimonial} disabled={isAtEnd} />
        </div>
      </div>
      <div 
        ref={carouselRef}
        className="px-4 sm:flex sm:space-x-4 sm:px-10 sm:pb-4 sm:overflow-x-auto hide-scrollbar"
      >
        {testimonials?.map((testimonial, index) => renderTestimonial(testimonial, index))}
      </div>
      {/* Mobile arrows */}
      <div className="flex sm:hidden justify-center mt-4 space-x-4">
        <ArrowButton direction="left" onClick={prevTestimonial} disabled={isAtStart} />
        <ArrowButton direction="right" onClick={nextTestimonial} disabled={isAtEnd} />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
