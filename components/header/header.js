import headerStyle from "../header/header.module.scss";
import { Navbar } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Button from "../button/button";
import Icon from "../icon/icon";
import { getImageUrl } from "../../utils/images";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

const Header = () => {
  const router = useRouter();
  // const [isMobile, setIsMobile] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 1080px)" });

  const [buttonLink, setButtonLink] = useState();

  const getButtonLink = () => {
    axios
      .get("https://server2.getgreenr.org/api/application-form-link")
      .then((res) => {
        setButtonLink(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getButtonLink();
  }, []);
  const buttonHrefLink = buttonLink && buttonLink[0][0];

  // useEffect(() => {
  //   if (windowSize && windowSize !== undefined) {
  //     setIsMobile(windowSize.innerWidth < 800);
  //   }

  //   if (typeof window !== 'undefined') {
  //     window.addEventListener('scroll', () =>
  //       setSmall(window.pageYOffset > 200)
  //     );
  //   }
  // }, []);
  // const [windowSize, setWindowSize] = useState(getWindowSize());

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     function handleWindowResize() {
  //       setWindowSize(getWindowSize());
  //     }

  //     window.addEventListener('resize', handleWindowResize);

  //     return () => {
  //       window.removeEventListener('resize', handleWindowResize);
  //     };
  //   }
  // }, []);

  // function getWindowSize() {
  //   if (typeof window !== 'undefined') {
  //     const { innerWidth, innerHeight } = window;
  //     return { innerWidth, innerHeight };
  //   }
  // }

  let logoSrc = getImageUrl({ fileName: "mainLogo" });

  return (
    <div className={`sticky top-0 z-50 patternHeader patternBg `}>
      <Navbar
        className={`w-full grid-main-container px-0 ${headerStyle.headerMain} bg-transparent]`}
        fluid={true}
        rounded={true}
      >
        <div className="flex abc">
          <Navbar.Toggle className={`${headerStyle.hamburger}`} />

          {isMobile ? (
            <Navbar.Brand className={`${headerStyle.mobileLogo}`} href="/">
              <Icon name={"mobileLogo"} />
            </Navbar.Brand>
          ) : (
            <Navbar.Brand className={`${headerStyle.logoMain}`} href="/">
              {/* <Icon name={'mainLogo'} /> */}
              <div className={`logoImg`}>
                <img className={`wrap-img `} alt="logo" src={logoSrc} />
              </div>
            </Navbar.Brand>
          )}

          {/* <Navbar.Brand className={`${headerStyle.mobileLogo}`} href="/">
            {isMobile ? (
              <Icon name={'mobileLogo'} />
            ) : (
              <Icon name={'mainLogo'} />
            )}
          </Navbar.Brand> */}
        </div>

        <div className={`${headerStyle.btnContainer} w-36 h-11`}>
          <Button
            externalClass={`text-white font-semibold py-2 px-4 rounded hover:scale-105 rounded ${headerStyle.patternPrimaryBtn}`}
            buttonText={`Join Waitlist`}
            buttonHrefLink={buttonHrefLink ? buttonHrefLink : ""}
          />
          {/* 
          <Button
            externalClass={`bg-transparent ml-4 font-semibold py-2 px-4 border hover:scale-105 rounded ${headerStyle.patternSecondaryBtn}`}
            buttonText={`Sign In`}
          /> */}
        </div>
        <Navbar.Collapse className={`${headerStyle.patternDropdown}`}>
          <Navbar.Link
            active={router.pathname == "/insideGreenr"}
            className={`f16 mt-0 font-normal ease-linear duration-150 lg:hover:scale-105`}
            href="/insideGreenr"
          >
            Inside Greenr
          </Navbar.Link>
          <Navbar.Link
            active={router.pathname == "/about"}
            className={`f16 mt-0 font-normal ease-linear duration-150 lg:hover:scale-105`}
            href="/about"
          >
            About Us
          </Navbar.Link>

          <Navbar.Link
            active={router.pathname == "/teams"}
            className={`f16 mt-0 font-normal ease-linear duration-150 lg:hover:scale-105`}
            href="/teams"
          >
            Team
          </Navbar.Link>

          <Navbar.Link
            active={router.pathname == "/portfolio"}
            className={`f16 mt-0 font-normal ease-linear duration-150 lg:hover:scale-105`}
            href="/portfolio"
          >
            Portfolio
          </Navbar.Link>
          <a
            className={`f16 mt-0 font-normal ease-linear duration-150 lg:hover:scale-105`}
            href="https://medium.com/@get-greenr"
            target="_blank"
          >
            Blog
          </a>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
