import createService from "./http-service";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
}

export interface GameResponse {
  results: Game[];
}

export default createService<Game, GameResponse>("games");
