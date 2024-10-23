import { useRouter } from 'next/router';
import PortfolioDetail from '../../components/portfolio/portfolioDetail';
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

const PortfolioItem = () => {
  const router = useRouter();
  const { portfolioName } = router.query;

  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <PortfolioDetail portfolioName={portfolioName} />
      </div>
    </QueryClientProvider>
  );
};

export default PortfolioItem;

