import Desc from "../desc/desc";
import Icon from "../icon/icon";
import Title from "../title/title";

const TransitionCard = (props) => {
  let { cardSvg, cardTitle, cardDesc, externalClass, noTransition, noBg } =
    props;
  return (
    <div
      className={`${
        noTransition ? "" : "hover:scale-105 duration-150 ease-out shadow-xl"
      } ${
        noBg ? "" : "bg-white mainTransitionCard pt80 px-5 min-h-[480px]"
      } text-primary  md:mb-4  pb-5 rounded-xl select-none`}
    >
      <div className={`iconContainer `}>
        <Icon
          svgStyleClass={`${
            noBg ? "h-[70px] " : "lg:h-[98px] h-[78px]"
          } mx-auto hiddenAnimation`}
          name={cardSvg}
        />
      </div>
      {/* <div className={`f46 font-semibold f-secondary capitalize`}>
        {cardTitle}
      </div> */}
      <Title
        title={cardTitle}
        externalClass={` cardTitle ${
          noTransition ? "" : "hover:text-2xl"
        } pt40 text-center f28 ${externalClass}`}
      />
      <Desc
        externalClass={`pb20 text-slate-600 text-center pt30 ${externalClass}`}
        desc={cardDesc}
      />
    </div>
  );
};

export default TransitionCard;
