import { useQuery, useQueryClient } from "react-query";
import axios from "axios";

const fetchOurWinsData = () => {
  return axios.get(`https://server2.getgreenr.org/api/our-wins`);
};

const fetchSectorImageData = () => {
  return axios.get(`https://server2.getgreenr.org/api/sector-image`);
};

const fetchGoogleFormLink = () => {
  return axios.get(`https://server2.getgreenr.org/api/application-form-link`);
};
const fetchInsideGreenrTimeLine = () => {
  return axios.get(`https://server2.getgreenr.org/api/inside-greenr-timeline`);
};

export const UseOurWinsData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["ourWins", heroId], fetchOurWinsData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("ourWins")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseSectorImageData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["sectorImage", heroId], fetchSectorImageData, {
    initialData: () => {
      const data = queryClient
        .getQueryData("sectorImage")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseGoogleFormLinkData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["googleFormLink", heroId], fetchGoogleFormLink, {
    initialData: () => {
      const data = queryClient
        .getQueryData("googleFormLink")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

export const UseInsideGreenrTimeLineData = (heroId) => {
  const queryClient = useQueryClient();
  return useQuery(["insideGreenrTimeLine", heroId], fetchInsideGreenrTimeLine, {
    initialData: () => {
      const data = queryClient
        .getQueryData("insideGreenrTimeLine")
        ?.data?.find((data) => data.id === parseInt(heroId));
      if (data) {
        return { data: data };
      } else {
        return undefined;
      }
    },
  });
};

