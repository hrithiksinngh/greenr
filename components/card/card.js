import Icon from "../icon/icon";
import Link from "next/link";
import cardStyle from "../card/card.module.scss";

function Card(props) {
  let { cardTitle, cardDesc, cardImg, cardTwitterLink, cardLinkdnLink } = props;

  return (
    <div>
      <div className={cardStyle.cardMain}>
        <div className="img-wrap-main">
          <img
            className={`wrap-img--circle ${cardStyle.imgStyle}`}
            alt="cardImg"
            src={cardImg}
          />
        </div>
        <div className={cardStyle.cardContent}>
          <div className={`pt26 ${cardStyle.cardTitle}  `}>{cardTitle}</div>
          <div className={`${cardStyle.cardDesc}  `}>{cardDesc}</div>

          <div className={`pt20  ${cardStyle.socialsRow}`}>
            {cardTwitterLink ? (
              <Link href={cardTwitterLink}>
                <Icon svgStyleClass={cardStyle.cardSocials} name={"twitter"} />
              </Link>
            ) : null}
            {cardLinkdnLink ? (
              <Link href={cardLinkdnLink}>
                <Icon svgStyleClass={cardStyle.cardSocials} name={"linkdn"} />
              </Link>
            ) : null}
            {/* <Link href={cardInstagramLink}>
              <Icon svgStyleClass={cardStyle.cardSocials} name={'instagram'} />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
