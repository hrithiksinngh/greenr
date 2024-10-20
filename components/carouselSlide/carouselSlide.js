import secodnaryCardStyle from "../carouselSlide/carouselSlide.module.scss";
import Icon from "../icon/icon";
import Link from "next/link";
import Title from "../title/title";
import Desc from "../desc/desc";

const CarouselSlide = (props) => {
  let {
    secondaryCardTitle,
    secondaryCardDesc,
    secondaryCardImg,
    secondaryCardTwitter,
    secondaryCardLinkdln,
    secondardRefText,
  } = props;
  return (
    <div className="grid grid-cols-7 gap-10">
      <div
        className={`lg:col-span-2 col-span-7 flex flex-col items-center ${secodnaryCardStyle.cardMain} ${secodnaryCardStyle.imgLeft}`}
      >
        <div
          className={`relative ${secodnaryCardStyle.imgBorder} ${secodnaryCardStyle.borderGradient}`}
        >
          <div className={`img-wrap-main ${secodnaryCardStyle.gradientInner}`}>
            <img
              className={`wrap-img--circle ${secodnaryCardStyle.imgStyle}`}
              alt="cardImg"
              src={secondaryCardImg}
            />
          </div>
          <div
            className={`pt20 flex-col absolute  ${secodnaryCardStyle.socialsRow}`}
          >
            {secondaryCardTwitter && secondaryCardTwitter ? (
              <Link href={secondaryCardTwitter}>
                <Icon
                  svgStyleClass={secodnaryCardStyle.cardSocials}
                  name={"twitter"}
                />
              </Link>
            ) : null}
            {secondaryCardLinkdln && secondaryCardLinkdln.length ? (
              <Link href={secondaryCardLinkdln}>
                <Icon
                  svgStyleClass={secodnaryCardStyle.cardSocials}
                  name={"linkdn"}
                />
              </Link>
            ) : null}
          </div>
        </div>
        <Title
          title={secondaryCardTitle}
          externalClass={`pt26 f28 ml-8 text-white font-bold ${secodnaryCardStyle.cardTitle} w-full`}
        />
      </div>

      <div className="lg:col-span-5 col-span-7">
        <Icon width={"68px"} height={"56px"} name={"quote"} />
        <Desc
          externalClass={`text-white pt20 f18 ${secodnaryCardStyle.cardDesc}`}
          desc={secondaryCardDesc}
        />
        <div
          className={`text-white pt40 text-right italic font-bold  f16 ${secodnaryCardStyle.cardRefText}`}
        >
          {`- ${secondardRefText}`}
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
