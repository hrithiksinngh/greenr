import Desc from "../../components/desc/desc";
import Title from "../../components/title/title";
import { useEffect, useState } from "react";
import animation from "../../utils/animation";
import Stats from "../../components/stats/stats";
import { BsGrid1X2Fill, BsGeoAltFill, BsFileEarmarkCheckFill, BsClockFill, BsCashStack, BsCurrencyDollar } from 'react-icons/bs'
import { MdOutlineCurrencyRupee } from "react-icons/md";
import Carousel from "../FoundersCarousel";
import LetsConnectModal from "../LetsConnectModal";
import ProductCard from "../ProductCard/ProductCard";
import StackedImage from "../StackedImageCarousel";
import { useRouter } from 'next/router';
import Link from 'next/link';
import { UseOurPortfolioData, UseFoundersCarouselData } from "../../utils/portfolioCarouselData";
import MarqueeNew from "../marquee/marqueeNew";
import { ThreeDots } from "react-loader-spinner";
import Image from 'next/image';
import ClockDollarIcon from '../../assets/svgs/clock-dollar.svg';

const PortfolioDetail = ({ portfolioName }) => {

  const { isLoading, data: portfolioData } = UseOurPortfolioData();
  // const { isLoading: foundersCarouselLoading, data: foundersCarouselData } = UseFoundersCarouselData();
  const [matchedPortfolio, setMatchedPortfolio] = useState(null);
  const [similarCompanies, setSimilarCompanies] = useState([]);

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false)
  const [keyMileStoneList, setKeyMileStoneList] = useState([])
  const [cards, setCards] = useState([])
  const [infoItems, setInfoItems] = useState([])
  const [ourPartnerImgData, setOurPartnerImgData] = useState([])
  const [foundersCarouselSlides, setFoundersCarouselSlides] = useState([])

  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  // useEffect(() => {
  //   if (foundersCarouselData?.data?.response?.length > 0 && matchedPortfolio) {
  //     // setFoundersCarouselSlides(foundersCarouselData?.data?.response);
  //     const filteredSlides = foundersCarouselData?.data?.response.filter(slide => 
  //       slide.startupTitle === matchedPortfolio?.startupTitle
  //     );
  //     console.log("filteredSlides", filteredSlides)
  //     setFoundersCarouselSlides(filteredSlides);
  //   }
  // }, [foundersCarouselData, matchedPortfolio]);

  useEffect(() => {
    if (!isLoading && portfolioData?.data?.response) {
      const matchingPortfolio = portfolioData.data.response.find(portfolio => {
        const urlFriendlyTitle = portfolio.startupTitle.toLowerCase().replace(/ /g, '-');
        return urlFriendlyTitle === portfolioName;
      });

      if (!matchingPortfolio) {
        router.push('/portfolio');
      }

      setMatchedPortfolio(matchingPortfolio);
      let milestoneList = [];
      
      const milestones = [
        { value: matchingPortfolio?.milestoneOneValue, desc: matchingPortfolio?.milestoneOneDescription },
        { value: matchingPortfolio?.milestoneTwoValue, desc: matchingPortfolio?.milestoneTwoDescription },
        { value: matchingPortfolio?.milestoneThreeValue, desc: matchingPortfolio?.milestoneThreeDescription },
        { value: matchingPortfolio?.milestoneFourValue, desc: matchingPortfolio?.milestoneFourDescription }
      ];

      milestones.forEach(milestone => {
        if (milestone.value) {
          milestoneList.push({
            title: milestone.value,
            desc: milestone.desc,
          });
        }
      });

      setKeyMileStoneList(milestoneList);

      const foundersCarouselData = [
        {
          name: matchingPortfolio?.founderName1,
          description: matchingPortfolio?.founderDescription1,
          image: matchingPortfolio?.founderImage1
        },
        {
          name: matchingPortfolio?.founderName2,
          description: matchingPortfolio?.founderDescription2,
          image: matchingPortfolio?.founderImage2
        },
        {
          name: matchingPortfolio?.founderName3,
          description: matchingPortfolio?.founderDescription3,
          image: matchingPortfolio?.founderImage3
        },
        {
          name: matchingPortfolio?.founderName4,
          description: matchingPortfolio?.founderDescription4,
          image: matchingPortfolio?.founderImage4
        },
        {
          name: matchingPortfolio?.founderName5,
          description: matchingPortfolio?.founderDescription5,
          image: matchingPortfolio?.founderImage5
        }
      ]

      let foundersCarouselSlidesList = [];

      foundersCarouselData.forEach(founder => {
        if (founder.name) {
          foundersCarouselSlidesList.push(founder);
        }
      })

      setFoundersCarouselSlides(foundersCarouselSlidesList);

      let offeringCardsData = [];
      if (matchingPortfolio?.productOfferings) {
        offeringCardsData.push({
          title: "Products Offered",
          items: matchingPortfolio?.productOfferings?.split(',')
        })
      }
      if (matchingPortfolio?.serviceOfferings) {
        offeringCardsData.push({
          title: "Services Offered",
          items: matchingPortfolio?.serviceOfferings?.split(',')
        })
      }
      setCards(offeringCardsData)

      const infoItemsData = [
        { icon: BsGrid1X2Fill, title: "Commercial Capacity of Manufacturing Unit", value: matchingPortfolio?.commercialCapacityOfManufacturingUnit },
        { icon: BsGeoAltFill, title: "Location", value: matchingPortfolio?.location },
        { icon: BsFileEarmarkCheckFill, title: "IP / Certificate", value: matchingPortfolio?.intellectualPropertyOrCertificates },
        { icon: BsClockFill, title: "Average Project Turnaround Time", value: matchingPortfolio?.averageProjectTurnaroundTime },
        { icon: MdOutlineCurrencyRupee, title: "Pricing", value: matchingPortfolio?.productPricing },
        { icon: 'clock-dollar', title: "Credit Period", value: matchingPortfolio?.creditPeriod }
      ]
      setInfoItems(infoItemsData)

      let partnerImgData = matchingPortfolio?.cooperatesWorkedWith?.split(',');
      setOurPartnerImgData(partnerImgData)

      // Get similar companies based on subsectors and sectors
      const similar = getSimilarCompanies(matchingPortfolio, portfolioData.data.response);
      setSimilarCompanies(similar);
    }
  }, [isLoading, portfolioData, portfolioName]);

  const getSimilarCompanies = (matchedPortfolio, allPortfolios) => {
    if (!matchedPortfolio) return [];

    const similarBySubsector = allPortfolios.filter(portfolio =>
      portfolio.startupTitle !== matchedPortfolio.startupTitle &&
      portfolio.subsector === matchedPortfolio.subsector
    );

    if (similarBySubsector.length >= 5) {
      return similarBySubsector.slice(0, 5);
    }

    const similarBySector = allPortfolios.filter(portfolio =>
      portfolio.startupTitle !== matchedPortfolio.startupTitle &&
      portfolio.sector === matchedPortfolio.sector &&
      !similarBySubsector.includes(portfolio)
    );

    const combined = [...similarBySubsector, ...similarBySector];

    if (combined.length >= 5) {
      return combined.slice(0, 5);
    }

    const remaining = allPortfolios.filter(portfolio =>
      portfolio.startupTitle !== matchedPortfolio.startupTitle &&
      !combined.includes(portfolio)
    );

    return [...combined, ...remaining].slice(0, 5);
  };

  const handleViewAll = () => {
    router.push('/portfolio');
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
        <>
          {/* HERO SECTION */}
          <div className="patternBg aboutUsHero">
            <div className="grid-main-container">
              <div className={`grid-container grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10 ${matchedPortfolio?.businessDescription?.length < 300 ? 'lg:-mb-10' : ''}`}>
                <div className={`col-span-1 lg:col-span-3 leftCol pt-8 lg:pt60`}>
                  {/* Breadcrumb */}
                  <div className="flex flex-wrap items-center space-x-2 text-xs lg:text-xs mb-4">
                    <Link href="/" className="text-white hover:text-[#e0e0e0] transition-colors duration-300">Home</Link>
                    <span className="text-white">{'>'}</span>
                    <Link href="/portfolio" className="text-white hover:text-[#e0e0e0] transition-colors duration-300">Portfolios</Link>
                    <span className="text-white">{'>'}</span>
                    <span className="text-[#ffffffb3]">{matchedPortfolio?.startupTitle}</span>
                  </div>
                  <Title
                    externalClass={`text-3xl md:text-4xl lg:f42 text-shadow text-white font-bold f-secondary`}
                    title={matchedPortfolio?.startupTitle}
                  />
                  <Desc
                    externalClass={`pt-4 lg:pt20 text-[#FFFFFFB2] text-sm lg:text-[0.9rem] pb-4 lg:pb20`}
                    desc={matchedPortfolio?.businessDescription}
                  />
                  <Desc
                    externalClass={`text-white pb-8 lg:pb40`}
                    desc={`Location : ${matchedPortfolio?.geographiesServed}`}
                  />
                  <button
                    className={`hidden lg:block bg-[#4d7297] mt-4 lg:mt20 font-semibold rounded text-sm lg:f18 rounded text-white px-6 lg:px-8 py-2 lg:py-3`}
                    onClick={() => setIsOpen(true)}
                  >
                    Let's Connect
                  </button>
                </div>
                <div className={`col-span-1 lg:col-span-2 rightCol pl-2 flex justify-center`}>
                  <div className="lg:m-auto lg:my-24">
                    <StackedImage img={matchedPortfolio?.productImage} />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className={`lg:hidden w-fit bg-[#4d7297] mt-6 font-semibold rounded text-sm rounded text-white px-6 py-2`}
                  onClick={() => setIsOpen(true)}
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>

          {/* Our Key Milestones */}
          {keyMileStoneList?.length > 0 && (
            <div className="grid-main-container pt-12 lg:pt80">
              <div className="grid-container">
                <div className="statsContainer pt-8 lg:pt30 pb-8 lg:pb30 overflow-hidden">
                  <div className={`relative grid p-3 grid-cols-1 lg:grid-cols-${Math.min(keyMileStoneList.length, 4)} gap-6 lg:gap-10`}>
                    {keyMileStoneList.map((statsData, i) => (
                      <Stats
                        key={i}
                        statsTitle={statsData.title}
                        statsDesc={statsData.desc}
                        hiddenAnimation={false}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Our Services */}
          <div className="grid-main-container mt-4">
            <div className="max-w-6xl mx-auto px-4 lg:px-0">
              {cards.length > 0 && <div className={`grid ${cards.length > 1 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-4 md:gap-4`}>
                {cards.map((card, index) => (
                  <div key={index} className="bg-white p-6 lg:p-12 rounded-lg shadow-md">
                    <h2 className="text-xl lg:text-2xl font-bold text-[#6B9080] mb-4">{card.title}</h2>
                    <ul className="space-y-2">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="text-[#6B9080] mr-2 text-lg">•</span>
                          <span className="text-gray-700 text-sm lg:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>}

              <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:mt-20">
                {infoItems.map((item, index) => (
                  <div key={index} className={`flex items-center space-x-4 relative p-4 lg:p-6 pb-3 pl-0 ${index % 2 !== 0 ? 'md:pl-10' : ''}`}>
                    <div className={`bg-[#6B9080] p-2 lg:p-3 rounded-full`}>
                      {item.icon === 'clock-dollar' ? (
                        <Image src={ClockDollarIcon} alt="Clock Dollar Icon" width={24} height={24} className="text-white" />
                      ) : (
                        <item.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                      )}
                    </div>
                    <div className="flex-grow mt-4 lg:mt-4">
                      <p className="text-md lg:text-lg text-[#6B9080]">{item.title}</p>
                      <p className="font-semibold text-gray-800 text-base text-sm md:text-md">{item.value || "N.A."}</p>
                    </div>
                    {/* Right border for left column items (desktop only) */}
                    {index % 2 === 0 && index < 5 && (
                      <div className="hidden lg:block absolute right-[0] top-0 w-px h-full border-r border-dashed border-gray-300" />
                    )}
                    {/* Bottom border for all items except last row */}
                    {index < 4 && (
                      <div className="absolute left-0 bottom-[-0.75rem] w-full h-px border-b border-dashed border-gray-300" />
                    )}
                  </div>
                ))}
              </div>

              <div className="text-center pt-4 mt-10 mb-10">
                <button
                  className="bg-[#4C7297] text-white px-6 lg:px-8 py-2 lg:py-3 rounded-md font-semibold hover:bg-[#5a7d8f] transition duration-300 text-sm lg:text-base"
                  onClick={() => setIsOpen(true)}
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>

          {/* PARTNERS SECTION */}
          {ourPartnerImgData && ourPartnerImgData?.length > 0 && <div className="pb-12 lg:pb60">
            <div className="grid-main-container pt-8 lg:pt60">
              <div className="grid-container">
                <Title
                  title={"Corporate Customers"}
                  externalClass={`text-xl lg:text-2xl pb-6 lg:pb10`}
                />
              </div>
            </div>
            <MarqueeNew imgSrcList={ourPartnerImgData} />
          </div>}

          {foundersCarouselSlides?.length > 0 && <div className="flex items-center justify-center bg-gray-100">
            <Carousel handleConnect={() => setIsOpen(true)} slides={foundersCarouselSlides} />
          </div>}

          <LetsConnectModal isOpen={isOpen} setIsOpen={setIsOpen} />

          {/* Explore Similar Companies */}
          <div className="mx-auto py-8 lg:py-10 mb-8 lg:mb-10">
            <h1 className="text-xl lg:text-2xl font-bold mb-6 lg:mb-8 text-start grid-main-container px-4 lg:px-0">Explore Similar Companies</h1>
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex space-x-4 lg:space-x-6 px-4 lg:pl-6 w-max">
                {similarCompanies?.map((company) => (
                  <div key={company?.startupTitle} className="w-[300px] sm:w-[300px] lg:w-[380px] h-[450px] flex-shrink-0">
                    <ProductCard product={company} view={"grid"} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 text-center px-4 lg:px-0">
              <button
                className="w-full lg:w-auto text-[#4C7297] border border-[#4C7297] px-8 lg:px-16 py-2 rounded hover:bg-[#4C7297] hover:text-white transition-colors duration-300 text-sm lg:text-base"
                onClick={handleViewAll}
              >
                View All
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioDetail;
