import Title from '../title/title';

const ImgOverlay = props => {
  let { overlayText, imgSrc } = props;
  return (
    <div className={`relative imgMainOverlay cursor-pointer `}>
      <div className={` overlay absolute `}>
        <Title
          externalClass={`f32 capitalize overlayText text-white text-center  font-semibold f-secondary`}
          title={overlayText}
        />
      </div>
      <div className={`img-wrap-main h-[400px] `}>
        <img className={`wrap-img `} alt="cardImg" src={imgSrc} />
      </div>
    </div>
  );
};

export default ImgOverlay;
