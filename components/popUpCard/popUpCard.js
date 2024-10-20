import React, { useState, useEffect } from "react";
import ImgContent from "../imgContent/imgContent";
import popUpCardStyles from "../popUpCard/popUpCard.module.scss";
import { getImageUrl } from "../../utils/images";
import Icon from "../icon/icon";

const PopUpCard = (props) => {
  let {
    index,
    popUpCardTitle,
    popUpCardDesc,
    popUpCardImg,
    isPopUp,
    isBio,
    modalTitle,
    modalSubtitle,
    modalDesc,
    modalImg,
    modalLinkdnLink,
    modalTwitterLink,
  } = props;

  // const imgUrl = getImageUrl({ fileName: popUpCardImg });

  const [show, setShow] = useState(false);

  useEffect(() => {
    show && document.body.classList.add("overflow-hidden");
    !show && document.body.classList.remove("overflow-hidden");
  }, [show]);
  return (
    <>
      <div
        onClick={() => setShow(true)}
        className={`${
          isPopUp ? "cursor-pointer" : "cursor-normal pointer-events-none"
        } ${
          popUpCardStyles.mainCard
        } ease-linear duration-150 hover:scale-105 hover:shadow-lg transition duration-150 ease-in-out`}
        key={index}
      >
        <div className={`img-wrap-main ${popUpCardStyles.cardImgStyle}`}>
          <img
            className={`wrap-img ${popUpCardStyles.imgStyle}`}
            alt="cardImg"
            src={popUpCardImg && popUpCardImg}
          />
        </div>
        <div className={popUpCardStyles.cardContent}>
          <div className={`f18 font-semibold ${popUpCardStyles.cardTitle}`}>
            {popUpCardTitle}
          </div>
          <div className={`f14 text-slate-500`}>{popUpCardDesc}</div>
          {isBio ? (
            <div
              className={`f14 pt12 infoBlue underline underline-offset-2 ${popUpCardStyles.cardTitle}`}
            >
              {`View Bio >`}
            </div>
          ) : (
            ``
          )}
        </div>
      </div>
      {show === true && (
        <div className="overflow-hidden">
          <div className="popUpOverlay"></div>
          <div className={`z-10 w-full h-full ${popUpCardStyles.modalMainDiv}`}>
            <div
              className={`modal-dialog relative lg:w-[80%] w-full pointer-events-none ${popUpCardStyles.modalMain}`}
            >
              <div className="shadow-lg relative flex flex-col  w-full pointer-events-auto bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-body relative">
                  <button
                    type="button"
                    className={`absolute md:right-10 top-2  w-6 h-6 text-black border-none rounded-none opacity-80 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-100 hover:no-underline`}
                    onClick={() => setShow(false)}
                  >
                    <Icon
                      externalDivClass={"ml-3"}
                      width={"50px"}
                      height={"50px"}
                      name={"close"}
                    />
                  </button>

                  <ImgContent
                    imgContentTitle={modalTitle}
                    imgContentSubtitle={modalSubtitle}
                    imgContentDesc={modalDesc}
                    imgContentCardImg={modalImg}
                    imgContentTwitterLink={modalTwitterLink}
                    imgContentLinkdnLink={modalLinkdnLink}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpCard;
