import React from 'react';
import CarouselSlide from '../carouselSlide/carouselSlide';
import { UsePortfolioData } from '../../utils/portfolioCarouselData';
import { Carousel } from 'flowbite-react';
const CarouselOne = () => {
  let { isLoading, data: userHero } = UsePortfolioData();
  const portfolioData = userHero
    ? userHero.data.response
    : [
        [
          '...', // 0
          '...', // 1
          '', // 2 - insert default loading img url here
          '...', // 3
          '', // 4 - leave empty
          '', // 5 - leave empty
        ],
      ];

  return (
    <>
      <div>
        {true ? (
          <div className="h-[40rem] sm:h-[40rem] xl:h-96 2xl:h-96">
            <Carousel leftControl={true} rightControl={true}>
              {portfolioData &&
                portfolioData.map((carouselProfile, i) => (
                  <div
                    key={`card_${i}`}
                    className={'float-left w-full ' + (i === 0 ? 'active' : '')}
                  >
                    <div className="grid-main-container">
                      <div className="grid-container">
                        <div className="grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0">
                          <CarouselSlide
                            order={i}
                            secondaryCardTitle={carouselProfile[0]}
                            secondaryCardDesc={carouselProfile[1]}
                            secondaryCardImg={carouselProfile[2]}
                            secondaryCardTwitter={carouselProfile[4]}
                            secondaryCardLinkdln={carouselProfile[5]}
                            secondardRefText={carouselProfile[3]}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </Carousel>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default CarouselOne;
