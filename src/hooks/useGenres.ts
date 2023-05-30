import { useQuery } from "@tanstack/react-query";
import genreService from "../service/GenreService";
import { GENRES_CACHE_KEY } from "../utilities/constants";

const useGenres = () => {
  return useQuery({
    queryKey: GENRES_CACHE_KEY,
    queryFn: genreService.getAll,
  });
};

export default useGenres;
