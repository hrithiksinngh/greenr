import Stats from "../../components/stats/stats";
import imgContentStyles from "../../components/imgContent/imgContent.module.scss";
import { getImageUrl } from "../../utils/images";
import { useEffect } from "react";
import animation from "../../utils/animation";
import Desc from "../../components/desc/desc";
import Title from "../../components/title/title";

const AboutUs = () => {
  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  let aboutUsHeroSection = {
    title: "The Engine that Fuels Founders",
    desc: `<p className="pb-4 text-slate-50 font-thin">Our initiative, the Greenr Sustainability Accelerator Program by TechnoServe, supported by the IKEA
    Foundation and Visa Foundation aims to scale up exceptional green startups by linking them to
    knowledge, capital and markets.</p>
    <p className="pb-4 text-slate-50 font-thin">TechnoServe is a global leader in micro, small, and growing business acceleration, managing a
    successful portfolio of 47 programs across 30 countries. We work directly with businesses and across
    whole market systems to make them more sustainable — environmentally, socially, and
    commercially.</p>
    <p className="pb-4 text-slate-50 font-thin">The founders in our portfolio initiate chain reactions, leaving a positive economic, environmental,
    and social impact on producers, consumers and the ecosystem at large. Through more than 50+
    years of technical experience and continuous iteration, we transform passion into revenue and
    innovators into CEOs.</p>`,
    imgUrl: getImageUrl({ fileName: "about-hero" }),
  };

  let statsDataList = [
    {
      svgId: "twitter",
      title: "74%",
      desc: "Revenue Growth",
    },
    {
      svgId: "twitter",
      title: "66K+",
      desc: "MSMEs Accelerated",
    },
    {
      svgId: "twitter",
      title: "$137 Mn",
      desc: "Financial Benefits",
    },
    {
      svgId: "twitter",
      title: "68%",
      desc: "Women Beneficiaries",
    },
    {
      svgId: "twitter",
      title: "2000+",
      desc: "Jobs Created",
    },
    {
      svgId: "twitter",
      title: "$7.8 Mn",
      desc: "Financial Mobilized",
    },
  ];

  let aboutDetails = {
    title: "Why Scale Green Startups Now?",
    desc: "The market potential for green, small and growing businesses in India is super exciting - a $3.46 trillion market opportunity (source: ANDE, Aspen Network for Development Entrepreneurs)!",
    desc1:
      "We believe that the innate sense of innovation, agility, and passion that startup founders bring to the environment action mission can have a compounding effect. However, scaling up comes with a unique set of challenges, unlike &#39;conventional&#39; startups, that the Greenr program will address. Creating a Green Revolution with you is the key to solving these challenges that need urgent disruption and intervention.",
  };

  let scaleDataList = [
    {
      title: "code red",
      desc: `<p className="pb20">The earth is hotter by 1°C from pre-industrial levels, and its repercussions are dire. Heat waves have
already impacted the livelihoods and well-being of 123 million people worldwide. Forest wildfires
start more quickly and spread more rapidly, depleting our sources of oxygen. Microplastic pollution
has migrated up the food chain, becoming a part of our food — you get the drift. Human life hangs
in the balance.</p><p className="pb20">As the world slowly but surely moves towards achieving the 2050 Net Zero target, there is a gap of
nearly 35 GtCO2 emissions per year. Only 25-30% of this gap can be addressed by existing solutions.
We need to innovate rapidly across spheres to manage the remaining 70-75% gap.</p>`,
      imgUrl: getImageUrl({ fileName: "codeRed" }),
    },
    {
      title: "Good COP, Bad COP",
      desc: `<p className="pb20">Since 1995, governments have met year after year to find solutions to Climate Change and
Environmental Degradation. Even so, building consensus between countries has been a herculean
task. In 2009, at COP-15 in Copenhagen, wealthy countries promised to mobilize $100 Bn by 2020 to
support Climate Action in developing countries. It’s taken over a decade for the countries to create a
Loss &amp; Damage Fund at COP-27, and it could take even longer to operationalize it effectively.</p><p className="pb20">One would posit that corporations could be more efficient in getting the job done by adopting
Carbon Neutrality as a KPI. Yet, only a handful are rethinking their business models from a Climate
Action lens. And the critical question still remains unanswered: Can legacy players (read: polluters)
change themselves and participate in saving the world?</p>`,
      imgUrl: getImageUrl({ fileName: "goodCop" }),
    },
    {
      title: "The Power is Ours",
      desc: `<p className="pb20">But this isn’t a doomsday prophecy. This is a clarion call to join forces, to create exponential impact
and accelerate it. The mantle now falls on us. The world urgently needs green products and services,
and you are providing them. With our support, the scale you achieve can speed up environmental
restoration and mitigate climate change. While MNCs and governments make elephantine progress,
startups committed to environmental action are quickly gaining a share in the market. Venture
capitalists across the globe have invested nearly $296 Bn in the sector.</p><p className="pb20">The world needs you - Environment Action Entrepreneurs, now more than ever!</p>`,
      imgUrl: getImageUrl({ fileName: "powerIsOurs" }),
    },
  ];

  return (
    <div className="bg-p-400">
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
                externalClass={`pt20 text-slate-50 hiddenAnimation`}
                desc={aboutUsHeroSection.desc}
              />
            </div>
            <div
              className={`col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-2 rightCol pl-2 flex justify-center`}
            >
              <div className="my-auto abtHeight">
                <img
                  className={`wrap-img aboutHeroWrap hiddenAnimation`}
                  alt="cardImg"
                  src={aboutUsHeroSection.imgUrl}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="grid-main-container  pt60">
        <div className="grid-container">
          <div className="statsContainer pt30 overflow-hidden">
            <Title
              title={"The TechnoServe Impact"}
              externalClass={`pb10 hiddenAnimation ml-12 mb-4`}
            />

            <div className="relative grid p-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
              {statsDataList.map((statsData, i) => (
                <Stats
                  key={i}
                  statsSvgId={statsData.svgId}
                  statsTitle={statsData.title}
                  statsDesc={statsData.desc}
                />
              ))}
              <Stats />
              <div className="flex yearTag justify-end text-slate-500 items-end italic font-normal px-4 f14 py-2.5">
                CY 2021 - 22
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCALE GREEN SECTION */}
      <div className="grid-main-container pt60 mb60" id="whyScale">
        <div className="grid-container">
          <Title
            title={aboutDetails.title}
            externalClass={`pb10 hiddenAnimation`}
          />
          <Desc externalClass="hiddenAnimation" desc={aboutDetails.desc} />
          <div className="mt-3"></div>
          <Desc externalClass="hiddenAnimation" desc={aboutDetails.desc1} />
        </div>
      </div>

      {/* CODE RED SECTION */}
      {scaleDataList.map((scaleData, i) => (
        <div key={i} className="relative pb60 mb60">
          <div className={`${i % 2 === 0 ? "" : "imgBox-left"} imgbgBox`}></div>
          <div className=" grid-main-container pt60 ">
            <div className="grid-container">
              <div className="grid grid-cols-5 gap-0 pb-5 sm:pb-0 sm:gap-10">
                <div
                  className={`${
                    i % 2 === 0 ? "" : "md:order-2"
                  } col-span-5 sm:col-span-5 md:col-span-3`}
                >
                  <Title
                    title={scaleData.title}
                    externalClass={`f32 capitalize pb10 hiddenAnimation`}
                  />
                  <Desc
                    externalClass={`pb40 text-slate-600 hiddenAnimation`}
                    desc={scaleData.desc}
                  />
                </div>

                <div
                  className={`col-span-5 sm:col-span-5 md:col-span-2 img-wrap-main z-20 ${imgContentStyles.imgCol} `}
                >
                  <img
                    className={`wrap-img hiddenAnimation`}
                    alt="cardImg"
                    src={scaleData.imgUrl}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="grid-container flex justify-end items-end  font-normal pr-6 pb40 f14 pt20">
        *According to a BCG Report, April 2022
      </div>
    </div>
  );
};

export default AboutUs;
