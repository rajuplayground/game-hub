import { Genre } from "../service/GenreService";
import { Platform } from "../service/PlatformService";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import gameService from "../service/GameService";
import useGameQuery from "./useGameQuery";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

const useGames = () => {
  const { gameQuery } = useGameQuery();

  return useInfiniteQuery({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) => {
      return gameService.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      });
    },
    getNextPageParam: (lastPage, pages) => {
      return lastPage.next ? pages.length + 1 : undefined;
    },
  });
};

export default useGames;
