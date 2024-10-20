import { useState, useEffect } from "react";
import Desc from "../../components/desc/desc";
import PopUpCard from "../../components/popUpCard/popUpCard";
import Title from "../../components/title/title";
import animation from "../../utils/animation";
import { UseTeamsData } from "../../utils/teamsData";
import { ThreeDots } from "react-loader-spinner";

const TeamsSection = () => {
  const { isLoading, data } = UseTeamsData();
  const teamsData = data
    ? data.data.response
    : [
        [
          "...", // 0
          "...", // 1
          "...", // 2
          "...", // 3
          "...", // 4
          "...", // 5
          "...", // 6
          "", // 7 - insert default loading img url here
          "", // 8 - insert default loading img url here
          "", // 9 - leave empty
          "", // 10 - leave empty
        ],
      ];

  // const isFetchingPosts = useIsFetching({
  //   queryKey: ["user-hero"],
  // });

  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  let teamsSection = {
    title: "In the trenches with you...",
    desc: "Our business advisors extend TechnoServe’s global entrepreneurship expertise to your business.",
  };

  let imgCardDataList = [
    {
      cardTopic: "Happy Hour",
      date: "10th Dec, Sat",
      time: "03:00 PM",
      imgSrc: "dummy",
    },
    {
      cardTopic: "Happy Hour1",
      date: "10th Dec, Sat1",
      time: "03:00 PM1",
      imgSrc: "modal",
    },
  ];

  return (
    <div className="bg-p-400">
      {/* POP UP CARDS SECTION */}
      <div className="grid-main-container pt60 pb-24">
        <div className="grid-container">
          <Title
            title={teamsSection.title}
            externalClass={`pb10 hiddenAnimation`}
          />
          <Desc
            externalClass={`pb40 text-slate-600 hiddenAnimation`}
            desc={teamsSection.desc}
          />

          {isLoading && isLoading === true ? (
            <div className="flex flex-row justify-center ">
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
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 md:gap-5 lg:gap-8">
              {teamsData &&
                teamsData.map((popUpData, index) => (
                  <PopUpCard
                    key={`teams_popUpCard_${index}`}
                    index={index}
                    popUpCardTitle={popUpData[2]}
                    popUpCardDesc={popUpData[3]}
                    popUpCardImg={popUpData[7]}
                    modalTitle={popUpData[2]}
                    modalSubtitle={popUpData[3]}
                    modalDesc={popUpData[5]}
                    modalImg={popUpData[8]}
                    modalLinkdnLink={popUpData[10]}
                    modalTwitterLink={popUpData[11]}
                    isPopUp={true}
                    isBio={true}
                  />
                ))}
            </div>
          )}
        </div>
      </div>

      {/* IMAGE CARD SECTION (CURIOUS HOW WE...) 
      <div className={`bg-500 mt60 pb60`}>
        <div className="grid-main-container pt60 pb60">
          <div className="grid-container">
            <Title
              externalClass={"hiddenAnimation z-1111"}
              title={`Curious about how we fuel your growth? Let's chat!`}
            />
            <div className="grid pt40 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-10">
              {imgCardDataList.map((imgCardData, i) => (
                // <ImgCard
                //   key={`img_${i}`}
                //   cardTopic={imgCardData.cardTopic}
                //   cardDate={imgCardData.date}
                //   cardTime={imgCardData.time}
                //   cardImg={imgCardData.imgSrc}
                // />
                <iframe
                  key={`teams_iFrame_${i}`}
                  className="heheHehe h-52 lg:h-28"
                  src="https://lu.ma/embed-events/usr-jkDCBrHtGeyIOTP"
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              ))}
            </div>
          </div>
        </div>
      </div>
      */}
    </div>
  );
};

export default TeamsSection;
