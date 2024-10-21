import React, { useState, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of Company",
    type: "youtube", // Can be 'image', 'video', or 'youtube'
    src: "https://youtube.com/embed/OZEnys-tDDY",
    text: "Sypto does what it says, it either books profit or prevents your capital from making loss according to market conditions. The team is a message away when you got any query. I am very happy that I got introduced to Sypto.",
    avatar: "https://server2.getgreenr.org/images/AjayM_F.png", // Add this line for each testimonial
  },
  {
    id: 2,
    name: "Natasha D'Costa",
    title: "Founder of Startup",
    type: "youtube", // Can be 'image', 'video', or 'youtube'
    src: "https://youtube.com/embed/OZEnys-tDDY",
    text: "Sypto does what it says, it either books profit or prevents your capital from making loss according to market conditions. The team is a message away when you got any query. I am very happy that I got introduced to Sypto.",
    avatar: "https://server2.getgreenr.org/images/AjayM_F.png", // Add this line for each testimonial
  },
  {
    id: 3,
    name: "Jane Doe",
    title: "Entrepreneur",
    type: "youtube", // Can be 'image', 'video', or 'youtube'
    src: "https://youtube.com/embed/OZEnys-tDDY",
    text: "Sypto does what it says, it either books profit or prevents your capital from making loss according to market conditions. The team is a message away when you got any query. I am very happy that I got introduced to Sypto.",
    avatar: "https://server2.getgreenr.org/images/AjayM_F.png", // Add this line for each testimonial
  },
  {
    id: 4,
    name: "Jane Doe",
    title: "Entrepreneur",
    type: "youtube", // Can be 'image', 'video', or 'youtube'
    src: "https://youtube.com/embed/OZEnys-tDDY",
    text: "Sypto does what it says, it either books profit or prevents your capital from making loss according to market conditions. The team is a message away when you got any query. I am very happy that I got introduced to Sypto.",
    avatar: "https://server2.getgreenr.org/images/AjayM_F.png", // Add this line for each testimonial
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const carouselRef = useRef(null);

  const nextTestimonial = () => {
    const container = carouselRef.current;
    if (window.innerWidth >= 640) { // Desktop view
      const cardWidth = container.children[0].offsetWidth;
      container.scrollBy({ left: cardWidth + 16, behavior: 'smooth' }); // 16px for gap
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
      container.scrollBy({ left: -cardWidth - 16, behavior: 'smooth' }); // 16px for gap
    } else { // Mobile view
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }
  };

  const renderTestimonial = (testimonial, index) => (
    <div 
      key={testimonial.id} 
      className={`bg-white shadow-md rounded-lg w-full sm:w-80 flex-shrink-0 flex flex-col 
        sm:block
        ${index !== currentIndex ? 'hidden' : ''}
        transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
    >
      {testimonial.type === "youtube" && (
        <iframe
          className="w-full h-48 rounded-t-lg"
          src={testimonial.src}
          title={testimonial.name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-gray-700 mb-4 text-[14px] flex-grow">{testimonial.text}</p>
        <div className="flex items-center mt-auto">
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

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      className="text-[#4C7297] font-bold p-2 border border-[#4C7297] rounded-full
        hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#4C7297]
        sm:hover:bg-transparent sm:focus:ring-0"
      disabled={isAnimating}
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
      <div 
        ref={carouselRef}
        className="px-4 sm:flex sm:space-x-4 sm:px-10 sm:pb-4 sm:overflow-x-auto hide-scrollbar"
      >
        {testimonials.map((testimonial, index) => renderTestimonial(testimonial, index))}
      </div>
      <div className="flex justify-center mt-4 space-x-4">
        <ArrowButton direction="left" onClick={prevTestimonial} />
        <ArrowButton direction="right" onClick={nextTestimonial} />
      </div>
    </div>
  );
};

export default TestimonialCarousel;
