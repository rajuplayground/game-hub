import { Axios, AxiosRequestConfig } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface GameQuery {
  genre: Genre | null;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
