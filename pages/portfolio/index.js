import { useEffect } from "react";
import SecondaryCard from "../../components/carouselSlide/carouselSlide";
import Tabset from "../../components/tabset/tabset";
import Title from "../../components/title/title";
import animation from "../../utils/animation";
import { QueryClientProvider, QueryClient } from "react-query";
import CarouselOne from "../../components/carousel/carousel";
import MainPortfolio from "../../components/portfolio/portfolio";
import ProductListing from "../../components/portfolio/newPortfolio";
const queryClient = new QueryClient();

const Portfolio = () => {
  useEffect(() => {
    animation.afterCallback(
      new IntersectionObserver(
        animation.instersectioOberserverCallback,
        animation.rootMargin
      )
    );
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="grid-main-container pt60 mb60">
          {/* <MainPortfolio /> */}
          <ProductListing />
        </div>
      </QueryClientProvider>
    </>
  );
};

export default Portfolio;
