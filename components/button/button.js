import Link from "next/link";
import ButtonStyle from "../button/button.module.scss";

const Button = (props) => {
  let { buttonText, externalClass, buttonHrefLink, target = "_blank" } = props;

  return (
    <>
      <Link
        className={`${externalClass} ${ButtonStyle.mobileBtn} sm:text-sm text-white font-semibold py-2 px-4 rounded ease-linear duration-150 hover:scale-105 hover:shadow-lg`}
        target={target}
        href={buttonHrefLink}
      >
        {buttonText}
      </Link>
    </>
  );
};

export default Button;
