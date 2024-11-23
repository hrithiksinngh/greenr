'use client'

import { useState, useEffect, useRef, useCallback, useMemo } from 'react'
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

// Add these imports at the top of the file
import { UseOurPortfolioData, UseStatesAndUtsData } from "../../utils/portfolioCarouselData";
import { ThreeDots } from "react-loader-spinner";
import Icon from '../icon/icon';

// At the top of your file, add these custom icon components:
const LightChevronDown = () => (
  <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LightChevronRight = () => (
  <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 13L7 7L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Add this helper function at the top of your component, outside the ProductListing function
const truncateText = (text, maxLength) => {
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

// Add this new component for the mobile search
const MobileSearch = ({ searchTerm, handleSearchChange, handleClearSearch, searchInputRef, statesAndUtsData, portfolioData, onSelect }) => (
  <StateSearchDropdown
    searchTerm={searchTerm}
    handleSearchChange={handleSearchChange}
    handleClearSearch={handleClearSearch}
    searchInputRef={searchInputRef}
    statesAndUtsData={statesAndUtsData}
    portfolioData={portfolioData}
    onSelect={onSelect}
    isMobile={true}
  />
);

// Add this import at the top of the file
import { IoLocationOutline } from "react-icons/io5";

// Update the StateSearchDropdown component
const StateSearchDropdown = ({ searchTerm, handleSearchChange, handleClearSearch, searchInputRef, statesAndUtsData, portfolioData, onSelect, isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const dropdownRef = useRef(null);
  
  // Memoize getFilteredResults with improved filtering
  const getFilteredResults = useCallback(() => {
    if (!inputValue.trim()) return [];
    
    const searchWords = inputValue.toLowerCase().trim().split(/\s+/);
    
    // Create a Set to store unique values
    const uniqueResults = new Set();
    const results = [];

    // Filter companies
    const companies = (portfolioData?.data?.response || [])
      .map(item => ({
        value: item.startupTitle,
        type: 'company'
      }))
      .filter(item => {
        const words = item.value.toLowerCase().split(/\s+/);
        const matches = searchWords.every(searchWord =>
          words.some(word => word.startsWith(searchWord))
        );
        // Only include if it's not already in the results
        if (matches && !uniqueResults.has(item.value)) {
          uniqueResults.add(item.value);
          return true;
        }
        return false;
      });

    // Filter states
    const states = (statesAndUtsData || [])
      .map(state => ({
        value: state,
        type: 'state'
      }))
      .filter(item => {
        const words = item.value.toLowerCase().split(/\s+/);
        const matches = searchWords.every(searchWord =>
          words.some(word => word.startsWith(searchWord))
        );
        // Only include if it's not already in the results
        if (matches && !uniqueResults.has(item.value)) {
          uniqueResults.add(item.value);
          return true;
        }
        return false;
      });
    
    // Combine and sort results
    return [...companies, ...states].sort((a, b) => {
      // Sort by type first (companies before states)
      if (a.type !== b.type) {
        return a.type === 'company' ? -1 : 1;
      }
      // Then sort alphabetically within each type
      return a.value.localeCompare(b.value);
    });
  }, [inputValue, portfolioData?.data?.response, statesAndUtsData]);

  // Memoize filteredResults
  const filteredResults = useMemo(() => getFilteredResults(), [getFilteredResults]);

  // Sync inputValue with searchTerm prop
  useEffect(() => {
    setInputValue(searchTerm || '');
  }, [searchTerm]);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setIsOpen(true);
    
    // Clear search if input is empty
    if (!newValue.trim()) {
      handleClearSearch();
    }
  };

  const handleItemClick = (item) => {
    setInputValue(item.value);
    onSelect(item.value);
    setIsOpen(false);
  };

  const handleClear = () => {
    setInputValue('');
    handleClearSearch();
    setIsOpen(false);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      <div className="relative">
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          ref={searchInputRef}
          type="text"
          placeholder={'Search by Company/State'}
          className="w-full pl-8 pr-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-0 focus:border-gray-300 text-xs placeholder:text-xs placeholder-[#00000080]"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsOpen(true)}
        />
        {inputValue && (
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            onClick={handleClear}
          >
            <FaTimes size={16} />
          </button>
        )}
      </div>
      
      {isOpen && inputValue && (
        <div className={`absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto ${isMobile ? 'fixed left-0 right-0 mx-4' : ''}`}>
          {filteredResults.length > 0 ? (
            <>
              {/* Companies Section */}
              {filteredResults.some(item => item.type === 'company') && (
                <div className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[10px] font-medium uppercase">
                  Companies
                </div>
              )}
              {filteredResults
                .filter(item => item.type === 'company')
                .map((item) => (
                  <div
                    key={`company-${item.value}`}
                    className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleItemClick(item)}
                  >
                    {item.value}
                  </div>
                ))}

              {/* States Section */}
              {filteredResults.some(item => item.type === 'state') && (
                <div className="px-4 py-1.5 bg-gray-50 text-gray-500 text-[10px] font-medium uppercase">
                  States
                </div>
              )}
              {filteredResults
                .filter(item => item.type === 'state')
                .map((item) => (
                  <div
                    key={`state-${item.value}`}
                    className="px-4 py-2 text-xs hover:bg-gray-100 cursor-pointer flex items-center"
                    onClick={() => handleItemClick(item)}
                  >
                    <IoLocationOutline className="mr-2 text-gray-500" size={14} />
                    {item.value}
                  </div>
                ))}
            </>
          ) : (
            <div className="px-4 py-2 text-xs text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default function ProductListing() {
  // Add this near the top of your component
  const { isLoading, data: portfolioData } = UseOurPortfolioData();
  const { isLoading: statesAndUtsLoading, data: statesAndUtsData } = UseStatesAndUtsData();
  const [view, setView] = useState('grid');
  const [selectedFilters, setSelectedFilters] = useState({});
  const [sortBy, setSortBy] = useState('Type of Waste');  // Change default value
  const [searchTerm, setSearchTerm] = useState('');
  const searchInputRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1);

  // Add this new state variable to manage open/closed state of each filter section
  const [openSections, setOpenSections] = useState({
    sectors: true,
    subSectors: {}
  });

  console.log("States and Uts Data:", statesAndUtsData);

  const productsPerPage = 8;

  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef(null);

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  // Add these new state variables
  const [dynamicFilters, setDynamicFilters] = useState({
    sectors: [],
    subSectors: {}
  });

  // Inside the ProductListing component, add these new state variables and functions
  const [isSticky, setIsSticky] = useState(false);
  const mobileControlsRef = useRef(null);
  const originalFilterSectionRef = useRef(null);

  useEffect(() => {
    const header = document.querySelector('header'); // Adjust this selector to match your header
    const headerHeight = header ? header.offsetHeight : 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    if (originalFilterSectionRef.current) {
      observer.observe(originalFilterSectionRef.current);
    }

    return () => {
      if (originalFilterSectionRef.current) {
        observer.unobserve(originalFilterSectionRef.current);
      }
    };
  }, []);

  // Modify the useEffect hook that sets up dynamic filters
  useEffect(() => {
    if (portfolioData?.data?.response) {
      const sectors = new Set();
      const subSectors = {};

      portfolioData.data.response.forEach(item => {
        if (item.sector) {
          sectors.add(item.sector);
          if (!subSectors[item.sector]) {
            subSectors[item.sector] = new Set();
          }
          if (item.subSector) {
            item.subSector.split(',').forEach(subSector => {
              subSectors[item.sector].add(subSector.trim());
            });
          }
        }
      });

      const sectorsArray = Array.from(sectors);
      setDynamicFilters({
        sectors: sectorsArray,
        subSectors: Object.fromEntries(
          Object.entries(subSectors).map(([key, value]) => [key, Array.from(value)])
        )
      });

      // Initialize open/closed state for each sector
      setOpenSections(prev => ({
        ...prev,
        subSectors: Object.fromEntries(sectorsArray.map(sector => [sector, true]))
      }));
    }
  }, [portfolioData]);

  // Memoize sortProducts function
  const sortProducts = useCallback((products) => {
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
  }, [sortBy]);

  // Memoize filteredProducts calculation
  const filteredProducts = useMemo(() => {
    return sortProducts(
      (portfolioData?.data?.response || []).filter(product => {
        if (searchTerm) {
          const searchWords = searchTerm.toLowerCase().trim().split(/\s+/);
          
          const titleWords = product.startupTitle.toLowerCase().split(/\s+/);
          const matchesTitle = searchWords.every(searchWord =>
            titleWords.some(word => word.startsWith(searchWord))
          );

          const stateMatches = product.states?.split(',').some(state => {
            const stateWords = state.trim().toLowerCase().split(/\s+/);
            return searchWords.every(searchWord =>
              stateWords.some(word => word.startsWith(searchWord))
            );
          }) || false;

          return matchesTitle || stateMatches;
        }

        if (Object.values(selectedFilters).every(arr => arr.length === 0)) {
          return true;
        }

        return Object.entries(selectedFilters).some(([category, values]) => {
          if (values.length === 0) return false;
          if (category === 'sectors') {
            return values.includes(product.sector);
          } else {
            return values.some(value =>
              product.subSector && product.subSector.split(',').map(s => s.trim()).includes(value)
            );
          }
        });
      })
    );
  }, [portfolioData?.data?.response, searchTerm, selectedFilters, sortProducts]);

  // Memoize currentProducts calculation
  const currentProducts = useMemo(() => {
    return filteredProducts.slice(
      (currentPage - 1) * productsPerPage,
      currentPage * productsPerPage
    );
  }, [filteredProducts, currentPage, productsPerPage]);

  // Memoize totalPages calculation
  const totalPages = useMemo(() => {
    return Math.ceil(filteredProducts.length / productsPerPage);
  }, [filteredProducts.length, productsPerPage]);

  // Add necessary imports at the top of the file
  const handleFilterChange = useCallback((category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: prev[category] ?
        prev[category].includes(value) ?
          prev[category].filter(item => item !== value) :
          [...prev[category], value] :
        [value]
    }));
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedFilters({});
  }, []);

  const handleSortChange = useCallback((type) => {
    setSortBy(type);
    setIsSortDropdownOpen(false);
  }, []);

  const handlePageChange = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  // Inside your component, before the return statement, add this custom icon:
  const ThinXIcon = () => (
    <svg width="10" height="10" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L11 11M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
  };

  const handleSearchChange = (e) => {
    // This won't be used directly anymore as we're using the dropdown's internal state
  };

  // Add this function to toggle open/closed state of filter sections
  const toggleSection = (section, subsection = null) => {
    if (subsection) {
      setOpenSections(prev => ({
        ...prev,
        subSectors: {
          ...prev.subSectors,
          [subsection]: !prev.subSectors[subsection]
        }
      }));
    } else {
      setOpenSections(prev => ({
        ...prev,
        [section]: !prev[section]
      }));
    }
  };

  // Add this new function
  const handleStateSelect = (state) => {
    setSearchTerm(state); // Only set the search term when a state is selected
  };

  return (
    <>
      {isLoading ? (
        <div className="h-screen">
          <div className="mx-auto h-[70%] flex flex-col items-center justify-center text-black text-xl md:text-4xl">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#6b9080"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        <div className="container mx-auto sm:px-4">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs mb-3 md:mb-6">
            <Link href="/" className="text-[#000000] cursor-pointer">Home</Link>
            <span className="text-[#000000]">{'>'}</span>
            <span className="text-[#00000080]">Portfolios</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Our Portfolio</h1>

          {/* Description and Controls */}
          <div ref={originalFilterSectionRef}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-6">
              <p className="text-gray-600 text-sm md:text-base mb-3 md:mb-0">Explore innovative green companies scaling to mitigate environmental degradation</p>
              <div className="flex flex-col md:flex-row w-full md:w-auto">
                {/* Mobile view: Search, Sort and Filter */}
                <div className="flex items-center justify-between mb-2 md:mb-0 md:hidden w-full">
                  {/* Mobile Search */}
                  <div className="flex-grow mr-2">
                    <StateSearchDropdown
                      searchTerm={searchTerm}
                      handleSearchChange={handleSearchChange}
                      handleClearSearch={handleClearSearch}
                      searchInputRef={searchInputRef}
                      statesAndUtsData={statesAndUtsData?.data?.response}
                      portfolioData={portfolioData}
                      onSelect={(item) => setSearchTerm(item)}
                      isMobile={true}
                    />
                  </div>

                  {/* Custom Sort Dropdown */}
                  {/* <div className="relative" ref={sortDropdownRef}>
                  <button
                    className="flex items-center justify-center bg-white rounded-md py-2 px-3 text-xs border border-[#e5e5e5] focus:outline-none focus:ring-0 focus:border-[#e5e5e5]"
                    onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
                  >
                    <MdOutlineSort className="text-[#000000]" size={20} />
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
                </div> */}

                  {/* Mobile Filter Button */}
                  <button
                    className="flex items-center justify-center ml-2 px-3 py-2 text-xs bg-[#4d7297] text-white rounded"
                    onClick={() => setIsMobileFiltersOpen(true)}
                  >
                    <FaFilter size={14} className="mr-2" />
                    <span>Filters</span>
                  </button>
                </div>

                {/* Desktop view: Sort Dropdown and View Switcher */}
                <div className="hidden md:flex items-center space-x-4">
                  {/* View Switcher - Only visible on desktop */}
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${
                        view === 'grid' 
                          ? 'bg-white text-[#3449B2] shadow-sm' 
                          : 'text-gray-600 hover:text-[#3449B2]'
                      }`}
                      onClick={() => switchView('grid')}
                    >
                      <BsGrid size={14} />
                      <span>Grid</span>
                    </button>
                    <button
                      className={`flex items-center space-x-2 px-3 py-1.5 rounded-md text-xs transition-all duration-200 ${
                        view === 'list' 
                          ? 'bg-white text-[#3449B2] shadow-sm' 
                          : 'text-gray-600 hover:text-[#3449B2]'
                      }`}
                      onClick={() => switchView('list')}
                    >
                      <FaList size={14} />
                      <span>List</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            {/* Filter Section */}
            <div className={`w-full md:w-1/4 fixed md:static top-0 left-0 h-full md:h-auto z-50 md:z-0 bg-white md:bg-transparent transition-transform duration-300 ease-in-out transform ${isMobileFiltersOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
              <div className="bg-[#FFFFFF] h-full md:h-auto flex flex-col md:rounded-lg md:border md:border-gray-200 md:shadow-sm">
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
                    {/* Desktop search functionality - hide on mobile */}
                    <div className="relative mb-4 hidden md:block">
                      <StateSearchDropdown
                        searchTerm={searchTerm}
                        handleSearchChange={handleSearchChange}
                        handleClearSearch={handleClearSearch}
                        searchInputRef={searchInputRef}
                        statesAndUtsData={statesAndUtsData?.data?.response}
                        portfolioData={portfolioData}
                        onSelect={(item) => setSearchTerm(item)}
                        isMobile={true}
                      />
                    </div>

                    {/* Divider line - hidden on mobile */}
                    <hr className="border-t border-gray-200 mb-4 hidden md:block" />

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
                        {/* Divider line after Filter Products - hidden on mobile */}
                        <hr className="border-t border-gray-200 mb-4 hidden md:block" />
                      </>
                    )}

                    {/* Collapsible Filters */}
                    <div className="mb-6">
                      {/* Sectors filter */}
                      <div className="mb-6">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleSection('sectors')}>
                          <h3 className="">Sectors</h3>
                          {openSections.sectors ? <LightChevronDown /> : <LightChevronRight />}
                        </div>
                        {openSections.sectors && (
                          <div className="mt-2 space-y-2">
                            {dynamicFilters.sectors.map(sector => (
                              <div key={sector}>
                                <label className="flex items-center text-xs">
                                  <input
                                    type="checkbox"
                                    className="mr-2 rounded border-[#d9d9d9] text-[#6b9080] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                                    checked={selectedFilters.sectors?.includes(sector) || false}
                                    onChange={() => handleFilterChange('sectors', sector)}
                                  />
                                  {sector}
                                </label>
                                
                                {/* Show subsectors only when sector is selected */}
                                {selectedFilters.sectors?.includes(sector) && dynamicFilters.subSectors[sector] && (
                                  <div className="ml-6 mt-2 space-y-2">
                                    {dynamicFilters.subSectors[sector].map(subSector => (
                                      <label key={subSector} className="flex items-center text-xs">
                                        <input
                                          type="checkbox"
                                          className="mr-2 rounded border-[#d9d9d9] text-[#6b9080] focus:ring-0 focus:ring-offset-0 cursor-pointer"
                                          checked={selectedFilters[sector]?.includes(subSector) || false}
                                          onChange={() => handleFilterChange(sector, subSector)}
                                        />
                                        {subSector}
                                      </label>
                                    ))}
                                  </div>
                                )}
                              </div>
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
            {isLoading ? (
              <div className="mx-auto h-[200px] flex flex-col items-center justify-center text-black text-xl md:text-4xl">
                <ThreeDots
                  height="80"
                  width="80"
                  radius="9"
                  color="#6b9080"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              </div>
            ) : (
              <div className="w-full md:w-3/4">
                <div
                  className={`${view === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2' : 'flex flex-col'} gap-4 md:gap-6`}
                >
                  {currentProducts.map(product => (
                    <div
                      key={product.startupTitle}
                      className={`bg-[#FFFFFF] border rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex ${view === 'list' ? 'flex-row' : 'flex-col'} transform hover:-translate-y-1 hover:scale-[1.02] max-h-[550px]`}
                    >
                      <img
                        src={product.productImage}
                        alt={product.startupTitle}
                        className={`object-cover ${view === 'list' ? 'w-1/3 h-auto' : 'w-full h-48 sm:h-56'}`}
                      />
                      <div
                        className={`p-4 sm:p-4 md:p-6 flex flex-col ${view === 'list' ? 'w-2/3' : 'w-full'}`}
                      >
                        <div className="flex flex-col h-full">
                          {product.subSector && <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 md:mb-4">
                            {product.subSector.split(',').map(tag => (
                              <span
                                key={tag}
                                className="bg-[#f5f5f5] text-[#000000D9] text-[0.55rem] font-semibold sm:text-[0.55rem] md:text-[0.6rem] px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-xl"
                              >
                                {tag.trim()}
                              </span>
                            ))}
                          </div>}
                          <h3 className="font-semibold text-sm md:text-[18px] mb-1">{product.startupTitle}</h3>
                          <p
                            className="text-[0.65rem] sm:text-xs md:text-sm text-[#3449B2] mb-1 md:mb-2 flex items-center cursor-pointer"
                            onClick={() => window.open(product.websiteLink, '_blank', 'noopener,noreferrer')}
                          >
                            <BsGlobe className="mr-1 sm:mr-1.5" size={12} color="#3449B2" />
                            {product.companyName}
                          </p>
                          <p
                            className={`text-[0.65rem] sm:text-xs md:text-[14px] text-[#00000099] ${product.isFactsheetAvailable !== 'No' ? 'line-clamp-3' : 'line-clamp-4'}`}
                            style={{
                              display: '-webkit-box',
                              WebkitBoxOrient: 'vertical',
                              WebkitLineClamp: product.isFactsheetAvailable !== 'No' ? 3 : 4
                            }}
                          >
                            {product.businessDescription}
                          </p>
                        </div>
                        {product.isFactsheetAvailable !== 'No' && (
                          <div className="mt-auto pt-4">
                            <button
                              className="bg-[#4d7297] text-white px-3 py-1.5 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5 rounded-md hover:bg-[#3d5a75] transition-colors duration-300 flex items-center text-[0.6rem] md:text-sm font-semibold w-fit"
                              onClick={() => window.open(`/portfolio/${product.startupTitle.toLowerCase().replace(/ /g, '-')}`, '_blank', 'noopener noreferrer')}
                            >
                              Know More
                              <FaChevronRight className="ml-1 sm:ml-2" size={10} />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                {filteredProducts.length > 0 ? (
                  <div className="mt-6 md:mt-8 mb-8 md:mb-0">
                    <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalItems={filteredProducts.length}
                      onPageChange={handlePageChange}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center mt-6">
                    <Icon
                      name="not-found"
                      width={128}
                      height={150}
                      className="text-gray-400"
                    />
                    <p className="text-center text-gray-500 mt-6 mb-12">No products found matching your criteria.</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Controls - Sticky below header */}
          <div 
            ref={mobileControlsRef}
            className={`md:hidden fixed left-0 right-0 bg-white z-40 transition-all duration-300 ${
              isSticky ? 'shadow-md' : 'pointer-events-none opacity-0'
            }`}
            style={{
              top: 'var(--header-height, 70px)', // Adjust to match your header height
              transform: isSticky ? 'translateY(0)' : 'translateY(-100%)',
            }}
          >
            <div className="container mx-auto py-2">
              <div className="flex items-center justify-between">
                {/* Mobile Search */}
                <div className="flex-grow mr-2">
                  <StateSearchDropdown
                    searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                    handleClearSearch={handleClearSearch}
                    searchInputRef={searchInputRef}
                    statesAndUtsData={statesAndUtsData?.data?.response}
                    portfolioData={portfolioData}
                    onSelect={(item) => setSearchTerm(item)}
                    isMobile={true}
                  />
                </div>

                {/* Mobile Filter Button */}
                <button
                  className="flex items-center justify-center ml-2 px-3 py-2 text-xs bg-[#4d7297] text-white rounded"
                  onClick={() => setIsMobileFiltersOpen(true)}
                >
                  <FaFilter size={14} className="mr-2" />
                  <span>Filters</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}