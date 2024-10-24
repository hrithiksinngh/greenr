import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';

const ProductCard = ({ product, view }) => {
  const descriptionStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    lineHeight: '1.2em',
    maxHeight: '2.4em', // 2 lines * 1.2em line-height
  };

  const titleStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  };

  const handleCompanyClick = (e) => {
    e.preventDefault();
    if (product.websiteLink) {
      window.open(product.websiteLink, '_blank', 'noopener,noreferrer');
    }
  };

  if (view === 'grid') {
    return (
      <div className="p-1 h-full">
        <div className="bg-[#FFFFFF] border rounded-lg overflow-hidden shadow-lg transition-all duration-300 w-full h-full flex flex-col hover:scale-[1.02] hover:shadow-lg">
          <img src={product?.productImage} alt={product?.title} className="w-full h-40 object-cover" />
          <div className="p-6 flex flex-col flex-grow">
            <div className="flex flex-wrap gap-2 mb-2">
              {product?.subSector?.split(',').slice(0, 2).map(tag => (
                <span key={tag.trim()} className="bg-[#f5f5f5] text-[#000000D9] text-[0.65rem] px-2.5 py-1.5 rounded-xl">
                  {tag.trim()}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-lg mb-1" style={titleStyle} title={product.startupTitle}>{product.startupTitle}</h3>
            <p className="text-xs text-[#3449B2] mb-2 flex items-center cursor-pointer" onClick={handleCompanyClick}>
              <BsGlobe className="mr-1 flex-shrink-0" size={12} color="#3449B2" />
              <span className="truncate">{product.companyName}</span>
            </p>
            <p className="text-xs text-[#00000099] mb-4 flex-grow" style={descriptionStyle}>{product.businessDescription}</p>
            {product.isFactsheetAvailable !== 'No' && (
              <button className="bg-[#4d7297] text-white px-4 py-2 rounded-md hover:bg-[#3d5a75] transition-colors duration-300 flex items-center text-xs font-semibold mt-auto w-fit">
                View Factsheet
                <FaChevronRight className="ml-2" size={10} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="p-1">
        <div className="flex bg-[#FFFFFF] border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
          <img src={product?.productImage} alt={product?.startupTitle} className="w-[45%] object-cover" />
          <div className="p-6 w-3/4 pl-8 flex flex-col">
            <div className="flex flex-wrap gap-2 mb-4">
              {product?.subSector?.split(',').map(tag => (
                <span key={tag.trim()} className="bg-[#f5f5f5] text-[#000000D9] text-[0.65rem] px-2.5 py-1.5 rounded-xl">
                  {tag.trim()}
                </span>
              ))}
            </div>
            <h3 className="font-semibold text-lg mb-2" style={titleStyle} title={product.startupTitle}>{product.startupTitle}</h3>
            <p className="text-xs text-[#3449B2] mb-2 flex items-center cursor-pointer" onClick={handleCompanyClick}>
              <BsGlobe className="mr-1" size={12} color="#3449B2" />
              <span className="truncate">{product.companyName}</span>
            </p>
            <p className="text-xs text-[#00000099] mb-4 flex-grow" style={descriptionStyle}>{product.businessDescription}</p>
            {product.isFactsheetAvailable !== 'No' && (
              <button className="bg-[#4d7297] text-white px-4 py-2 rounded-md hover:bg-[#3d5a75] transition-colors duration-300 flex items-center text-xs mt-auto" onClick={() => window.location.href = `/portfolio/${product.startupTitle.toLowerCase().replace(/ /g, '-')}`}>
                View Factsheet
                <FaChevronRight className="ml-2" size={10} />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default ProductCard;
