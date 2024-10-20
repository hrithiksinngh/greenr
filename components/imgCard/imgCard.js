import Link from 'next/link';
import Button from '../button/button';
import Icon from '../icon/icon';
import imgCardStyles from '../imgCard/imgCardStyles.module.scss';
import Title from '../title/title';
import { getImageUrl } from '../../utils/images';

const ImgCard = props => {
  let { cardTopic, cardDate, cardTime, cardImg } = props;

  const imgUrl = getImageUrl({ fileName: cardImg });

  return (
    <div className={`${imgCardStyles.mainCard} p-5`}>
      <div className="img-wrap-main relative">
        <img
          className={`wrap-img ${imgCardStyles.imgStyle}`}
          alt="cardImg"
          src={imgUrl}
        />
        <div className={`pt26 f24 ${imgCardStyles.cardTopticStyle}`}>
          Topic: {cardTopic}
        </div>
      </div>

      <div
        className={`flex justify-between items-center pt30  ${imgCardStyles.detailsSection}`}
      >
        <div className={` flex ${imgCardStyles.dateContainer}`}>
          <span className={`flex items-center pr-4 f22 `}>
            <Icon
              svgStyleClass={`${imgCardStyles.iconStyle} mr-2`}
              name={'date'}
            />{' '}
            {cardDate}
          </span>
          <span className={`flex items-center pr-4 f22 `}>
            <Icon
              svgStyleClass={`${imgCardStyles.iconStyle} mr-2`}
              name={'time'}
            />{' '}
            {cardTime}
          </span>
        </div>
        {/* <button className="text-white font-semibold f22 py-2 px-4 rounded infoBtn">
          Book Slot
        </button> */}
        <Button
          externalClass={`f22 infoBtn ${imgCardStyles.fullWidthBtn}`}
          buttonText={`Book Slot`}
        />
      </div>
    </div>
  );
};

export default ImgCard;
