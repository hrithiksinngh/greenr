import Desc from "../../desc/desc";
import Title from "../../title/title";
import React, { useState } from "react";
const VerticleTabset = (props) => {
  // let { tabsetData, tabContentList } = props;

  let basicFinance =
    '<ul className="pb-6 ml-4"><li className="pl-2">Accounting concepts and conventions</li><li className="pl-2">Financial statements: Income statement, Balance Sheet and Cash flow statement</li><li className="pl-2">Cash-flow analysis</li><li className="pl-2">Understanding Ratios</li></ul>';
  let understandingFinancialInstruments =
    '<ul className="pb-6 ml-4"><li className="pl-2">Understanding Debt as funding source and types of Debts and structure</li><li className="pl-2">Understanding Revenue and Profitability wrt to Interest Rates and Cost of Funds</li><li className="pl-2">Understanding Capex investment</li><li className="pl-2">Capex Investment on Balance sheet.</li></ul>';
  let salesAndMarketing =
    '<ul className="pb-6 ml-4"><li className="pl-2">Assess segmentation and targeting and what they mean for your brand</li><li className="pl-2">Develop a brand position that sets you apart from the competition</li><li className="pl-2">Establish brand touchpoints for engagement especially online</li><li className="pl-2">How to build a powerful brand portfolio Managing the existing customers for growth</li><li className="pl-2">Creating Marketing plans</li><li className="pl-2">Decision between going Direct or Indirect</li><li className="pl-2">Choosing the right channel partners and Managing them to achieve the sales results</li><li className="pl-2">Managing the Life Cycle of Channel Partners</li><li className="pl-2">Evolving annual Channel Sales Plan</li></ul>';
  let productDevelopment =
    '<ul className="pb-6 ml-4"><li className="pl-2">Understand the strategic role of Product Management</li><li className="pl-2">How to envision a new product and strategy?</li><li className="pl-2">Understanding the lifecycle of Product Development</li><li className="pl-2">Understand the basic technical know-how needed for a product manager</li><li className="pl-2">Optimization for Growth</li></ul>';
  let environmentalImpact =
    '<ul className="pb-6 ml-4"><li className="pl-2">Understanding WASTE concept</li><li className="pl-2">Understanding Environment impact flowchart</li><li className="pl-2">Understanding ESG</li><li className="pl-2">Opportunities for Innovation in these specific Industries</li></ul>';
  let hr =
    '<ul className="pb-6 ml-4"><li className="pl-2">Aligning manpower plans to HR strategy</li><li className="pl-2">Role of Human Resources as an enabler</li><li className="pl-2">Trends in Recruitment and upskilling</li><li className="pl-2">Understanding compensation Structures</li></ul>';

  const [showTabOne, setShowTabOne] = useState(true);
  const [showTabTwo, setShowTabTwo] = useState(false);
  const [showTabThree, setShowTabThree] = useState(false);
  const [showTabFour, setShowTabFour] = useState(false);
  const [showTabFive, setShowTabFive] = useState(false);
  const [showTabSix, setShowTabSix] = useState(false);

  return (
    <>
      <div className="grid pt40 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0 md:gap-10 flex items-start">
        <ul className="mr-4 flex list-none flex-col flex-wrap pl-0">
          <li className="flex-grow text-center nav-item border-b-2 border-slate-100 hover:bg-gray-100">
            <a
              // href="#tabs-basicFinance1"
              className={
                showTabOne === true
                  ? "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate font-bold bg-[#eaf4f4] cursor-pointer"
                  : "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate cursor-pointer"
              }
              onClick={() => {
                setShowTabOne(true);
                setShowTabTwo(false);
                setShowTabThree(false);
                setShowTabFour(false);
                setShowTabFive(false);
                setShowTabSix(false);
              }}
            >
              Basic Finance
            </a>
          </li>
          <li className="flex-grow text-center nav-item border-b-2 border-slate-100 hover:bg-gray-100">
            <a
              // href="#tabs-understandingFinancialInstruments2"
              className={
                showTabTwo === true
                  ? "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate font-bold bg-[#eaf4f4] cursor-pointer"
                  : "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate cursor-pointer"
              }
              onClick={() => {
                setShowTabOne(false);
                setShowTabTwo(true);
                setShowTabThree(false);
                setShowTabFour(false);
                setShowTabFive(false);
                setShowTabSix(false);
              }}
            >
              Understanding Financial Instruments
            </a>
          </li>
          <li
            role="presentation"
            className="flex-grow text-center nav-item border-b-2 border-slate-100 hover:bg-gray-100"
          >
            <a
              // href="#tabs-salesMarketing3"
              className={
                showTabThree === true
                  ? "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate font-bold bg-[#eaf4f4] cursor-pointer"
                  : "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate cursor-pointer"
              }
              onClick={() => {
                setShowTabOne(false);
                setShowTabTwo(false);
                setShowTabThree(true);
                setShowTabFour(false);
                setShowTabFive(false);
                setShowTabSix(false);
              }}
            >
              Sales & Marketing
            </a>
          </li>
          <li
            role="presentation"
            className="flex-grow text-center nav-item border-b-2 border-slate-100 hover:bg-gray-100"
          >
            <a
              className={
                showTabFour === true
                  ? "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate font-bold bg-[#eaf4f4] cursor-pointer"
                  : "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate cursor-pointer"
              }
              onClick={() => {
                setShowTabOne(false);
                setShowTabTwo(false);
                setShowTabThree(false);
                setShowTabFour(true);
                setShowTabFive(false);
                setShowTabSix(false);
              }}
            >
              Product Development
            </a>
          </li>
          <li
            role="presentation"
            className="flex-grow text-center nav-item border-b-2 border-slate-100 hover:bg-gray-100"
          >
            <a
              // href="#tabs-environmentalImpact5"
              className={
                showTabFive === true
                  ? "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate font-bold bg-[#eaf4f4] cursor-pointer"
                  : "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate cursor-pointer"
              }
              onClick={() => {
                setShowTabOne(false);
                setShowTabTwo(false);
                setShowTabThree(false);
                setShowTabFour(false);
                setShowTabFive(true);
                setShowTabSix(false);
              }}
            >
              Environmental Impact
            </a>
          </li>
          <li
            role="presentation"
            className="flex-grow text-center nav-item hover:bg-gray-100"
          >
            <a
              // href="#tabs-hr6"
              className={
                showTabSix === true
                  ? "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate font-bold bg-[#eaf4f4] cursor-pointer"
                  : "block font-regular leading-tight px-6 hover:border-transparent focus:border-transparent text-base py-6 smPy3  border-transparent hover:isolate focus:isolate cursor-pointer"
              }
              onClick={() => {
                setShowTabOne(false);
                setShowTabTwo(false);
                setShowTabThree(false);
                setShowTabFour(false);
                setShowTabFive(false);
                setShowTabSix(true);
              }}
            >
              HR
            </a>
          </li>
        </ul>
        <div className="tab-content">
          {showTabTwo === true ? (
            <div className="transition-opacity duration-150 ease-linear">
              <Title title={"Syllabus"} externalClass={`f28 pb10`} />
              <hr className="mt30 pb40"></hr>
              <Desc
                externalClass={`text-slate-600 my-auto text-base`}
                desc={understandingFinancialInstruments}
              />
            </div>
          ) : showTabThree === true ? (
            <div className=" transition-opacity duration-150 ease-linear ">
              <Title title={"Syllabus"} externalClass={`f28 pb10 `} />
              <hr className="mt30 pb40 "></hr>
              <Desc
                externalClass={`text-slate-600 my-auto text-base `}
                desc={salesAndMarketing}
              />
            </div>
          ) : showTabFour === true ? (
            <div className=" transition-opacity duration-150 ease-linear ">
              <Title title={"Syllabus"} externalClass={`f28 pb10 `} />
              <hr className="mt30 pb40 "></hr>
              <Desc
                externalClass={`text-slate-600 my-auto text-base `}
                desc={productDevelopment}
              />
            </div>
          ) : showTabFive === true ? (
            <div className="transition-opacity duration-150 ease-linear ">
              <Title title={"Syllabus"} externalClass={`f28 pb10`} />
              <hr className="mt30 pb40"></hr>
              <Desc
                externalClass={`text-slate-600 my-auto text-base`}
                desc={environmentalImpact}
              />
            </div>
          ) : showTabSix === true ? (
            <div className="transition-opacity duration-150 ease-linear">
              <Title title={"Syllabus"} externalClass={`f28 pb10`} />
              <hr className="mt30 pb40"></hr>
              <Desc
                externalClass={`text-slate-600 my-auto text-base`}
                desc={hr}
              />
            </div>
          ) : (
            <div className="transition-opacity duration-150 ease-linear ">
              <Title title={"Syllabus"} externalClass={`f28 pb10`} />
              <hr className="mt30 pb40"></hr>
              <Desc
                externalClass={`text-slate-600 my-auto text-base`}
                desc={basicFinance}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerticleTabset;
