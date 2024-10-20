import Link from "next/link";
import footerStyle from "../footer/footer.module.scss";
import Icon from "../icon/icon";
import EmailInput from "../emailInput/emailInput";
import Title from "../title/title";

const Footer = () => {
  let footerSlogan = "Supercharging Environment Entrepreneurship in India";
  let footerData1Heading = "Reach us";
  let footerData2Heading = "Get Greenr";

  let footerDataList1 = [
    {
      title: "linkedln",
      link: "https://www.linkedin.com/company/technoserve-india/",
    },
    {
      title: "instagram",
      link: "https://www.instagram.com/technoserve/",
    },
    {
      title: "twitter",
      link: "https://twitter.com/TechnoServe",
    },
    // {
    //   title: 'telegram',
    //   link: 'https://www.google.com/url?q=https://t.me/%2BSSxtrNwGRMMwZDY1&sa=D&source=docs&ust=1673442201492831&usg=AOvVaw2s0Yw4fRHM4EkPOjWAy0qX',
    // },
    // {
    //   title: "WhatsApp",
    //   link: "https://chat.whatsapp.com/GiGpXyjx8KUDKRfibkcA6S",
    // },
    {
      title: "careers",
      link: "https://www.linkedin.com/company/technoserve-india/jobs/",
    },
  ];
  let footerDataList2 = [
    {
      title: "Help Centre",
      link: "/insideGreenr#faqs",
    },
    {
      title: "Know a founder? Nominate them",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSf4J6fyoyku1gIHOr0yL-xbomA4B2EEKYt9H4wnFYbcmyimHA/viewform?usp=sf_link",
    },
    {
      title: "Partner with us",
      link: "mailto:partners@getgreenr.org",
    },
    {
      title: "Why Scale Green Startups? ",
      link: "/about#whyScale",
    },
    {
      title: "Newsroom",
      link: "https://getgreenr.medium.com/",
    },
  ];
  return (
    <footer className={`${footerStyle.footer} pt60`}>
      <div className={`grid-main-container`}>
        <div className="grid-container grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10">
          <div className={`col-span-2`}>
            <Title
              externalClass={`font-bold f-secondary pb20 f32`}
              title={footerSlogan}
            />
            <div className="f14 pb20 flex items-center">
              <Icon svgStyleClass="h-[20px] w-[30px]" name="mail" />
              <span>hello@getgreenr.org</span>
            </div>
            <EmailInput />
          </div>

          <div className={`col-span-1`}>
            <Title
              externalClass={`font-bold f-secondary f16 mb20`}
              title={footerData1Heading}
            />
            {footerDataList1.map((footerData1, i) => (
              <ul
                key={i}
                className={`${footerStyle.linkStyle} f-secondary f14 capitalize mb20 `}
              >
                <Link
                  target="_blank"
                  href={footerData1.link}
                  className="hover:scale-105 hover:font-semibold"
                >
                  {footerData1.title}
                </Link>
              </ul>
            ))}
          </div>

          <div className={`col-span-1`}>
            <Title
              externalClass={`font-bold f-secondary f16 mb20`}
              title={footerData2Heading}
            />
            {footerDataList2.map((footerData2, i) => (
              <ul
                key={i}
                className={`${footerStyle.linkStyle} f14 f-secondary capitalize mb20 `}
              >
                <Link
                  target="_blank"
                  href={footerData2.link}
                  className="hover:scale-105 hover:font-semibold"
                >
                  {footerData2.title}
                </Link>
              </ul>
            ))}
          </div>
        </div>

        <div
          className={`grid-container py-5 mt40 f14 ${footerStyle.copyright}`}
        >
          <div className="flex md:flex-row  flex-col justify-between">
            <div className="flex justify-center mb-2 md:mb-0 md:justify-start mr-10">
              <Icon
                svgStyleClass={`w-[20px] h-[20px] mr-1`}
                name={"copyright"}
              />
              2023 TechnoServe, Inc
            </div>
            <ul className="flex justify-center md:justify-start">
              <li className="mr-10">
                <Link
                  href={"/privacy-policy"}
                  className="hover:scale-105 hover:font-semibold"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <div className="w-32 text-right">
                  <Link
                    href={"/terms-and-conditions"}
                    className="hover:scale-105 hover:font-semibold"
                  >
                    Terms & Conditions
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
