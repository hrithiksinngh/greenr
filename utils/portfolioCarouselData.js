import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchPortfolioData = (data) => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio`);
};

const fetchCohortOneData = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/cohort-one`);
};
const fetchCohortTwoData = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/cohort-two`);
};
const fetchCohortThreeData = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/cohort-three`);
};

export const UsePortfolioData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["userHero", heroId], fetchPortfolioData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("user-heroes")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseCohortOneData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["cohortOne", heroId], fetchCohortOneData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("user-heroes")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseCohortTwoData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["cohortTwo", heroId], fetchCohortTwoData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("user-heroes")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseCohortThreeData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["cohortThree", heroId], fetchCohortThreeData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("user-heroes")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};
