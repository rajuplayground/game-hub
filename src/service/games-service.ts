import createService from "./http-service";
import { Platform } from "./PlatformService";

interface ParentPlatform {
  platform: Platform;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: ParentPlatform[];
}

export interface GameResponse {
  results: Game[];
}

export default createService<Game, GameResponse>("/games");
