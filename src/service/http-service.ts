import axios, { AxiosRequestConfig } from "axios";
import apiClient from "./http-client";

class HttpService<T, RT> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll(requestConfig?: AxiosRequestConfig) {
    const request = apiClient.get<RT>(this.endPoint, requestConfig);

    return request;
  }
}

export default function createService<T, RT>(endPoint: string) {
  return new HttpService<T, RT>(endPoint);
}
