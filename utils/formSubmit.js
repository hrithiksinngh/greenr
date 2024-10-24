import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

const postFormData = (data) => {
  return axios.post(`https://server2.getgreenr.org/api/submit-form`, data);
};

export const UsePostFormData = () => {
  return useMutation(postFormData);
};
