import createService from "./http-service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export interface GenreResponse {
  results: Genre[];
}

export default createService<Genre, GenreResponse>("genres");
