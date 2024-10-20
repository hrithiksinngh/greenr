import React, { useState } from 'react';
import Card from '../card/card';
import {
  UseCohortOneData,
  UseCohortTwoData,
  UseCohortThreeData,
} from '../../utils/portfolioCarouselData';

const Tabset = props => {
  const cohortDataWhenLoading = [
    [
      '...', // 0
      '...', // 1
      '', // 2 - insert default loading img url here
      '', // 3 - leave empty
      '', // 4 - leave empty
    ],
  ];

  const { isLoading: isLoadingChohortOne, data: cohortOne } =
    UseCohortOneData();
  const cohort1 = cohortOne ? cohortOne.data.response : cohortDataWhenLoading;

  const { isLoading: isLoadingChohortTwo, data: cohortTwo } =
    UseCohortTwoData();
  const cohort2 = cohortTwo ? cohortTwo.data.response : cohortDataWhenLoading;

  const { isLoading: isLoadingChohortThree, data: cohortThree } =
    UseCohortThreeData();
  const cohort3 = cohortThree
    ? cohortThree.data.response
    : cohortDataWhenLoading;

  const [cohort1Size, setCohort1Size] = useState(4);
  const [cohort2Size, setCohort2Size] = useState(4);
  const [cohort3Size, setCohort3Size] = useState(4);

  const tempCohort1 = cohort1 && cohort1.slice(0, cohort1Size);
  const tempCohort2 = cohort2 && cohort2.slice(0, cohort2Size);
  const tempCohort3 = cohort3 && cohort3.slice(0, cohort3Size);

  const isLoading =
    isLoadingChohortOne && isLoadingChohortTwo && isLoadingChohortThree;

  const [selected, setSelected] = useState('cohort1');
  return (
    <>
      <div className="flex flex-row">
        <div
          className={
            selected === 'cohort1'
              ? 'bg-white text-lg text-[#6b9080] p-3 font-bold cursor-pointer'
              : 'bg-gray-50 text-lg text-slate-500 p-3 font-normal cursor-pointer'
          }
          onClick={() => setSelected('cohort1')}
        >
          Cohort 1
        </div>
        <div
          className={
            selected === 'cohort2'
              ? 'bg-white text-lg text-[#6b9080] p-3 font-bold ml-3 cursor-pointer'
              : 'bg-gray-50 text-lg text-slate-500 p-3 font-normal ml-3 cursor-pointer'
          }
          onClick={() => setSelected('cohort2')}
        >
          Cohort 2
        </div>
        <div
          className={
            selected === 'cohort3'
              ? 'bg-white text-lg text-[#6b9080] p-3 font-bold ml-3 cursor-pointer'
              : 'bg-gray-50 text-lg text-slate-500 p-3  font-normal ml-3 cursor-pointer'
          }
          onClick={() => setSelected('cohort3')}
        >
          Cohort 3
        </div>
      </div>
      {selected === 'cohort2' ? (
        <div className="w-full bg-white py-4 px-8 rounded-tr-lg rounded-br-lg rounded-bl-lg">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {tempCohort2 &&
              tempCohort2.map((profile, i) => (
                <Card
                  key={`ch2_card_${i}`}
                  cardTitle={profile[0]}
                  cardDesc={profile[1]}
                  cardImg={profile[2]}
                  cardTwitterLink={profile[3]}
                  cardLinkdnLink={profile[4]}
                />
              ))}
          </div>
          <div className="flex justify-center">
            <span
              className={
                'viewMoreBtn mt30 text-white font-semibold py-2 px-4 rounded large' +
                (cohort2 && cohort2.length > 4
                  ? ' hover:scale-105 hover:cursor-pointer'
                  : ' opacity-50')
              }
              onClick={() => {
                if (tempCohort2 && tempCohort2.length === cohort2.length) {
                  setCohort2Size(4);
                } else {
                  setCohort2Size(cohort2.length);
                }
              }}
            >
              {cohort2 &&
              cohort2.length > 4 &&
              cohort2 &&
              cohort2.length === tempCohort2.length
                ? 'View Less'
                : 'View More'}
            </span>
          </div>
        </div>
      ) : selected === 'cohort3' ? (
        <div className="w-full bg-white py-4 px-8 rounded-tr-lg rounded-br-lg rounded-bl-lg">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {tempCohort3 &&
              tempCohort3.map((profile, i) => (
                <Card
                  key={`ch3_card_${i}`}
                  cardTitle={profile[0]}
                  cardDesc={profile[1]}
                  cardImg={profile[2]}
                  cardTwitterLink={profile[3]}
                  cardLinkdnLink={profile[4]}
                />
              ))}
          </div>
          <div className="flex justify-center">
            <span
              className={
                'viewMoreBtn mt30 text-white font-semibold py-2 px-4 rounded large' +
                (cohort3 && cohort3.length > 4
                  ? ' hover:scale-105 hover:cursor-pointer'
                  : ' opacity-50')
              }
              onClick={() => {
                if (tempCohort3.length === cohort3.length) {
                  setCohort3Size(4);
                } else {
                  setCohort3Size(cohort3.length);
                }
              }}
            >
              {cohort3 &&
              cohort3.length > 4 &&
              cohort3.length === tempCohort3.length
                ? 'View Less'
                : 'View More'}
            </span>
          </div>
        </div>
      ) : (
        <div className="w-full bg-white py-4 px-8 rounded-tr-lg rounded-br-lg rounded-bl-lg">
          <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {tempCohort1 &&
              tempCohort1.map((profile, i) => (
                <Card
                  key={`ch1_card_${i}`}
                  cardTitle={profile[0]}
                  cardDesc={profile[1]}
                  cardImg={profile[2]}
                  cardTwitterLink={profile[3]}
                  cardLinkdnLink={profile[4]}
                />
              ))}
          </div>
          <div className="flex justify-center">
            <span
              className={
                'viewMoreBtn mt30 text-white font-semibold py-2 px-4 rounded large' +
                (cohort1 && cohort1.length > 4
                  ? ' hover:scale-105 hover:cursor-pointer'
                  : ' opacity-50')
              }
              onClick={() => {
                if (tempCohort1 && tempCohort1.length === cohort1.length) {
                  setCohort1Size(4);
                } else {
                  setCohort1Size(cohort1.length);
                }
              }}
            >
              {cohort1 &&
              cohort1.length > 4 &&
              cohort1 &&
              cohort1.length === tempCohort1.length
                ? 'View Less'
                : 'View More'}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default Tabset;
