import axios from "axios";
import apiClient from "./http-client";

class HttpService<T, RT> {
  endPoint: string;
  key: string = "c2944114329d40c899f72ec47444572f";

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }

  getAll(params: string = "") {
    const request = apiClient.get<RT>(
      `${this.endPoint}?key=${this.key}${params != "" ? params : ""}`
    );

    return request;
  }
}

export default function createService<T, RT>(endPoint: string) {
  return new HttpService<T, RT>(endPoint);
}
