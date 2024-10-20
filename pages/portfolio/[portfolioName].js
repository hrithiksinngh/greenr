import { useRouter } from 'next/router';
import PortfolioDetail from '../../components/portfolio/portfolioDetail';

const PortfolioItem = () => {
  const router = useRouter();
  const { portfolioName } = router.query;

  return (
    <div>
      <PortfolioDetail />
    </div>
  );
};

export default PortfolioItem;

