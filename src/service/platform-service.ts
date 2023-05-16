import createService from "./http-service";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformResponse {
  results: Platform[];
}

export default createService<Platform, PlatformResponse>(
  "platforms/lists/parents"
);
