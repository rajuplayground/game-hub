import { useQuery } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "c2944114329d40c899f72ec47444572f",
  },
});

interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

class ApiClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll = (requestConfig?: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endPoint, { ...requestConfig })
      .then((res) => res.data);
  };
}

export default function createInstance<T>(endPoint: string) {
  return new ApiClient<T>(endPoint);
}
