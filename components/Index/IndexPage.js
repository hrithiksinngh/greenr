import Desc from "../../components/desc/desc";
import Icon from "../../components/icon/icon";
import Title from "../../components/title/title";
import Marquee from "../../components/marquee/marquee";
import Button from "../../components/button/button";
import headerStyle from "../../components/header/header.module.scss";
import ImgOverlay from "../../components/imgOverlay/imgOverlay";
import TransitionCard from "../../components/transitionCard/transitionCard";
import DisclosureX from "../../components/customDisc/customDisc";
import { getImageUrl } from "../../utils/images";
import { useEffect, useState } from "react";
import animation from "../../utils/animation";
import { UseCohortMilestoneData, UseOurPartnerData } from "../../utils/teamsData";
import {
  UseOurWinsData,
  UseSectorImageData,
  UseGoogleFormLinkData,
} from "../../utils/data";
import PopUpCardOne from "../popUpCard/PopUpCardOne";

import { Carousel } from "flowbite-react";
import { AiOutlineRightCircle, AiOutlineLeftCircle } from "react-icons/ai";
import Stats from "../../components/stats/stats";
import TestimonialCarousel from "../TestimonialCarousel";
import { UseEntrepreneurWinsTestimonials, UseSectorsIncludedData } from "../../utils/portfolioCarouselData";
import DisclosureSectorsInclude from "../customDisc/sectorsInclude";

