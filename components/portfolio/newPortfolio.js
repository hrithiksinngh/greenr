'use client'

import { useState, useEffect, useRef } from 'react'
import { FaChevronDown, FaChevronRight, FaSearch, FaList, FaFilter } from 'react-icons/fa'
import { BsGrid } from 'react-icons/bs'
import { MdOutlineSort, MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { BsGlobe } from "react-icons/bs";

// At the top of your file, add this import:
import { FaTimes } from 'react-icons/fa';

// Add this import at the top of the file
import Pagination from '../Pagination/Pagination';
import Link from 'next/link';
import { mockProducts } from '../../utils/data';

// At the top of your file, add these custom icon components:
const LightChevronDown = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LightChevronRight = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Filters data for Category, Type of Waste, and Sectors
const filters = {
  category: ['Waste Avoidance', 'Waste Management', 'Waste-to-Value'],
  typeOfWaste: ['Agri Waste', 'Biodegradable Waste', 'Chemical Waste', 'C&D Waste', 'E-Waste', 'Food Waste', 'Industrial Waste', 'Oil Waste'],
  sectors: ['Agriculture', 'Building and Construction', 'Decorations', 'Energy', 'Food and Beverages', 'Service Industry', 'Stationery']
};

// Add this helper function at the top of your component, outside the ProductListing function
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

export default function ProductListing() {
  const [view, setView] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState('Type of Waste');  // Change default value
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const [isTypeOfWasteOpen, setIsTypeOfWasteOpen] = useState(true);
  const [isSectorsOpen, setIsSectorsOpen] = useState(true);

  const productsPerPage = 8;

  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef(null);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category] ?
        prev[category].includes(value) ?
          prev[category].filter(item => item !== value) :
          [...prev[category], value] :
        [value]
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({});
  };

  const handleSortChange = (type) => {
    console.log('handleSortChange called with:', type);
    setSortBy(type);
    setIsSortDropdownOpen(false);
  };

  // Add this function to sort the products
  const sortProducts = (products) => {
    if (sortBy === 'Type of Waste') {
      return products;
    }
    return [...products].sort((a, b) => {
      const aHasType = a.tags.includes(sortBy);
      const bHasType = b.tags.includes(sortBy);
      if (aHasType && !bHasType) return -1;
      if (!aHasType && bHasType) return 1;
      return 0;
    });
  };

  // Modify the filteredProducts calculation
  const filteredProducts = sortProducts(
    mockProducts.filter(product => {
      // If no filters are selected, show all products
      if (Object.values(selectedFilters).every(arr => arr.length === 0)) {
        return true;
      }
      
      // Check if the product matches any of the selected filters
      return Object.entries(selectedFilters).some(([category, values]) => {
        if (values.length === 0) return false;
        return values.some(value => product.tags.includes(value));
      });
    }).filter(product =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate total pages based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Ensure currentPage is valid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages));
    }
  }, [currentPage, totalPages]);

  // Get the current page of products
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Inside your component, before the return statement, add this custom icon:
  const ThinXIcon = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const switchView = (newView) => {
    if (newView !== view) {
      setView(newView);
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target)) {
        setIsSortDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortDropdownRef]);

  const handleClearSearch = () => {
    setSearchTerm('');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto sm:px-4">
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs mb-3 md:mb-6">
        <Link href="/" className="text-[#000000] cursor-pointer">Home</Link>
        <span className="text-[#000000]">{'>'}</span>
        <span className="text-[#00000080]">Portfolios</span>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Portfolio</h1>

      {/* Description and Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
        <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-0">Explore innovative green companies scaling to mitigate environmental degradation</p>
        <div className="flex flex-col md:flex-row w-full md:w-auto">
          {/* Mobile view: Sort and Filter buttons */}
          <div className="flex justify-between items-center mb-3 md:hidden w-full">
            {/* Custom Sort Dropdown */}
            <div className="relative flex-grow mr-2" ref={sortDropdownRef}>
              <button
                className="flex items-center justify-between bg-white rounded-md py-2 px-3 text-xs border border-[#e5e5e5] focus:outline-none focus:ring-0 focus:border-[#e5e5e5] w-full"
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              >
                <div className="flex items-center">
                  <MdOutlineSort className="text-[#000000] mr-2" size={20} />
                  <span className="truncate">Sort: {truncateText(sortBy, 15)}</span>
                </div>
                <MdKeyboardArrowDown className={`transition-transform duration-300 ${isSortDropdownOpen ? 'rotate-180' : ''}`} size={20} />
              </button>
              {isSortDropdownOpen && (
                <div className="absolute z-50 mt-1 w-full bg-white border border-[#e5e5e5] rounded-md shadow-lg max-h-60 overflow-y-auto">
                  <ul className="py-1">
                    <li
                      className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortChange('Type of Waste')}
                    >
                      Type of Waste
                    </li>
                    {filters.typeOfWaste.map(type => (
                      <li
                        key={type}
                        className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSortChange(type)}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* Mobile Filter Button */}
            <button
              className="flex items-center justify-center space-x-2 p-2 text-xs bg-[#4d7297] text-white rounded w-1/3"
              onClick={() => setIsMobileFiltersOpen(true)}
            >
              <FaFilter size={14} />
              <span>Filters</span>
            </button>
          </div>

          {/* Desktop view: Sort Dropdown and View Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Custom Sort Dropdown for desktop */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                className="flex items-center space-x-2 bg-white rounded-md py-2 px-3 text-xs border border-[#e5e5e5] focus:outline-none focus:ring-0 focus:border-[#e5e5e5]"
                onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              >
                <MdOutlineSort className="text-[#000000]" size={20} />
                <span className="max-w-[120px] truncate">Sort by: {truncateText(sortBy, 20)}</span>
                <MdKeyboardArrowDown className={`transition-transform duration-300 ${isSortDropdownOpen ? 'rotate-180' : ''}`} size={20} />
              </button>
              {isSortDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-[#e5e5e5] rounded-md shadow-lg">
                  <ul className="py-1">
                    <li
                      className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSortChange('Type of Waste')}
                    >
                      Type of Waste
                    </li>
                    {filters.typeOfWaste.map(type => (
                      <li
                        key={type}
                        className="px-3 py-2 text-xs hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleSortChange(type)}
                      >
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            {/* View Switcher - Only visible on desktop */}
            <button
              className="flex items-center space-x-2 p-2 text-xs"
              onClick={() => switchView(view === 'grid' ? 'list' : 'grid')}
            >
              {view === 'grid' ? (
                <>
                  <FaList size={14} className="text-[#3449B2] text-xs" />
                  <span className="text-[#3449B2] text-xs">List View</span>
                </>
              ) : (
                <>
                  <BsGrid size={14} className="text-[#3449B2] text-xs" />
                  <span className="text-[#3449B2] text-xs">Grid View</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        {/* Filter Section */}
        <div className={`w-full md:w-1/4 fixed md:static top-0 left-0 h-full md:h-auto z-50 md:z-0 bg-white md:bg-transparent transition-transform duration-300 ease-in-out transform ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <div className="bg-[#FFFFFF] h-full md:h-auto flex flex-col">
            {/* Sticky header for mobile */}
            <div className="md:hidden sticky top-0 bg-white z-10 p-4 border-b border-gray-200">
              <button
                className="absolute top-4 right-4 text-gray-500"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                <FaTimes size={24} />
              </button>
              <h2 className="text-lg font-semibold">Filters</h2>
            </div>
            
            {/* Scrollable filter content */}
            <div className="flex-grow overflow-y-auto p-4">
              {/* Filter Content Wrapper */}
              <div className="md:mt-0">
                {/* Search functionality */}
                <div className="relative mb-4">
                  <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    ref={searchInputRef}
                    type="text" 
                    placeholder='Search by "State/Company"'
                    className="w-full pl-8 pr-8 py-2 focus:outline-none focus:ring-0 border-none text-sm placeholder-[#00000080]"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                  {searchTerm && (
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      onClick={handleClearSearch}
                    >
                      <FaTimes size={16} />
                    </button>
                  )}
                </div>

                {/* Divider line */}
                <hr className="border-t border-gray-200 mb-4" />

                {/* Selected Filters */}
                {Object.keys(selectedFilters).length > 0 && (
                  <>
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="font-semibold">Filter Products</h2>
                        <button 
                          className="text-sm text-[#E41E25CC] cursor-pointer hover:text-[#E41E25] transition-colors duration-200" 
                          onClick={clearFilters}
                        >
                          Clear All
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {Object.entries(selectedFilters).flatMap(([category, values]) =>
                          values.map(value => (
                            <span 
                              key={`${category}-${value}`} 
                              className="bg-[#fafafa] border border-[#0000001A] text-[#000000D9] text-xs font-normal px-2.5 py-1.5 rounded-3xl flex items-center"
                            >
                              {value}
                              <button
                                onClick={() => handleFilterChange(category, value)}
                                className="ml-1 text-[#000000D9] hover:text-black"
                              >
                                <ThinXIcon />
                              </button>
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                    {/* Divider line after Filter Products */}
                    <hr className="border-t border-gray-200 mb-4" />
                  </>
                )}

                {/* Collapsible Filters */}
                <div className="mb-6">
                  {/* Category filter */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
                      <h3 className="">Category</h3>
                      {isCategoryOpen ? <LightChevronDown className="text-lg"/> : <LightChevronRight className="text-lg"/>}
                    </div>
                    {isCategoryOpen && (
                      <div className="mt-2 space-y-2">
                        {filters.category.map(category => (
                          <label key={category} className="flex items-center text-xs">
                            <input
                              type="checkbox"
                              className="mr-2 rounded border-[#d9d9d9] text-[#6b9080] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                              checked={selectedFilters.category?.includes(category) || false}
                              onChange={() => handleFilterChange('category', category)}
                            />
                            {category}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  <hr className="border-gray-200 mb-6" /> {/* Changed border color */}

                  {/* Type of Waste filter */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsTypeOfWasteOpen(!isTypeOfWasteOpen)}>
                      <h3 className="">Type of Waste</h3>
                      {isTypeOfWasteOpen ? <LightChevronDown /> : <LightChevronRight />}
                    </div>
                    {isTypeOfWasteOpen && (
                      <div className="mt-2 space-y-2">
                        {filters.typeOfWaste.map(type => (
                          <label key={type} className="flex items-center text-xs">
                            <input
                              type="checkbox"
                              className="mr-2 rounded border-[#d9d9d9] text-[#6b9080] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                              checked={selectedFilters.typeOfWaste?.includes(type) || false}
                              onChange={() => handleFilterChange('typeOfWaste', type)}
                            />
                            {type}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                  <hr className="border-gray-200 mb-6" /> {/* Changed border color */}

                  {/* Sectors filter */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsSectorsOpen(!isSectorsOpen)}>
                      <h3 className="">Sectors</h3>
                      {isSectorsOpen ? <LightChevronDown /> : <LightChevronRight />}
                    </div>
                    {isSectorsOpen && (
                      <div className="mt-2 space-y-2">
                        {filters.sectors.map(sector => (
                          <label key={sector} className="flex items-center text-xs">
                            <input
                              type="checkbox"
                              className="mr-2 rounded border-[#d9d9d9] text-[#6b9080] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                              checked={selectedFilters.sectors?.includes(sector) || false}
                              onChange={() => handleFilterChange('sectors', sector)}
                            />
                            {sector}
                          </label>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Listings */}
        <div className="w-full md:w-3/4">
          <div
            className={`${view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'} gap-4 md:gap-6`}
          >
            {currentProducts.map(product => (
              <div
                key={product.id}
                className={`bg-[#FFFFFF] border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex ${view === 'list' ? 'flex-row' : 'flex-col'} transform hover:-translate-y-1 hover:scale-[1.02]`}
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className={`object-cover ${view === 'list' ? 'w-1/3 h-auto' : 'w-full h-48 sm:h-56'}`}
                />
                <div
                  className={`p-4 sm:p-4 md:p-6 flex flex-col ${view === 'list' ? 'w-2/3' : 'w-full'}`}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 md:mb-4">
                      {product.tags.map(tag => (
                        <span
                          key={tag}
                          className="bg-[#f5f5f5] text-[#000000D9] text-[0.6rem] sm:text-[0.65rem] md:text-[0.7rem] px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-xl"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-semibold text-sm md:text-lg mb-1">{product.title}</h3>
                    <p className="text-[0.65rem] sm:text-xs md:text-sm text-[#3449B2] mb-1 md:mb-2 flex items-center cursor-pointer">
                      <BsGlobe className="mr-1 sm:mr-1.5" size={12} color="#3449B2" />
                      {product.company}
                    </p>
                    <p 
                      className="text-[0.65rem] sm:text-xs md:text-sm text-[#00000099] mb-2 md:mb-4 line-clamp-2 overflow-hidden"
                      style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      className="bg-[#4d7297] text-white px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5 rounded-md hover:bg-[#3d5a75] transition-colors duration-300 flex items-center text-[0.6rem] md:text-sm font-semibold w-fit"
                      onClick={() => window.location.href = `/portfolio/${product.title.toLowerCase().replace(/ /g, '-')}`}
                    >
                      View Factsheet
                      <FaChevronRight className="ml-1 sm:ml-2" size={10} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {filteredProducts.length > 0 ? (
            <div className="mt-6 md:mt-8">
              <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={filteredProducts.length}
                onPageChange={handlePageChange}
              />
            </div>
          ) : (
            <p className="text-center mt-6 text-gray-500">No products found matching your criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
}
