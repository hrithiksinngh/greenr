import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import AboutUs from "../components/AboutUs/aboutUs";
const queryClient = new QueryClient();

const About = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AboutUs />
    </QueryClientProvider>
  );
};

export default About;
