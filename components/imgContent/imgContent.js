import Link from "next/link";
import Icon from "../icon/icon";
import imgContentStyles from "../imgContent/imgContent.module.scss";
// import { getImageUrl } from "../../utils/images";

const ImgContent = (props) => {
  let {
    imgContentTitle,
    imgContentSubtitle,
    imgContentDesc,
    imgContentCardImg,
    imgContentTwitterLink,
    imgContentLinkdnLink,
  } = props;

  // const imgUrl = getImageUrl({ fileName: imgContentCardImg });

  return (
    <>
      <div
        className={`md:hidden grid grid-cols-1 gap-10 ${imgContentStyles.cardMain}`}
      >
        <div className={`${imgContentStyles.cardContent}`}>
          <div
            className={`f32 font-semibold f-secondary capitalize ${imgContentStyles.imgContentTitle}`}
          >
            {imgContentTitle}
          </div>
          <div
            className={`f18 text-slate-800 font-semibold font-medium text-slate f-secondary capitalize ${imgContentStyles.imgContentTitle}`}
          >
            {imgContentSubtitle}
          </div>
          <div
            className={`pt20 f18 text-slate-600 ${imgContentStyles.imgContentDesc}`}
          >
            {imgContentDesc}
          </div>

          <div className={`pt20 flex ${imgContentStyles.socialsRow}`}>
            {imgContentTwitterLink ? (
              <Link href={imgContentTwitterLink} target="_blank">
                <Icon
                  svgStyleClass={imgContentStyles.cardSocials}
                  name={"twitter"}
                />
              </Link>
            ) : null}
            {imgContentLinkdnLink ? (
              <Link href={imgContentLinkdnLink} target="_blank">
                <Icon
                  svgStyleClass={imgContentStyles.cardSocials}
                  name={"linkdn"}
                />
              </Link>
            ) : null}
          </div>
        </div>
        <div className={`img-wrap-main ${imgContentStyles.imgCol}`}>
          <img
            className={`wrap-img mt-auto ${imgContentStyles.imgStyle}`}
            alt="cardImg"
            src={imgContentCardImg && imgContentCardImg}
          />
        </div>
      </div>
      <div
        className={`md:flex grid grid-cols-2 hidden ${imgContentStyles.cardMain}`}
      >
        <div className={`${imgContentStyles.cardContent} w-[60%]`}>
          <div
            className={`f42 font-semibold f-secondary capitalize ${imgContentStyles.imgContentTitle}`}
          >
            {imgContentTitle}
          </div>
          <div
            className={`f18 text-slate-800 font-semibold font-medium text-slate f-secondary capitalize ${imgContentStyles.imgContentTitle}`}
          >
            {imgContentSubtitle}
          </div>
          <div
            className={`pt10 f16 text-slate-600 ${imgContentStyles.imgContentDesc}`}
          >
            {imgContentDesc}
          </div>

          <div className={`pt10 flex ${imgContentStyles.socialsRow}`}>
            {imgContentTwitterLink ? (
              <Link href={imgContentTwitterLink} target="_blank">
                <Icon
                  svgStyleClass={imgContentStyles.cardSocials}
                  name={"twitter"}
                />
              </Link>
            ) : null}
            {imgContentLinkdnLink ? (
              <Link href={imgContentLinkdnLink} target="_blank">
                <Icon
                  svgStyleClass={imgContentStyles.cardSocials}
                  name={"linkdn"}
                />
              </Link>
            ) : null}
          </div>
        </div>

        <div className={`img-wrap-main ${imgContentStyles.imgCol} w-[40%]`}>
          <img
            className={`wrap-img mt-auto ${imgContentStyles.imgStyle}`}
            alt="cardImg"
            src={imgContentCardImg && imgContentCardImg}
          />
        </div>
      </div>
    </>
  );
};

export default ImgContent;
