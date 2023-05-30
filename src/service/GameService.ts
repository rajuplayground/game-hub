import createInstance from "./http-client";
import { Platform } from "./PlatformService";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

export default createInstance<Game>("/games");
