import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import IndexPage from "../components/Index/IndexPage";
const queryClient = new QueryClient();

const Home = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <IndexPage />
    </QueryClientProvider>
  );
};

export default Home;
