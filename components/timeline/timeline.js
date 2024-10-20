import Icon from "../icon/icon";
import Title from "../title/title";
import { useRef } from "react";
import { useIsVisible } from "./useIsVisible";

const Timeline = ({ timelineDataList }) => {
  const leftRef = useRef();
  const isLeftVisible = useIsVisible(leftRef);
  const rightRef = useRef();
  const isRightVisible = useIsVisible(rightRef);

  const getRef = (i) => {
    if (i === 0) {
      return leftRef;
    }
    if (i === timelineDataList.length - 1) {
      return rightRef;
    }
  };

  const horizontalScroll = (scrollRight) => {
    const container = document.getElementById("hScroll");
    let scrollAmount = 0;
    const x = 10;

    const slideTimer = setInterval(function () {
      container.scrollLeft += scrollRight ? x : -x;
      scrollAmount += x;
      if (scrollAmount >= 240) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  return (
    <>
      <ol
        className="flex pt30 pl-5 timelineWrap overflow-x-scroll"
        id="hScroll"
      >
        {timelineDataList &&
          timelineDataList.map((timelineData, i) => (
            <li key={i} className="relative mb-6 sm:mb-0">
              <div className={"f22 text-white font-semibold pb20"}>
                {timelineData[0]}
              </div>

              <div className="flex items-center w-[240px]">
                <div className="z-10 flex items-center justify-center w-6 h-6 text-white rounded-full ring-2 ring-white  sm:ring-2 shrink-0">
                  {i + 1}
                </div>
                {i + 1 != timelineDataList.length ? (
                  <div className="sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-3 sm:pr-10">
                <Title
                  externalClass={"f18 text-white font-normal"}
                  title={timelineData[1]}
                />
                <span
                  ref={getRef(i)}
                  className={
                    i === timelineDataList.length - 1 ? "float-right " : ""
                  }
                ></span>
              </div>
            </li>
          ))}
      </ol>
      <div className="flex justify-between mt-6">
        <div
          className={isLeftVisible ? "opacity-50" : "cursor-pointer"}
          onClick={() => horizontalScroll(false)}
        >
          <Icon
            svgStyleClass={`w-6 h-6 rotate-180 mr-4`}
            name={"doubleCaret"}
          />
        </div>
        <div
          className={isRightVisible ? "opacity-50" : "cursor-pointer"}
          onClick={() => horizontalScroll(true)}
        >
          <Icon svgStyleClass={`w-6 h-6  mr-4`} name={"doubleCaret"} />
        </div>
      </div>
    </>
  );
};

export default Timeline;
