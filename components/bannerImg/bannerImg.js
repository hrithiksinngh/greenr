import Title from '../title/title';

const BannerImg = props => {
  let { overlayText, imgSrc, overlayText2 } = props;
  return (
    <>
      <div className={`relative  h-[800px] imgMainOverlayStatic `}>
        <div className={` overlay absolute `}>
          <Title
            externalClass={`hiddenAnimation text-8xl f6 py-10 text-shadow font-black overlayText text-white text-center  font-semibold f-secondary`}
            title={overlayText}
          />
          <Title
            externalClass={`hiddenAnimation text-8xl f6 py-10 text-shadow font-black overlayText text2 text-white text-center  font-semibold f-secondary`}
            title={overlayText2}
          />
        </div>
        <div className={`img-wrap-main h-[100%] w-[auto]`}>
          <img
            className={`wrap-img h-[100%] w-[auto]`}
            alt="cardImg"
            src={imgSrc}
          />
        </div>
      </div>
    </>
  );
};

export default BannerImg;
