import { useEffect, useState } from "react";
import BannerImg from "../../components/bannerImg/bannerImg";
import Button from "../../components/button/button";
import DisclosureX from "../../components/customDisc/customDisc";
import Desc from "../../components/desc/desc";
import Timeline from "../../components/timeline/timeline";
import Title from "../../components/title/title";
import VerticleTabset from "../../components/verticleTabset/verticleTabset.js/verticleTabset";
import { getImageUrl } from "../../utils/images";
import animation from "../../utils/animation";
import TransitionCard from "../../components/transitionCard/transitionCard";

import {
  UseGoogleFormLinkData,
  UseInsideGreenrTimeLineData,
} from "../../utils/data";

const InsideGreenrPage = () => {
  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  let { data: googleFormLink } = UseGoogleFormLinkData();
  const googleForm = googleFormLink && googleFormLink.data.data;
  const buttonHrefLink = googleForm && googleForm[0][0];

  let { data: insideGreenrTimeLine } = UseInsideGreenrTimeLineData();
  const timelineDataList =
    insideGreenrTimeLine && insideGreenrTimeLine
      ? insideGreenrTimeLine.data.data
      : [];
  let insideGreenr = {
    title: "Business Solutions to Sustainability",
    desc: '<p className="pb-4">In India, TechnoServe has led transformational change for entrepreneurs via various accelerator programs, supported by Intuit, Moody’s Corporation, Goldman Sachs, the Blackstone Foundation and others. The programs were executed through a combination of hands-on business advisory support and access to capital as well as markets. The businesses grew by 64% and over 50% of program participants received financial linkages.</p><p className="pb-4"> Owing to the looming risk of Environment Degradation on Poverty and Food Security, we’re extending our expertise in scaling impact enterprises to mitigate it with the Greenr Sustainability Accelerator. Our portfolio composes of businesses aligned with 7+ Sustainable Development Goals: we club them under "Environment Action" Goals.</p>',
  };

  let scaleUpSec = {
    title: "Scale up with Advisors",
    desc: '<p className="pb20"> Build your current sales pipeline or set up a new revenue source? Pivot or launch in a new geography?</p> <p> Our advisors will work alongside you to zero in on key strategic recommendations and bring growth solutions to life. We’ll meet at least <strong className="font-bold">once a week</strong> to discuss your progress and overcome the hurdles in taking your business to its peak.</p>',
    imgUrl: getImageUrl({ fileName: "scale" }),
  };

  let teamsSection = {
    title: "Will my startup get funding?",
    desc: "Every month, gain hacks and the competitive advantages from the best minds the sector has to offer.",
  };

  let setApartDataList = [
    {
      title: "Strategic Advisors",
      desc: "Our highly experienced strategic advisors work with you like an extended co-founding team to execute needle movers to help you at every step.",
      svgId: "handLine",
    },
    {
      title: "0% Equity Dilution",
      desc: "You do not need to part with any equity to be a part of the program. Being a not-for-profit economic development organization, while we are unable to take an equity position in your startup, we are mandated to strive towards getting you access to finance &amp; fundraising opportunities in the form of grants, debt and equity.",
      svgId: "clock",
    },
    {
      title: "No Fee",
      desc: "We do not charge any fees for program participation. You are onboard gratis if you make it through our rigorous selection process.",
      svgId: "dollar",
    },
  ];
  let valuesDataList = [
    {
      title: "ideate",
      desc: "<strong>Brainstorm with our advisors</strong> and generate ideas to overcome the hurdles to growth.",
      svgId: "brain",
    },
    {
      title: "DEFINE",
      desc: "Work alongside <strong>our advisors to zero in on a business plan constituting 3 key priorities</strong> with potential for highest impact both on your business as well as the environment.",
      svgId: "compas",
    },
    {
      title: "IMPLEMENT",
      desc: "We don’t just talk, we do.<strong>Greenr Business Advisory involves strategy as well as a deep bias for action.</strong> Once the business plan has been created, our advisors will support you in executing it as well.",
      svgId: "implement",
    },
    {
      title: "ANALYSE",
      desc: "Effectiveness is critical to our method.<strong> Rooted deeply in data, you and your advisor will scout for signals to evaluate the success</strong> of the business plan.",
      svgId: "analyse",
    },
  ];

  let modalCardDataList = [
    {
      cardtitle: "Nikita Pawar",
      cardDesc: "General Partner,CEO",
      cardImg: "dummy",
      modalTitle: "Nikita Pawar",
      modalSubtitle: "General Partner,CEO",
      modalDesc:
        "Lorem ipsum dolor sit amet consectetur. Ante viverra est sit ut egestas vel enim. At sit diam dolor massa et egestas volutpat sollicitudin nunc. Nunc laoreet pharetra facilisi fringilla malesuada faucibus. Quam purus aliquet venenatis id lacus feugiat cras. Vitae amet odio sit facilisis. Viverra lectus nisl in accumsan. Id mus vulputate egestas sodales vitae et ultricies. Duis risus proin mi orci. Pulvinar viverra eget nibh nullam elementum porta. Suspendisse feugiat tortor volutpat",
      modalImg: "dummy",
      modalImg: "modal",
      modalInstagramLink: "abc",
      modalLinkdnLink: "abc",
      modalTwitterLink: "abc",
    },
    {
      cardtitle: "Nikita Pawar1",
      cardDesc: "General Partner,CEO1m",
      cardImg: "dummy",
      modalTitle: "Nikita Pawar1m",
      modalSubtitle: "General Partner,CEO1",
      modalDesc:
        "Lorem ipsum dolor sit amet consectetur. Ante viverra est sit ut egestas vel enim. At sit diam dolor massa et egestas volutpat sollicitudin nunc. Nunc laoreet pharetra facilisi fringilla malesuada faucibus. Quam purus aliquet venenatis id lacus feugiat cras. Vitae amet odio sit facilisis. Viverra lectus nisl in accumsan. Id mus vulputate egestas sodales vitae et ultricies. Duis risus proin mi orci. Pulvinar viverra eget nibh nullam elementum porta. Suspendisse feugiat tortor volutpat",
      modalImg: "dummy",
      modalInstagramLink: "abc",
      modalLinkdnLink: "abc",
      modalTwitterLink: "abc",
    },
    {
      cardtitle: "Nikita Pawar2",
      cardDesc: "General Partner,CEO",
      cardImg: "dummy",
      modalTitle: "Nikita Pawar2",
      modalSubtitle: "General Partner,CEO",
      modalDesc:
        "Lorem ipsum dolor sit amet consectetur. Ante viverra est sit ut egestas vel enim. At sit diam dolor massa et egestas volutpat sollicitudin nunc. Nunc laoreet pharetra facilisi fringilla malesuada faucibus. Quam purus aliquet venenatis id lacus feugiat cras. Vitae amet odio sit facilisis. Viverra lectus nisl in accumsan. Id mus vulputate egestas sodales vitae et ultricies. Duis risus proin mi orci. Pulvinar viverra eget nibh nullam elementum porta. Suspendisse feugiat tortor volutpat",
      modalImg: "dummy",
      modalImg: "modal",
      modalInstagramLink: "abc",
      modalLinkdnLink: "abc",
      modalTwitterLink: "abc",
    },
    {
      cardtitle: "Nikita Pawar3",
      cardDesc: "General Partner,CEO1m",
      cardImg: "dummy",
      modalTitle: "Nikita Pawar1m3",
      modalSubtitle: "General Partner,CEO1",
      modalDesc:
        "Lorem ipsum dolor sit amet consectetur. Ante viverra est sit ut egestas vel enim. At sit diam dolor massa et egestas volutpat sollicitudin nunc. Nunc laoreet pharetra facilisi fringilla malesuada faucibus. Quam purus aliquet venenatis id lacus feugiat cras. Vitae amet odio sit facilisis. Viverra lectus nisl in accumsan. Id mus vulputate egestas sodales vitae et ultricies. Duis risus proin mi orci. Pulvinar viverra eget nibh nullam elementum porta. Suspendisse feugiat tortor volutpat et at neque. Urna quam at elementum ullamcorper. Commodo ultricies quisque in feugiat penatibus consectetur etiam facilisis mauris. Pulvinar lacus sit in integer.",
      modalImg: "modal",
      modalInstagramLink: "abc",
      modalLinkdnLink: "abc",
      modalTwitterLink: "abc",
    },
  ];
  let faqList = [
    // {
    //   title: "What is the application process?",
    //   desc: `Start by clicking on the ‘Apply’ button, which will take you to an online application form. We ask you to record some numbers about your startup’s performance as well as your journey. Shortlisted applicants will be interviewed to evaluate your motivation and commitment to growth. The last step is carrying out due diligence before rolling out an invitation to participate in Greenr.`,
    // },
    {
      title:
        "The application deadline has passed. Will you still accept my application?",
      desc: `We are unable to accept applications after our deadline owing to capacity constraints. But don't worry. We're committed to working with 350+ businesses in 3 cohorts over the next 2 years. So, if you've missed the application deadline, please join the waitlist, and we'll reach out to you once we start accepting applications for our next cohort.`,
    },
    {
      title: "What’s the eligibility criteria for the program?",
      desc: `Your startup needs to be a high-growth business fulfilling the following criteria:
      <ul><li>Creating and selling “green” products or services that mitigate climate change and environment degradation. You’re solving problems such as (but not restricted to) solid waste management, e-waste management, biodegradable/sustainable clothing and consumer goods, deforestation, recycling, and many others
      </li><li>Achieved product-market fit or gained traction on a deep-tech product 
      </li><li>Employing at least 3 people, excluding yourself and other co-founders, if any
      </li><li>Operational for a minimum of 3 years, showcasing resilience and scalability
      </li><li>Generating revenue 
      </li><li>Solutions that leave an outsized impact.
      </li><li>Structured as a Private Limited, LLP, Partnership, or Sole Proprietorship</li>
      <ul>
      `,
    },
    {
      title: "Does my company need to be registered in India?",
      desc: `Greenr is investing efforts to grow the environment entrepreneurship ecosystem in India. Hence, we’re only accepting companies registered and operating in the country.`,
    },

    {
      title: "What is the Greenr program duration?",
      desc: `Depending on which track within a cohort you’re chosen for, the duration will be either 12 or 21 months long. 
      `,
    },
    {
      title: "How much time will I need to dedicate?",
      desc: `You’ll need to put in up to 8 hours a week on an average. The engagement is designed to ensure most of this time is spent strategizing your business’s growth and executing it. 
      `,
    },
    {
      title: "How do I become a partner?",
      desc: `If you’re interested in using a green product, investing in one or growing the ecosystem at large, you can write to us at partners@getgreenr.org
      `,
    },
    {
      title: "What is the process of assigning a Business Advisor?",
      desc: `Business Advisors will be paired with businesses based on the type of the product/service and the nature of work that needs to be accomplished during the tenure of the program. If you’re concerned about your advisors, you can write to the admin team at hello@getgreenr.org, and we’ll be happy to help. `,
    },
    {
      title: "How will my information/company data be utilized?",
      desc: `As a participant, we may share your name, your business’s name, and other non-sensitive information on our website, social media, conferences, whitepapers, and other such marketing collateral. Revenue, team, and other such sensitive data will be used for internal purposes to monitor and assess your business’s growth and the impact of the accelerator. Please reach out to us at hello@getgreenr.org with concerns on our data policy and we’ll look to address them promptly. 

      `,
    },
    {
      title: "What does  TechnoServe India expect from the Founders?",
      desc: `Our only ask from the entrepreneurs is to be more — ambitious about scaling your businesses; biased to action and respectful to the Greenr Team and Community. 
      `,
    },
    {
      title: "Where will the program take place?",
      desc: `The Advisor mapped to you will meet you in person as needed. Other program features will be a mix of online and in person. 
      `,
    },
    {
      title: "Will my startup get funding?",
      desc: `The primary focus of Greenr is ensuring your business is impactful in caring for the environment and resilient, i.e., profitable and growing in revenue, long after you graduate from the accelerator program. One part of this growth journey is easier access to finance. During the second stage of Greenr, you will prep to pitch to our ecosystem partners on Demo Day. Our partners include venture capital funds such as Omnivore, 3i Partners, Green Artha and many others. `,
    },
  ];
  let bannerDataList = [
    {
      imgUrl: getImageUrl({ fileName: "pp1" }),
      text: "Find soundboards ",
      text2: "to test your ideas",
    },
    {
      imgUrl: getImageUrl({ fileName: "pp2" }),
      text: "Come home ",
      text2: "to a community",
    },
    {
      imgUrl: getImageUrl({ fileName: "pp3" }),
      text: "rooting for your wins",
      text2: "",
    },
  ];
  return (
    <>
      {/* HERO SECTION */}
      <div className="patternBg pt60 pb60">
        <div className="grid-main-container">
          <div className="grid-container gap-10">
            <Title
              externalClass={`text-shadow text-white font-bold f-secondary hiddenAnimation`}
              title={insideGreenr.title}
            />
            <Desc
              externalClass={`pt20 text-white pb40 hiddenAnimation`}
              desc={insideGreenr.desc}
            />
          </div>

          {/* TIMELINE SECTION */}
          <div className="grid-container gap-10 ">
            <Title
              externalClass={`text-shadow text-white font-bold f-secondary hiddenAnimation`}
              title={"Timeline"}
            />
            <Timeline timelineDataList={timelineDataList && timelineDataList} />
          </div>
        </div>
      </div>

      {/* WHAT SETS US APART SECTION */}
      <div className="bg-p-400 overflow-hidden">
        <div className="grid-main-container pt80 ">
          <div className="grid-container">
            <Title
              title={"Why Greenr?"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
          <div className="grid-container">
            <div className="hiddenAnimation grid pt40 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 displayMobFlex ">
              {setApartDataList.map((setApartData, i) => (
                <TransitionCard
                  externalClass="hiddenAnimation"
                  key={`TC-set-us-apart-${i}`}
                  cardSvg={setApartData.svgId}
                  cardTitle={setApartData.title}
                  cardDesc={setApartData.desc}
                />
              ))}
            </div>
            <div className="grid-container grid-container flex justify-center pt60 ">
              <Button
                externalClass={`infoBtn mt30 text-white font-semibold py-2 px-4 rounded hover:scale-105 rounded  large`}
                buttonText={`WOW! Pick me`}
                buttonHrefLink={buttonHrefLink ? buttonHrefLink : ""}
              />
            </div>
          </div>
        </div>
      </div>
      {/* NEW SECTION*/}
      <div className="bg-p-400 pb60">
        <div className="grid-main-container pt60">
          <div className="grid-container grid grid-cols-5 gap-10">
            <div
              className={`col-span-5 sm:col-span-5 md:col-span-5 lg:col-span-3 leftCol pt60`}
            >
              <Title
                externalClass={`font-bold f-secondary hiddenAnimation`}
                title={scaleUpSec.title}
              />
              <Desc
                externalClass={`pt20 hiddenAnimation`}
                desc={scaleUpSec.desc}
              />
            </div>
            <div
              className={`col-span-5 sm:col-span-5 pt60 md:col-span-5 lg:col-span-2 rightCol pl-2 flex justify-center`}
            >
              <div className="my-auto abtHeight">
                <img
                  className={`wrap-img aboutHeroWrap hiddenAnimation`}
                  alt="cardImg"
                  src={scaleUpSec.imgUrl}
                />
              </div>
            </div>
          </div>
          <div className="grid-container">
            <Title
              externalClass={`pt80 font-bold f-secondary hiddenAnimation`}
              title="Our Velocity Change Method"
            />
            <div className="hiddenAnimation grid pt80 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 displayMobFlex ">
              {valuesDataList.map((valuestData, i) => (
                <TransitionCard
                  externalClass="hiddenAnimation text-black transformUppercase"
                  key={`TC-set-us-apart-${i}`}
                  cardSvg={valuestData.svgId}
                  cardTitle={valuestData.title}
                  cardDesc={valuestData.desc}
                  noBg={true}
                  noTransition={true}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*
       TABSET SECTION */}
      <div className="bg-white">
        <div className="grid-main-container pt60 pb60">
          <div className="grid-container">
            <Title
              title={"Refresh Your Business Basics"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
          <div className="grid-container">
            <div className="">
              <VerticleTabset />
            </div>
          </div>
          <div className="grid-container grid-container flex justify-center pt30 ">
            <Button
              externalClass={`infoBtn mt30 text-white font-semibold py-2 px-4 rounded hover:scale-105 rounded  large`}
              buttonText={`Join Waitlist`}
              buttonHrefLink={buttonHrefLink ? buttonHrefLink : ""}
            />
          </div>
        </div>
      </div>

      {/* MASTER SKILLS */}
      {/* <div className="grid-main-container pt60 pb60">
        <div className="grid-container">
          <Title title={teamsSection.title} externalClass={`pb10 hiddenAnimation`} />
          <Desc
            externalClass={`pb40 text-slate-600`}
            desc={teamsSection.desc}
          />
          <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {modalCardDataList.map((popUpData, index) => (
              <PopUpCard
                key={index}
                index={index}
                popUpCardTitle={popUpData.cardtitle}
                popUpCardDesc={popUpData.cardDesc}
                popUpCardImg={popUpData.cardImg}
                modalTitle={popUpData.modalTitle}
                modalSubtitle={popUpData.modalSubtitle}
                modalDesc={popUpData.modalDesc}
                modalImg={popUpData.modalImg}
                modalInstagramLink={popUpData.modalInstagramLink}
                modalLinkdnLink={popUpData.modalLinkdnLink}
                modalTwitterLink={popUpData.modalTwitterLink}
                isPopUp={true}
                isBio={true}
              />
            ))}
          </div>
        </div>
      </div> */}

      {/* IMGS SECTION */}
      {/* 
      <div className="bg-p-400">
        <div className="">
          {bannerDataList.map((bannerData, i) => (
            <BannerImg
              key={`IO-sectors-include-${i}`}
              overlayText={bannerData.text}
              overlayText2={bannerData.text2}
              imgSrc={bannerData.imgUrl}
            />
          ))}
        </div>
        <div className="grid-container grid-container flex justify-center pt30 ">
          <Button
            externalClass={`infoBtn mt30 text-white font-semibold py-2 px-4 rounded hover:scale-105 rounded  large`}
            buttonText={`Join Waitlist`}
            buttonHrefLink={buttonHrefLink ? buttonHrefLink : ""}
          />
        </div>
      </div>
*/}
      {/* PARTNERS SECTION
      <div className="bg-p-400 mt-16">
        <div className="grid-main-container pt60">
          <div className="grid-container">
            <Title
              title={"we’re famous"}
              externalClass={`pb10 hiddenAnimation`}
            />
          </div>
        </div>
        <Marquee imgSrcList={ourWeImgData && ourWeImgData} />
      </div>
 */}
      {/* FAQS */}
      <div className="bg-p-400 pt60" id="faqs">
        <div className="grid-main-container pb60">
          <div className="grid-container pb40">
            <Title title={"FAQs"} externalClass={`pb10 hiddenAnimation`} />
          </div>
          <div className="grid-container block md:flex hiddenAnimation">
            <div className=" w-[100%]">
              {faqList.map((helpData, i) => (
                <DisclosureX
                  key={`DX-how-we-help-${i}`}
                  disSvg={helpData.svgId}
                  disTitle={helpData.title}
                  disDesc={helpData.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsideGreenrPage;
