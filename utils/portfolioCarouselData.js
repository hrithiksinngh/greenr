import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchPortfolioData = (data) => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio`);
};

const fetchPortfolioDataResponse = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/portfolio-response`);
};

const fetchStatesAndUtsDataResponse = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/states-and-ut`);
};

const fetchFoundersCarouselData = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/founders-carousel`);
};

const fetchSectorsIncludedData = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/sectors-include`);
};

const fetchEntrepreneurWinsTestimonials = () => {
  return axios.get(`https://server2.getgreenr.org/api/portfolio/entrepreneur-wins-testimonials`);
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

export const UseOurPortfolioData = () => {
  const queryClient = useQueryClient();
  return useQuery(["ourPortfolio"], fetchPortfolioDataResponse, {
    initialData: () => {
      const data = queryClient
        .getQueryData("ourPortfolio")
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseFoundersCarouselData = () => {
  const queryClient = useQueryClient();
  return useQuery(["foundersCarousel"], fetchFoundersCarouselData, {
    initialData: () => {
      const data = queryClient.getQueryData("foundersCarousel");
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    }
  });
};

export const UseSectorsIncludedData = () => {
  const queryClient = useQueryClient();
  return useQuery(["sectorsIncluded"], fetchSectorsIncludedData, {
    initialData: () => {
      const data = queryClient.getQueryData("sectorsIncluded");
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    }
  });
};

export const UseEntrepreneurWinsTestimonials = () => {
  const queryClient = useQueryClient();
  return useQuery(["entrepreneurWinsTestimonials"], fetchEntrepreneurWinsTestimonials, {
    initialData: () => {
      const data = queryClient.getQueryData("entrepreneurWinsTestimonials");
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    }
  });
};

export const UseStatesAndUtsData = () => {
  const queryClient = useQueryClient();
  return useQuery(["statesAndUtsData"], fetchStatesAndUtsDataResponse, {
    initialData: () => {
      const data = queryClient.getQueryData("statesAndUts");
    //   return {
    //     "response": [
    //         "Andhra Pradesh",
    //         "Arunachal Pradesh",
    //         "Assam",
    //         "Bihar",
    //         "Chhattisgarh",
    //         "Goa",
    //         "Gujarat",
    //         "Haryana",
    //         "Himachal Pradesh",
    //         "Jharkhand",
    //         "Karnataka",
    //         "Kerala",
    //         "Madhya Pradesh",
    //         "Maharashtra",
    //         "Manipur",
    //         "Meghalaya",
    //         "Mizoram",
    //         "Nagaland",
    //         "Odisha",
    //         "Punjab",
    //         "Rajasthan",
    //         "Sikkim",
    //         "Tamil Nadu",
    //         "Telangana",
    //         "Tripura",
    //         "Uttar Pradesh",
    //         "Uttarakhand",
    //         "West Bengal",
    //         "Andaman and Nicobar Islands",
    //         "Chandigarh",
    //         "Dadra and Nagar Haveli and Daman and Diu",
    //         "Lakshadweep",
    //         "Delhi",
    //         "Puducherry",
    //         "Ladakh",
    //         "Jammu and Kashmir"
    //     ]
    // }
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    }
  });
};