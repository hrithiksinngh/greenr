import React, { useState } from "react";
import { UsePortfolioData } from "../../utils/portfolioCarouselData";

import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
// import { IoChevronDown, IoChevronUp } from "react-icons/ai";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { ThreeDots } from "react-loader-spinner";
import { motion } from "framer-motion";
const MainPortfolio = () => {
  let { isLoading, data: userHero } = UsePortfolioData();

  const portfolioAllData = userHero && userHero.data.response;

  const [show, setShow] = useState(false);
  const [selectSector, setSelectSector] = useState("");
  const [query, setQuery] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const selectSectorFilterData =
    portfolioAllData &&
    portfolioAllData.filter((item) => item[5] === selectSector);
  const portfolioData =
    selectSector !== ""
      ? selectSectorFilterData && selectSectorFilterData
      : portfolioAllData && portfolioAllData;

  const filteredResults =
    portfolioData &&
    portfolioData.filter((item) => {
      if (Array.isArray(item) && item.length > 0) {
        const firstElement = item[1].toLowerCase();
        return firstElement.includes(query.toLowerCase());
      }
      return false;
    });
  let itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = portfolioData?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(portfolioData?.length / itemsPerPage);

  const displayPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5; // You can adjust this value based on your preference

    let startPage;
    let endPage;

    if (totalPages <= maxPageButtons) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPageButtons / 2)) {
        startPage = 1;
        endPage = maxPageButtons;
      } else if (currentPage + Math.floor(maxPageButtons / 2) >= totalPages) {
        startPage = totalPages - maxPageButtons + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPageButtons / 2);
        endPage = currentPage + Math.floor(maxPageButtons / 2);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`flex items-center justify-center text-xs  font-semibold rounded-full h-5 w-5 ${
            currentPage === i
              ? "bg-[#6b9080] text-white"
              : "bg-[#6b9080]/50 text-white"
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // console.log("portfolioData", portfolioData && portfolioData);
  const fifthElements =
    portfolioAllData && portfolioAllData.map((subArray) => subArray[5]);

  const uniqueValues = new Set(fifthElements);

  // Convert the Set back to an array
  const sectorSelectData = ["All", ...uniqueValues];

  return (
    <div>
      <div className="px-4 text-xl md:text-4xl text-[#000000] font-bold font-montserrat hiddenAnimation">
        Our Portfolio{" "}
      </div>
      <div className="px-4 flex flex-col md:flex-row md:justify-between md:mt-4 hiddenAnimation">
        <div className="mt-2 text-base text-[#000000]/70 font-light">
          Explore innovative green companies scaling to mitigate environmental
          degradation.
        </div>
      </div>
      <div className="px-4 py-4 md:flex hidden flex-row mb-4 mt-6">
        <div className="px-3 flex flex-row items-center border border-[#000000]/20 rounded-[6px]">
          <IoIosSearch />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-60 bg-transparent  py-2 ml-2 outline-0"
            placeholder="Search for portfolio"
          />
        </div>
        <div className="ml-6 flex flex-row items-center text-lg py-1 border border-[#000000]/20 rounded-[6px]">
          <div className={`w-52 relative`}>
            <div
              onClick={() => setShow(!show)}
              className="flex flex-row items-center justify-between cursor-pointer px-4 w-full"
            >
              {selectSector ? <div>{selectSector}</div> : <div>All</div>}

              <div
                className={`md:pl-2 lg:pl-6 ease-linear duration-150 text-white cursor-pointer`}
              >
                {show ? (
                  <IoChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <IoChevronDown className="w-5 h-5 text-black" />
                )}
              </div>
            </div>
            {show && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                exit={{ y: -50, opacity: 0 }}
                className={`absolute right-0 top-13 bg-[#ffffff] rounded-lg flex flex-col w-[100%] pt-2 pb-2 z-50 mt-2 `}
              >
                {sectorSelectData &&
                  sectorSelectData.map((ele, i) => {
                    return (
                      <div
                        className={`pl-3 font-medium flex items-center px-2 py-2  text-[14px] rounded-lg mx-3 md-3 text-black  hover:bg-[#6b9080]/80 hover:text-white   ease-linear duration-150 cursor-pointer`}
                        onClick={() => {
                          setSelectSector(ele === "All" ? "" : ele);
                          setShow(!show);
                        }}
                        key={i}
                      >
                        {ele}
                      </div>
                    );
                  })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="md:hidden px-4 mt-6 mb-4">
        <div className="px-3 flex flex-row items-center border border-[#000000]/20 rounded-[6px]">
          <IoIosSearch />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent  py-2 ml-2 outline-0"
            placeholder="Search for portfolio"
          />
        </div>
        <div className="w-full mt-4 flex flex-row items-center text-base py-2 border border-[#000000]/20 rounded-[6px]">
          <div className={`w-full relative`}>
            <div
              onClick={() => setShow(!show)}
              className="flex flex-row items-center justify-between cursor-pointer px-4 w-full"
            >
              {selectSector ? <div>{selectSector}</div> : <div>All</div>}

              <div
                className={`md:pl-2 lg:pl-6 ease-linear duration-150 text-white cursor-pointer`}
              >
                {show ? (
                  <IoChevronUp className="w-5 h-5 text-black" />
                ) : (
                  <IoChevronDown className="w-5 h-5 text-black" />
                )}
              </div>
            </div>
            {show && (
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                exit={{ y: -50, opacity: 0 }}
                className={`absolute right-0 top-13 bg-[#ffffff] rounded-lg flex flex-col w-[100%] pt-2 pb-2 z-50 mt-2 `}
              >
                {sectorSelectData &&
                  sectorSelectData.map((ele, i) => {
                    return (
                      <div
                        className={`pl-3 font-medium flex items-center px-2 py-2  text-[14px] rounded-lg mx-3 md-3 text-black  hover:bg-[#6b9080]/80 hover:text-white   ease-linear duration-150 cursor-pointer`}
                        onClick={() => {
                          setSelectSector(ele === "All" ? "" : ele);
                          setShow(!show);
                        }}
                        key={i}
                      >
                        {ele}
                      </div>
                    );
                  })}
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {isLoading && isLoading === true ? (
        <div className="mx-auto h-[200px]   flex flex-col items-center justify-center text-black textxl md:text-4xl  ">
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
      ) : query !== "" && filteredResults.length === 0 ? (
        <div className="mx-auto h-[200px]   flex flex-col items-center justify-center text-black textxl md:text-4xl  ">
          <div>There is no portfolio that matches the given criteria.</div>
        </div>
      ) : query !== "" && filteredResults.length !== 0 ? (
        <div className="">
          {filteredResults &&
            filteredResults?.map((ele, i) => {
              return (
                <a
                  className={
                    i === filteredResults.length - 1
                      ? "flex flex-row px-4 md:px-12 py-10 md:items-center  hover:scale-105 hover:bg-white hover:rounded-[12px] mainTransitionCard hover:border-b-0 hover:cursor-pointer"
                      : "flex flex-row px-4 md:px-12 py-10 md:items-center md:border-b-2 border-[#000000]/10 hover:scale-105 hover:bg-white hover:rounded-[12px] mainTransitionCard hover:border-b-0 hover:cursor-pointer"
                  }
                  key={i}
                  href={ele[6]}
                  target="_blank"
                >
                  <a
                    className="w-[20%] md:flex hidden bg-white p-8 rounded-xl h-[180px] flex flex-row justify-center"
                    href={ele[6]}
                    target="_blank"
                  >
                    <div className="flex flex-row justify-center items-center">
                      <img
                        src={ele[0]}
                        alt="Card Img"
                        width={200}
                        height={150}
                      />
                    </div>
                  </a>
                  <a
                    className="w-[40%] md:hidden h-[100px] p-8 bg-white rounded-xl flex flex-row justify-center"
                    href={ele[6]}
                    target="_blank"
                  >
                    <div className="flex flex-row justify-center items-center">
                      <img
                        src={ele[0]}
                        alt="Card Img"
                        width={200}
                        height={150}
                      />
                    </div>
                  </a>
                  <div className="w-[60%] md:w-[80%] mx-4 md:mx-0 md:pl-8 border-t-2 md:border-none border-[#000000]/10">
                    <div className="flex flex-row justify-between items-center mt-3 md:mt-0">
                      <div className="text-base md:text-2xl text-black font-bold font-montserrat ">
                        {ele[1]}
                      </div>
                    </div>
                    <div className="text-sm md:text-base text-[#000000]/80 font-normal mt-2 md:mt-3">
                      {ele[4]}
                    </div>
                    <div className="text-xs md:text-sm text-[#000000]/80 font-normal mt-4">
                      {ele[2]} | {ele[3]}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      ) : (
        <div className="">
          {portfolioData &&
            currentItems?.map((ele, i) => {
              return (
                <a
                  className={
                    i === currentItems.length - 1
                      ? "flex flex-row px-4 md:px-12 py-10 md:items-center  hover:scale-105 hover:bg-white hover:rounded-[12px] mainTransitionCard hover:border-b-0 hover:cursor-pointer"
                      : "flex flex-row px-4 md:px-12 py-10 md:items-center md:border-b-2 border-[#000000]/10 hover:scale-105 hover:bg-white hover:rounded-[12px] mainTransitionCard hover:border-b-0 hover:cursor-pointer"
                  }
                  key={i}
                  href={ele[6]}
                  target="_blank"
                >
                  <a
                    className="w-[20%] md:flex hidden bg-white p-8 rounded-xl h-[180px]"
                    href={ele[6]}
                    target="_blank"
                  >
                    <div className="flex flex-row justify-center items-center">
                      <img
                        src={ele[0]}
                        alt="Card Img"
                        width={200}
                        height={150}
                      />
                    </div>
                  </a>
                  <a
                    className="w-[40%] md:hidden h-[100px] p-8 bg-white rounded-xl flex flex-row justify-center"
                    href={ele[6]}
                    target="_blank"
                  >
                    <div className="flex flex-row justify-center items-center">
                      <img
                        src={ele[0]}
                        alt="Card Img"
                        width={200}
                        height={150}
                      />
                    </div>
                  </a>
                  <div className="w-[60%] md:w-[80%] mx-4 md:mx-0 md:pl-8 border-t-2 md:border-none border-[#000000]/10">
                    <div className="flex flex-row justify-between items-center mt-3 md:mt-0">
                      <div className="text-base md:text-2xl text-black font-bold font-montserrat ">
                        {ele[1]}
                      </div>
                    </div>
                    <div className="text-sm md:text-base text-[#000000]/80 font-normal mt-2 md:mt-3">
                      {ele[4]}
                    </div>
                    <div className="text-xs md:text-sm text-[#000000]/80 font-normal mt-4">
                      {ele[2]} | {ele[3]}
                    </div>
                  </div>
                </a>
              );
            })}
        </div>
      )}

      {portfolioData && portfolioData.length > 4 && (
        <div className="flex   mb-4 lg:mb-0 mt-8  items-center justify-center lg:justify-end px-10 ">
          <div className="flex items-center  space-x-3 md:space-x-6 justify-center lg:justify-end w-full">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className=" group disabled:text-black/30 disabled:cursor-not-allowed  tracking-widest flex items-center justify-center px-2 py-1  text-sm font-medium text-black rounded-sm "
            >
              <FaChevronLeft className="h-4 w-4 text-black group-disabled:text-black/30  mr-2" />
              Prev
            </button>

            <div className="flex  space-x-3 md:space-x-4 items-center justify-center ">
              {displayPageNumbers()}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="group disabled:text-black/30 disabled:cursor-not-allowed  tracking-widest flex items-center justify-center px-2 py-1  text-sm font-medium text-black rounded-sm "
            >
              Next
              <FaChevronRight className="h-4 w-4 text-black group-disabled:text-black/30  ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainPortfolio;