const IndexPage = () => {

  const { isLoading: cohortMilestoneLoading, data: cohortMilestoneData } = UseCohortMilestoneData();

  let { data: ourPartner } = UseOurPartnerData();
  const ourPartnerImgData = ourPartner && ourPartner.data.response;

  let { data: ourWins } = UseOurWinsData();
  const ourWinsData = ourWins && ourWins ? ourWins.data.data : [];

  let { data: sectorImage } = UseSectorImageData();
  const sectorImageData = sectorImage && sectorImage.data.data;

  let { data: googleFormLink } = UseGoogleFormLinkData();
  const googleForm = googleFormLink && googleFormLink.data.data;
  const buttonHrefLink = googleForm && googleForm[0][0];

  let { data: sectorsIncluded } = UseSectorsIncludedData();
  const sectorsIncludedData = sectorsIncluded && sectorsIncluded.data.response;
  console.log("Sectors Included Data:", sectorsIncludedData);

  let { data: entrepreneurWinsTestimonials } = UseEntrepreneurWinsTestimonials();
  const entrepreneurWinsTestimonialsData = entrepreneurWinsTestimonials && entrepreneurWinsTestimonials.data.response;
  console.log("Entrepreneur Wins Testimonials Data:", entrepreneurWinsTestimonialsData);

  const [openSector, setOpenSector] = useState(null);
  const [keyMileStoneList, setKeyMileStoneList] = useState([]);

  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  useEffect(() => {
    if (cohortMilestoneData?.data?.response?.[0]) {
      const response = cohortMilestoneData.data.response[0];
      const milestones = [
        { value: response.milestoneOneValue, desc: response.milestoneOneDescription },
        { value: response.milestoneTwoValue, desc: response.milestoneTwoDescription },
        { value: response.milestoneThreeValue, desc: response.milestoneThreeDescription },
        { value: response.milestoneFourValue, desc: response.milestoneFourDescription }
      ];

      const formattedMilestones = milestones
        .filter(milestone => milestone.value)
        .map(milestone => ({
          title: milestone.value,
          desc: milestone.desc,
        }));

      setKeyMileStoneList(formattedMilestones);
    }
  }, [cohortMilestoneData]);

  let aboutUsHeroSection = {
    title: "Empowering Founders on a Mission",
    desc: `<p className="pb-4 text-slate-50 font-thin">Greenr Sustainability Accelerator, a TechnoServe initiative, is one of the largest sustainability
    accelerators, nurturing high-growth businesses disrupting the Environment Action space.</p> 
    \n<p className="pb-4 text-slate-50 font-thin">We help identify and execute strategies to build resilient revenue models and world-class
    enterprises alongside the most promising Environment Action Entrepreneurs. Our aim is to restore
    the environment and uplift communities around the world through your scale-bound startups.</p>
    \n <p className="pb-4 text-slate-50 font-thin"><strong className="text-white font-bold">Our year-long program ensures tailored growth advice for an exponential increase in green
consumption.</strong></p>`,
    imgUrl: getImageUrl({ fileName: "homeBg", folderName: "home" }),
  };

  let supportedByDataList = [
    {
      title: "Good COP, Bad COP",
      desc: "The IKEA Foundation is a strategic philanthropy that focuses its grant making efforts on tackling the two biggest threats to children’s futures: poverty and climate change. It currently grants more than €200 million per year to help improve family incomes and quality of life while protecting the planet from climate change. Since 2009, the IKEA Foundation has granted more than €1.5 billion to create a better future for children and their families. In 2021 the Board of the IKEA Foundation decided to make an additional €1 billion available over the next five years to accelerate the reduction of Greenhouse Gas emissions.",
      imgUrl: getImageUrl({ fileName: "ikea", folderName: "home" }),
    },
    {
      title: "The Power is Ours",
      desc: "Visa Foundation seeks to support inclusive economies where individuals, businesses, and communities can thrive. Through grantmaking and investing, Visa Foundation prioritizes the growth of gender diverse and inclusive small and micro businesses. Visa Foundation’s commitment to investing $140 million into intermediaries and funds globally is primarily focused on emerging markets, with a gender lens across the entire portfolio from SMB borrowers up to venture capital partners. The goal is to increase the number of women who control capital, and the number of women entrepreneurs who can access that capital.",
      imgUrl: getImageUrl({ fileName: "visa", folderName: "home" }),
    },
  ];

  let buisnessDataList = [
    {
      desc: "Is revenue-generating",
      svgId: "revenueGenerating",
    },
    {
      desc: "Is structured as a Private Limited, LLP, Partnership, Sole Proprietorship",
      svgId: "llp",
    },
    {
      desc: "Has been operational for a minimum of 3 years, showcasing resilience and scalability",
      svgId: "operationalThreeYears",
    },
    {
      desc: "Holds opportunity for outsized environment impact",
      svgId: "holdOpportunity",
    },
  ];

  let setApartDataList = [
    {
      title: "Strategic Advisors",
      desc: "Our team of highly experienced strategic advisors work with you full time, like an extended cofounding team, to execute key needle movers that accelerate your business growth.",
      svgId: "handLine",
    },
    {
      title: "0% Equity Dilution",
      desc: "We don’t take an equity position in your startup as we are a not for profit economic development organization.",
      svgId: "clock",
    },
    {
      title: "No Fee",
      desc: "We do not charge hefty fees for program participation. If you make it through our rigorous selection process, you are onboard gratis.     ",
      svgId: "dollar",
    },
  ];

  let helpDataList1 = [
    {
      title: "Build Strategic Insights",
      desc: "There’s more to venture than capital. Greenr Business Advisors work with you full-time to create a robust business plan that identifies short-term and medium-term growth priorities and execute them together.",
      svgId: "buildStrategy",
    },
    {
      title: "Secure Fundraising & Financing",
      desc: "Sometimes, the only thing hindering scale is access to finances. On Demo Day, you get to pitch to our ecosystem partners, such as impact funds like Peak Ventures, Green Artha, India Angel Network, Chennai Angels, 3i Partners, Acumen, Climake, Rainmatter, Caspian Debt and others to get to that next step. We aim to unlock avenues to small business financing (debt &amp; equity) and grants.",
      svgId: "fund",
    },
    {
      title: "Access Market Linkages",
      desc: "Access new customer segments and markets, both domestic and international. Network within and outside of the program for value-building and revenue-driving conversations.",
      svgId: "market",
    },
  ];
  let helpDataList2 = [
    {
      title: "Identify and implement business acceleration levers",
      desc: "We help you grow your business and improve efficiency by optimizing marketing strategies, streamlining processes, and fostering innovation through new technologies and partnerships.",
      svgId: "businessAcceleration",
    },
    {
      title: "Community of Peers",
      desc: "In a world obsessed with valuations, we care about value. Network with like-minded entrepreneurs building a brand of conscious capitalism just like you!",
      svgId: "communityPeers",
    },
    {
      title: "Continuous Upskilling",
      desc: "We provide a refresher course with a top-tier B-School and offer continuous interventions related to your business. This empowers individuals and organizations to adapt, innovate, and thrive in an ever-evolving marketplace. Our interventions cover strategic planning, financial management, and leadership expertise, which enable professionals to navigate challenges and capitalize on opportunities.",
      svgId: "continousUpSkilling",
    },
  ];

  let result = [];

  for (let i = 0; i < ourWinsData.length; i += 2) {
    // Check if there is another item after the current one
    if (i + 1 < ourWinsData.length) {
      // Create a div element and concatenate the titles of the first two objects
      result.push(
        <div className="flex p-1 space-x-6 justify-center ">
          <PopUpCardOne
            index={i}
            popUpCardTitle={ourWinsData[i][0]}
            popUpCardDesc={ourWinsData[i][1]}
            popUpCardImg={ourWinsData[i][2]}
            isPopUp={false}
            isBio={false}
          />
          <PopUpCardOne
            index={i + 1}
            popUpCardTitle={ourWinsData[i + 1][0]}
            popUpCardDesc={ourWinsData[i + 1][1]}
            popUpCardImg={ourWinsData[i + 1][2]}
            isPopUp={false}
            isBio={false}
          />
        </div>
      );
    } else {
      // Handle the case where there is no next item (last item in the array)
      result.push(
        <div key={i}>
          <div className="flex p-1 space-x-6 justify-center ">
            <PopUpCardOne
              index={i}
              popUpCardTitle={ourWinsData[i][0]}
              popUpCardDesc={ourWinsData[i][1]}
              popUpCardImg={ourWinsData[i][2]}
              isPopUp={false}
              isBio={false}
            />
          </div>
        </div>
      );
    }
  }

  return (
    <>
      {/* HERO SECTION */}
      <div className="patternBg aboutUsHero">
        <div className="grid-main-container">
          <div className="grid-container grid grid-cols-5 gap-10">
            <div
              className={`col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-3 leftCol pt60`}
            >
              <Title
                externalClass={`f42 text-shadow text-white font-bold f-secondary hiddenAnimation`}
                title={aboutUsHeroSection.title}
              />
              <Desc
                externalClass={`pt20 text-white pb40 hiddenAnimation`}
                desc={aboutUsHeroSection.desc}
              />
              <Button
                externalClass={`bg-white mt60 font-semibold rounded hover:scale-105 f18 rounded ${headerStyle.patternPrimaryBtn} ${headerStyle.large}`}
                buttonText={`Join Waitlist`}
                buttonHrefLink={buttonHrefLink ? buttonHrefLink : ""}
              />
            </div>
            <div
              className={`col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-2 rightCol pl-2 flex justify-center`}
            >
              <div className="m-auto my-12">
                <img
                  className={`wrap-img heroWrap hiddenAnimation`}
                  alt="cardImg"
                  src={aboutUsHeroSection.imgUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Key Milestones*/}
      {keyMileStoneList?.length > 0 && <div className="grid-main-container pt80">
        <div className="grid-container">
          <div className="statsContainer pt30 overflow-hidden">
            <Title
              title={"Cohort 1 Key Milestones"}
              externalClass={`pt-4 pb10 ml-12 mb-4`}
            />

            <div className="relative grid p-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-10">
              {keyMileStoneList.map((statsData, i) => (
                <Stats
                  key={i}
                  statsTitle={statsData.title}
                  statsDesc={statsData.desc}
                />
              ))}
              <Stats />
            </div>
          </div>
        </div>
      </div>}
      {/* HOW WE HELP SECTION */}
      <div className="bg-p-400 pb60">
        <div className="grid-main-container pt80 ">
          <div className="grid-container pb40">
            <Title
              title={"How we help"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
          <div className="grid-container block md:flex">
            <div className=" w-[100%] md:w-[50%] md:mr-4 hiddenAnimation">
              {helpDataList1.map((helpData, i) => (
                <DisclosureX
                  key={`DX-how-we-help-${i}`}
                  disSvg={helpData.svgId}
                  disTitle={helpData.title}
                  disDesc={helpData.desc}
                  isIcon={true}
                />
              ))}
            </div>
            <div className=" w-[100%] md:w-[50%] hiddenAnimation">
              {helpDataList2.map((helpData, i) => (
                <DisclosureX
                  key={`DX-how-we-help-${i}`}
                  disSvg={helpData.svgId}
                  disTitle={helpData.title}
                  disDesc={helpData.desc}
                  isIcon={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* SECTORS INCLUDE SECTION */}
      <div className="bg-p-400">
        <div className="grid-main-container">
          <div className="grid-container">
            <Title
              title={"Sectors include"}
              externalClass={`hiddenAnimation`}
            />
          </div>
        </div>
        <div className="grid-main-container pt60 pb60">
          <div className="grid-container">
            {sectorsIncludedData && sectorsIncludedData.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {sectorsIncludedData.map((data, i) => (
                  <div key={`DX-sectors-include-${i}`}>
                    <DisclosureSectorsInclude
                      iconUrl={data.icon}
                      disTitle={data.title}
                      disDesc={data.description}
                      isIcon={true}
                      isOpen={openSector === i}
                      onClick={() => setOpenSector(openSector === i ? null : i)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>No sectors data available</p>
            )}
            <div className="flex justify-end items-end text-info font-normal pr-6 f22 pt20">
              …and many more new frontiers.
            </div>
            <div className="flex justify-center pt30">
              <Button
                externalClass={`infoBtn mt30 text-white font-semibold py-2 px-4 rounded hover:scale-105 rounded large`}
                buttonText={`OMG! It's me`}
                buttonHrefLink={buttonHrefLink ? buttonHrefLink : ""}
              />
            </div>
          </div>
        </div>
      </div>

      {/* TIMER SECTION 
      <div className="grid-main-container pb60">
        <Timer />
      </div>
*/}
      {/* SUPPORTED BY SECTION */}
      <div className="bg-white">
        <div className="grid-main-container pt60">
          <div className="grid-container">
            <Title
              title={"We’re supported by"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
          <div className="grid-container">
            <div className="grid pt40 xs:grid-cols-1 divide-y-2  lg:divide-y-0 divide-x-0 lg:divide-x divide-dashed divide-[#a4c3b2] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
              {supportedByDataList.map((supportData, i) => (
                <div className="px-8 py-8 lg:py-0" key={`D-supported-by-${i}`}>
                  <div className={`img-wrap-main supportLogo m-auto`}>
                    <img
                      className={`hiddenAnimation`}
                      alt="cardImg"
                      src={supportData.imgUrl}
                    />
                  </div>
                  <Desc
                    externalClass={`pb40 text-slate-600 text-center pt60 hiddenAnimation`}
                    desc={supportData.desc}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="bg-white pb60">
        <div className="grid-main-container pt60">
          <div className="grid-container">
            <Title
              title={"Our Partners"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
        </div>
        <Marquee imgSrcList={ourPartnerImgData && ourPartnerImgData} />
      </div>

      {/* BUISNESS SECTION */}
      <div className="bg-p-400">
        <div className="grid-main-container pt60">
          <div className="grid-container">
            <Title
              title={"We want you, if your business"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
          <div className="grid-container">
            <div className="grid pt40 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {buisnessDataList.map((buisnessData, i) => (
                <div key={`D-business-${i}`} className={` pb30 mpt0`}>
                  <div className={` flex `}>
                    <span className={`flex items-baseline pr-4 f22 `}>
                      <Icon
                        externalDivClass="hiddenAnimation"
                        svgStyleClass={`w-1/5 w-14 h-14 mr-4`}
                        name={buisnessData.svgId}
                      />{" "}
                      <Desc
                        externalClass={` w-10/12 my-auto hiddenAnimation`}
                        desc={buisnessData.desc}
                      />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {entrepreneurWinsTestimonialsData && entrepreneurWinsTestimonialsData.length > 0 && <div className="w-full py-10 mb-10 mt-16">
        <h1 className="grid-main-container text-3xl font-bold mb-10 px-4">{entrepreneurWinsTestimonialsData[0].testimonialsHeading || 'Entrepreneur Wins Testimonials'}</h1>
        <TestimonialCarousel testimonials={entrepreneurWinsTestimonialsData} />
      </div>}
    </>
  );
};

export default IndexPage;
