import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import TeamsSection from "../components/Teams/Teams";
const queryClient = new QueryClient();
const Teams = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TeamsSection />
    </QueryClientProvider>
  );
};

export default Teams;
