import React, { useEffect } from "react";
import Desc from "../components/desc/desc";
import Title from "../components/title/title";
import animation from "../utils/animation";
const PrivacyPolicy = () => {
  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  let aboutUsHeroSection = {
    title: "Greenr Privacy Policy",
    title1: "We Value Your Privacy",
    desc1: `Greenr Sustainability Accelerator is a green accelerator being run by Technoserve India whose objective is to accelerate small
    and green businesses and startups in India to scale their business, become resilient thereby effecting
    a significant positive environmental change.`,
    desc2: `This Website informs you of our policies regarding the collection, use, protection, retention, and
    disclosure of Personal Information we receive from visitors of the Website. Your privacy and security
    are very important to us. We treat your personal information as private and confidential and maintain
    strict security policies and procedures.`,
    title2: "Information Collection and Use",
    desc3: `While using our Website, we may ask you to provide us with certain personal information that can be
    used to contact you (e.g. contact form on the Website) and/or carry out any other business between
    us for which you have given consent to at the time of providing us with your personal information.
    Personal information may include but is not limited to first name, last name, and email address.`,
    desc4: `Use of Data`,
    desc5: `If you use our Website, sign up for, or request to participate in a particular Service, we will process
    your personal information you give us for the following purposes:`,

    desc51: `Operate, maintain, administer, and improve our Website, e.g. to show the content you request
    and to secure the Website as well as to gather analysis or valuable information so that we can
    improve our Service;`,
    desc52: `Communicate with you regarding any information you have submitted, including changes to
    our Service as well as support and administrative messages;`,
    desc53: `Monitor the usage of our Website and understand how users interact with the Website;`,
    desc54: `Detect, prevent, and address technical issues;`,
    desc55: `Allow you to participate in interactive features of our Service when you choose to do so;`,
    desc56: `Better understand your needs and interests, and personalize your experience with the
    Services; and`,
    desc57: `Provide customer support.`,

    title6: `Newsletters and marketing information`,
    desc6: `If you have subscribed to one or more of our services, communications or mailing lists, you may
    unsubscribe by following the instructions which are included in any email that you receive or by
    contacting hello@getgreener.org at any time.`,

    title7: `Protection and Security of Personal Information`,
    desc7: `Greenr Sustainability Accelerator takes all measures reasonably necessary to protect against the unauthorized access, use,
    alteration or destruction of personal information. Greenr Sustainability Accelerator may disclose your personal information only
    to those of its employees, contractors and affiliated organizations that (i) need to know that
    information in order to process it on our behalf or to provide services available at our Website, and (ii)
    that have agreed not to disclose it to others. Some of those employees, contractors and affiliated
    organizations may be located outside of your home country; by using our Website, you consent to the
    transfer of such information to them.`,

    title8: `Disclosure of Personal Information`,
    desc8: `We will not sell personal information to anyone. Other than transferring data collected to its
    employees, contractors and affiliated organizations, as described above, we may disclose your
    personal information when such action is necessary to:`,

    desc81: `Comply with a legal obligation`,
    desc82: `Respond to a subpoena, court order, or other governmental request`,
    desc83: `Protect the property or rights of Greenr Sustainability Accelerator, third parties, users of the Service, or the public at
    large`,
    desc84: `Defend the rights or property of Greenr Sustainability Accelerator`,
    desc85: `Prevent or investigate possible wrongdoing in connection with the Service`,
    desc86: `Protect against legal liability`,

    title9: `Retention of Data`,
    desc9: `Greenr Sustainability Accelerator will retain your personal information only for as long as is necessary for the purposes set out
    in this Privacy Policy. We will retain and use your personal information to the extent necessary to
    comply with our legal obligations (for example, if we are required to retain your data to comply with
    applicable laws), resolve disputes, and enforce our legal agreements and policies.`,

    title10: `Usage Data`,
    desc10: `We will retain website usage data for internal analysis purposes. Usage data will be anonymized and
    will be used to strengthen the security or to improve the functionality of our Service, or where we are
    legally obligated to retain this data.`,

    title11: `Links to External Sites`,
    desc11: `The Website may contain links to and from the websites of other businesses of Greenr Sustainability Accelerator partner
    networks, advertisers and affiliates. If you follow a link to any of these websites, please note these
    websites have their own privacy policies and we shall not accept any responsibility or liability for these
    websites or policies. Please check these policies before you submit any personal data to these
    websites.`,

    title12: `Limitation of Our Liability`,
    desc12: `We provide the Website to you on an “as is” basis. We don’t give you any warranties or guarantees
    about how the Website will work, the availability of the Website, or whether you can get results from
    the Website. Likewise, none of the third parties that provide any of the content on the Website give
    you any warranties about how it will work, its availability, or any results you can get from it.`,

    desc13: `We do not represent or warranty the quality or performance of the Website, or the accuracy or
    completeness of the contents of the Website. We are not liable for any acts or damages that arise out
    of your use of the Website in any way. Likewise, none of the third parties that provide any of the
    content on the Website are liable for any acts or damages that arise out of your use, or inability to
    use, the Website.`,

    desc14: `If you violate the Terms of Use and another person or entity brings a legal claim against Greenr Sustainability Accelerator its
    affiliates, or it respective officers, directors, owners, agents, information providers, or copyright owners
    (together, the Greenr Sustainability Accelerator Parties”) as a result of your violation, you are required to indemnify, defend,
    and hold harmless Greenr Sustainability Accelerator Parties for that legal claim.`,

    title15: `Jurisdiction and Applicable Law`,
    desc15: `If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and
    the website's terms of use. In addition to the foregoing, any disputes arising under this Policy shall be
    governed by the laws of India.`,

    title16: `Updates to this Policy`,
    desc16: `This Privacy Policy was last updated on 12th January 2023 and will remain in effect except with
    respect to any changes in its provisions in the future. We reserve the right to update or change our
    Privacy Policy at any time. If we change our Privacy Policy, we will post those changes on the
    Website so that users are always aware of what information we collect, how we use it, and under what
    circumstances, if any, we will disclose it. These changes will be effective immediately. In any event,
    changes to this Privacy Policy may affect our use of personal information that you provided us prior to
    our notification to you of the changes. To that end, please check this Privacy Policy periodically to
    inform yourself of any changes. If you do not accept the changes made to this Privacy Policy you
    should stop using our Website and Services.`,

    title17: `For More Information`,
    desc17: `Should you have any questions regarding this Policy or want to learn more about our security
    practices you can contact us at hello@getgreener.org`,
  };
  return (
    <div className="bg-p-400">
      {/* POP UP CARDS SECTION */}
      <div className="grid-main-container pt60">
        <Title
          externalClass={`f42 text-shadow text-black font-bold f-secondary text-center hiddenAnimation`}
          title="Greenr Privacy Policy"
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title1}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc1}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc2}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title2}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc3}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc4}
        />
        <Desc
          externalClass={`pt2 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc5}
        />
        <div className="flex pt20">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc51}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc52}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc53}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc54}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc55}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc56}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc57}
          />
        </div>
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title6}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc6}
        />

        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title7}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc7}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title8}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc8}
        />
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc81}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc82}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc83}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc84}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc85}
          />
        </div>
        <div className="flex pt2">
          <span className="pl-6 pr-3">&#x2022;</span>
          <Desc
            externalClass={`text-black hiddenAnimation`}
            desc={aboutUsHeroSection.desc86}
          />
        </div>
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title9}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc9}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title10}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc10}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title11}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc11}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title12}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc12}
        />

        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc13}
        />

        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc14}
        />

        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title15}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc15}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title16}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc16}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title17}
        />
        <Desc
          externalClass={`pt20 text-black hiddenAnimation pb30`}
          desc={aboutUsHeroSection.desc17}
        />
        <div className="grid-container"></div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
