import createInstance from "./http-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

export default createInstance<Genre>("/genres");
