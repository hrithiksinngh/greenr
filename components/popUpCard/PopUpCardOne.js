import React, { useState, useEffect } from "react";

import popUpCardStyles from "../popUpCard/popUpCard.module.scss";

const PopUpCardOne = (props) => {
  let { index, popUpCardTitle, popUpCardDesc, popUpCardImg, isPopUp, isBio } =
    props;

  const [show, setShow] = useState(false);

  useEffect(() => {
    show && document.body.classList.add("overflow-hidden");
    !show && document.body.classList.remove("overflow-hidden");
  }, [show]);
  return (
    <div
      className={`cursor-normal pointer-events-none  ${popUpCardStyles.mainCard} ease-linear duration-150 hover:scale-105 hover:shadow-lg transition duration-150 ease-in-out w-[600px]`}
    >
      <div className={`img-wrap-main ${popUpCardStyles.cardImgStyle}`}>
        <img
          className={`wrap-img ${popUpCardStyles.imgStyle}`}
          alt="cardImg"
          src={popUpCardImg && popUpCardImg}
        />
      </div>
      <div className={`${popUpCardStyles.cardContent} px-12`}>
        <div className={`f22 font-semibold ${popUpCardStyles.cardTitle}`}>
          {popUpCardTitle}
        </div>
        <div className={`f16 pt-1 text-slate-500`}>{popUpCardDesc}</div>
        {isBio ? (
          <div
            className={`f16 pt20 infoBlue underline underline-offset-2 ${popUpCardStyles.cardTitle}`}
          >
            {`View Bio >`}
          </div>
        ) : (
          ``
        )}
      </div>
    </div>
  );
};

export default PopUpCardOne;
