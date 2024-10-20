import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchTeamsData = () => {
  return axios.get(`https://server2.getgreenr.org/api/user`);
};

const fetchOurPartner = () => {
  return axios.get(
    `https://server2.getgreenr.org/api/user/logo/index/partner-logo`
  );
};

const fetchWeAreFamous = () => {
  return axios.get(`https://server2.getgreenr.org/api/user/logo/we-are-famous`);
};

export const UseTeamsData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["user-hero", heroId], fetchTeamsData, {
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

export const UseOurPartnerData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["ourPartner", heroId], fetchOurPartner, {
    initialData: () => {
      const data = queryClient
        .getQueryData("our-partners")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseWeAreFamousData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["weFamous", heroId], fetchWeAreFamous, {
    initialData: () => {
      const data = queryClient
        .getQueryData("we-famous")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};
