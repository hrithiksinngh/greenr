import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

const postFormData = (data) => {
  return axios.post(`https://server2.getgreenr.org/api/submit-form`, data);
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


export const UsePostFormData = () => {
  return useMutation(postFormData);
};
