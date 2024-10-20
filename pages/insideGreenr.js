import React from "react";
import InsideGreenrPage from "../components/Index/InsideGreenrPage";

import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
const InsideGreenr = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <InsideGreenrPage />
    </QueryClientProvider>
  );
};

export default InsideGreenr;
