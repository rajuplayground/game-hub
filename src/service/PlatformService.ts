import createInstance from "./http-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default createInstance<Platform>("/platforms/lists/parents");
