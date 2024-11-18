import { useState, useEffect } from 'react';
import ImageModal from '../ImageModal';

const StackedImage = (props) => {
  const { productImages, mainImage } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayImages, setDisplayImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    // Split the images string and handle empty cases
    const images = productImages?.split(',').filter(Boolean) || [];
    // Add mainImage to total count if it exists and isn't already in the array
    const mainImageExists = mainImage && !images.includes(mainImage);
    const total = mainImageExists ? images.length + 1 : images.length;
    
    setDisplayImages(images);
    setTotalImages(total);
  }, [productImages, mainImage]);

  const handleImageError = (index) => {
    console.error(`Failed to load image at index ${index}`);
  };

  const renderImageCount = () => {
    if (totalImages <= 1) return null;
    return (
      <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 px-2 py-1 rounded text-white text-xs z-30">
        More {totalImages - 1}+
      </div>
    );
  };

  return (
    <>
      <div className="relative w-[80vw] h-[53vw] max-w-[20rem] max-h-[13rem] sm:w-96 sm:h-64 cursor-pointer" 
        onClick={() => totalImages > 0 && setIsModalOpen(true)}
      >
        {/* Base Image */}
        {/* <div className="absolute inset-0 transform translate-x-[3%] sm:translate-x-6 -translate-y-[3%] sm:-translate-y-6 z-0 blur-[1px] opacity-60">
          <img
            src={mainImage}
            alt="Blurred Image"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div> */}

        {/* Middle Image */}
        {/* <div className="absolute inset-0 transform translate-x-[1.5%] sm:translate-x-3 -translate-y-[1.5%] sm:-translate-y-3 z-10 opacity-80">
          <img
            src={mainImage}
            alt="Middle Image"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div> */}

        {/* Top Image */}
        <div className="absolute inset-0 z-20">
          {mainImage ? (
            <img
              src={mainImage}
              alt="Top Image"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              onError={() => handleImageError(0)}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
              <span className="text-gray-500">No image available</span>
            </div>
          )}
        </div>

        {/* Image Count Overlay */}
        {renderImageCount()}
      </div>

      <ImageModal
        images={displayImages}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default StackedImage;
