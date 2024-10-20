import React, { useEffect } from "react";
import Desc from "../components/desc/desc";
import Title from "../components/title/title";
import animation from "../utils/animation";
const TermsAndConditions = () => {
  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  let aboutUsHeroSection = {
    title1: "Definitions",
    desc1: `<span className="font-bold">Greenr</span> means TechnoServe Green Entrepreneurship Accelerator
    <br/><span className="font-bold">AAPL</span> means Ashwattha Advisors Private Limited
    <br/><span className="font-bold">Greenr /AAPL</span> means Greenr / AAPL (including its officers, employees, agents and authorised third
        parties)
    <br/> <span className="font-bold">Green SGB</span> means Green Small and Growing business
    <br/> <span className="font-bold">You</span> or ‘the applicant’ means the SGB startup / SGB business applying for the Accelerator program
    `,
    title2: `Introduction`,
    desc2: `<p className="pl-6">1. By submitting this application, you agree to these terms and conditions
    <br/> 2. Applications must comply with these terms and conditions to be valid and acceptable</p>
    `,
  };
  return (
    <div className="bg-p-400">
      {/* POP UP CARDS SECTION */}
      <div className="grid-main-container pt60">
        <Title
          externalClass={`f42 text-shadow text-black font-bold f-secondary text-center hiddenAnimation`}
          title="Greenr Accelerator Terms & Conditions"
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title1}
        />
        <Desc
          externalClass={`pt2 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc1}
        />
        <Title
          externalClass={`pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation`}
          title={aboutUsHeroSection.title2}
        />
        <Desc
          externalClass={`pt2 text-black hiddenAnimation`}
          desc={aboutUsHeroSection.desc2}
        />
        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Who can apply
        </div>
        <div className={`pt2 text-black hiddenAnimation`}>
          Green SGB that fulfil the following criteria can apply
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              Businesses that produce products and services that mitigate
              environmental degradation and/or have a positive environmental
              impact (Eg recyclable, biologic, low carbon)
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">2. </div>
            <div>
              Businesses that have been in operation for at least 2 years
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">3. </div>
            <div>
              Business that have 3 or more employees, not including the owner/
              entrepreneur
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">4. </div>
            <div>
              Business that clocked a minimum revenue of INR 12,00,000 in the
              last financial year. We may consider exceptional businesses with
              innovative products that do not meet this threshold
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">5. </div>
            <div>
              Business that are small but growing in revenues over the past few
              years of operation
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">6. </div>
            <div>
              Businesses that are close to or above the breakeven points in
              their lifecycles
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">7. </div>
            <div>
              Women SGBs are highly encouraged to apply. They are defined as
              SGBs that fulfil the above criteria and are led by / have women
              founders / women in key leadership and decision making roles
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Application Fee / Equity
        </div>
        <div className={`pl-6 flex pt2 text-black hiddenAnimation`}>
          <div className="pr-2">1. </div>
          <div>
            There is no application fees for applying or participating in the
            Greenr Sustainability Accelerator / AAPL Accelerator
          </div>
        </div>
        <div className={`pl-6 flex pt2 text-black hiddenAnimation`}>
          <div className="pr-2">2. </div>
          <div>
            Greenr Sustainability Accelerator / AAPL will not take any equity
            stake in the SGBs applying / selected for the accelerator.
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Application and selection process
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              The application process will be in stages as described below
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">a. </div>
            <div>
              Step 1 - SGB applies on Greenr Sustainability Accelerator / AAPL
              website / mobile application by completing the application form
              available which encompasses providing all data points as outlined
              in the application form, failing which the application will be
              considered as ‘incomplete’ and thereby invalid. Data submitted
              will be considered as verified and a true representative of the
              SGB applying to Greenr Sustainability Accelerator.
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">b. </div>
            <div>
              Step 2 – Shortlisted applicants will be invited Step 2. This will
              entail a one on one video-based interview(s) with the evaluation
              panel, request for additional data points and a site visit to
              SGB’s business and/or operations location(s) (if necessary).
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">c. </div>
            <div>
              Applicants clearing Step 2 of the recruitment process will be
              invited to form part of the Greenr Sustainability Accelerator
              cohort.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">2. </div>
            <div>
              The application process and evaluation criteria will be determined
              by Greenr Sustainability Accelerator / AAPL at its sole
              discretion.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">3. </div>
            <div>
              The Evaluation Panel’s decision will be final. Greenr
              Sustainability Accelerator / AAPL will not disclose any details
              regarding the Evaluation Panel’s assessment of applications except
              where required to do so by law.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Data and confidentiality
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              You will provide Greenr Sustainability Accelerator / AAPL all the
              data required for your application (the Company Data).
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">2. </div>
            <div>
              By agreeing to these Terms and Conditions and providing your
              Company Data, you authorise Greenr Sustainability Accelerator /
              AAPL (including its officers, employees, agents and contractors)
              to use the Company Data and information concerning your business,
              for the purposes of assessing your application, conducting the
              application process, conducting the program and for the research
              objectives of the program, including but not limited to, the
              purposes specified in the Greenr’s privacy policy. The privacy
              policy is available on Greenr’s / AAPL’s website
              https://getgreenr.org
            </div>
          </div>
          <div className={`flex pt2n`}>
            <div className="pr-2">3. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL will only disclose
              Company Data to its officers, employees, agents and contractors
              that need the Company Data to facilitate the Greenr Sustainability
              Accelerator program. When possible, Company Data will be
              anonymized to protect confidentiality. Only Greenr Sustainability
              Accelerator / AAPL staff assigned to the project will have access
              to complete data sets.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">4. </div>
            <div>
              To protect the confidentiality of participating SGBs, all
              contractors engaged by Greenr Sustainability Accelerator / AAPL
              that need access to Company Data will sign a Memorandum of
              Understanding and
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">5. </div>
            <div>
              In addition, all the research staff will have completed the NIH
              Human Subjects certification and field auditors will be required
              to sign a Confidentiality Agreement before starting surveying.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Intellectual property rights
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              You will retain any and all intellectual property rights in your
              Company Data and application.
            </div>
          </div>
        </div>
        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Data Security
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              The project-related data collected from participants will be
              encrypted and kept on the password-protected computers of Greenr
              Sustainability Accelerator / AAPL ( including its officers,
              employees, agents and contractors) assigned to the program and
              study
            </div>
          </div>
          <div className={`flex pt2n`}>
            <div className="pr-2">1. </div>
            <div>
              Personally identifiable information (e.g., name, business name,
              address, contact details, etc.) will be removed from data sets and
              stored in a separate data file. The working data set and the
              personally identifiable data set will be linked via a unique
              identifier, the two files will never be stored or transmitted
              together.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Disqualification
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL reserves the right to
              disqualify any application that is
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">a. </div>
            <div>Incomplete;</div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">b. </div>
            <div>
              Deemed to contain information that is incorrect, misleading or
              fraudulent; or
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">c. </div>
            <div>
              Defamatory, abusive, insulting, threatening, obscene,
              inflammatory, offensive or otherwise contain content which, in
              Greenr Sustainability Accelerator / AAPL’s opinion, is
              inappropriate or objectionable
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Periodic data collection during the tenure of the Greenr program and
          informed consent for the same
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              If you are selected for the Greenr Sustainability Accelerator
              program, you will be required to share data (a predefined set of
              key metrics) to monitor and measure the health and growth of the
              said business, net environmental contribution and impact, as well
              as to measure engagement levels within the Greenr Sustainability
              Accelerator program (Ongoing Company Data). Administrators of the
              Greenr Sustainability Accelerator program will also request you to
              share feedback regarding the ongoing program, support provided by
              the administrators including industry mentors, technical advisors
              and fee-based service providers.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Withdrawal
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              An applicant can decide to withdraw from Greenr Sustainability
              Accelerator / AAPL accelerator program at any stage, provided the
              applicant notifies Greenr Sustainability Accelerator / AAPL 30
              days prior to withdrawing via email and provides detailed reasons
              for its withdrawal from the program.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Limitation of liability
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              Except for any liability that cannot be excluded by law, Greenr
              Sustainability Accelerator / AAPL (including its officers,
              employees and agents) will not be liable for any loss or damage
              whatsoever that is suffered or sustained (including but not
              limited to indirect or consequential loss) or for any death,
              illness, personal injury or property damage suffered or sustained
              (even caused by negligence), as a result of, or in any way
              connected with, this application process, the Company Data or the
              manner in which you conduct your business during your
              participation in the Greenr Sustainability Accelerator accelerator
              program.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">2. </div>
            <div>
              To the extent permitted by law, you agree to release, fully
              indemnify and keep fully indemnified, Greenr Sustainability
              Accelerator / AAPL (including its officers, employees and agents)
              from and against all liability, cost, loss, damage, expense, claim
              or other right of action arising out of, or in connection with,
              the application process, the Company Data or the manner in which
              you conduct your business during your participation in the Greenr
              Sustainability Accelerator accelerator program.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">3. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL accepts no responsibility
              for any problems or technical malfunction of any communication
              network or for any late, lost, incomplete, incorrectly submitted,
              delayed, illegible, corrupted or misdirected applications, claims
              or correspondence whether due to error, omission, alteration,
              tampering, deletion, theft, destruction, transmission
              interruption, communications failure or otherwise.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          No Obligations
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL is not obligated to
              provide financing / funding to the participating SGBs. However,
              Green R / AAPL on a best effort basis is committed to providing
              access to relevant sources of financing and fundraising.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">2. </div>
            <div>
              Participation in the Greenr Sustainability Accelerator accelerator
              does not mean that our program donors and grant providers (IKEA
              Foundation, VISA Foundation, others) are obligated to procure
              products and services from the participating SGBs.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">3. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL will on a best effort
              basis help facilitate market connects for applicants. Greenr
              Sustainability Accelerator / AAPL, however, is not obligated to
              provide/ negotiate any business deals for the participating SGBs.
            </div>
          </div>

          <div className={`flex pt2`}>
            <div className="pr-2">4. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL will facilitate and
              introduce applicants to service providers / vendors (providing
              services such as, but not limited to, chartered accounting,
              intellectual property rights management, design, technology,
              logistics, prototyping,).
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">a. </div>
            <div>
              Should any applicant be interested in onboarding these providers,
              they should do so directly with the provider / vendor on mutually
              agreeable commercial terms
            </div>
          </div>
          <div className={`pl-10 flex pt2 `}>
            <div className="pr-2">b. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL will play no role in
              these commercial relationships
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">5. </div>
            <div>
              Green R / AAPL will also on a best effort basis empanel an
              advisory panel (technical and market) to advise the applicants.
              However, such advice will be succinct and limited to challenges
              affecting the larger applicant pool. While in select cases, we may
              have one to one discussions, this will be at the sole discretion
              of Greenr Sustainability Accelerator / AAPL.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">6. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL and its employees would
              provide business advisory and insights into the your (the SGB’s)
              business. Any business advisory of this manner provided would not
              be binding and not have any legal obligations.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">7. </div>
            <div>
              Provision of the above connects will be on a best effort basis by
              Greenr Sustainability Accelerator / AAPL and will not be binding
              to provide all the services listed above. The services /
              facilitations will be determined by Greenr Sustainability
              Accelerator / AAPL and can be changes by its sole discretion.
            </div>
          </div>
        </div>

        <div className="pt-8 f18 text-shadow text-black font-bold f-secondary hiddenAnimation">
          Miscellaneous
        </div>
        <div className="pl-6 pt2 text-black hiddenAnimation pb20">
          <div className={`flex pt2`}>
            <div className="pr-2">1. </div>
            <div>
              You are responsible for obtaining your own independent legal and
              financial advice regarding these terms and conditions.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">2. </div>
            <div>
              Greenr Sustainability Accelerator / AAPL reserves the right to
              amend these conditions at any time. If any changes are made,
              Greenr Sustainability Accelerator / AAPL will notify the public
              via its website.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">3. </div>
            <div>
              These terms and conditions will be construed according to the laws
              of India and applicants submit to the exclusive jurisdiction of
              the courts of India .
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">4. </div>
            <div>
              Failure by Greenr Sustainability Accelerator / AAPL to enforce any
              of its rights at any stage does not constitute a waiver of those
              rights.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">5. </div>
            <div>
              If any of these terms are held to be invalid, unenforceable or
              illegal for any reason, the remaining terms shall nevertheless
              continue in full force.
            </div>
          </div>
          <div className={`flex pt2`}>
            <div className="pr-2">6. </div>
            <div>
              Nothing in these terms and conditions is to be interpreted against
              Greenr Sustainability Accelerator / AAPL solely on the grounds
              that Greenr Sustainability Accelerator/ AAPL put forward these
              terms and conditions or any part of them.
            </div>
          </div>
        </div>

        <div className="grid-container"></div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
