import { useEffect, useState } from "react";
import { Genre, GenreService } from "../service";

interface Props {
  selectGenre: (id: number) => void;
}

const MainSidebar = ({ selectGenre }: Props) => {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    GenreService.getAll().then((response) => setGenres(response.data.results));
  }, []);

  const handleGenre = (id: number) => {
    selectGenre(id);
  };

  return (
    <div className="w-[250px] space-y-3 hidden lg:block">
      <h2 className="text-2xl font-bold dark:text-white">Genres</h2>
      {genres.length > 0 && (
        <ul className="space-y-3">
          {genres.map((genre) => {
            return (
              <li key={genre.id}>
                <a
                  onClick={() => handleGenre(genre.id)}
                  className="cursor-pointer hover:underline flex items-center gap-2 font-thin text-neutral-500 dark:text-neutral-200"
                >
                  <img
                    src={genre.image_background}
                    alt=""
                    className="w-[32px] aspect-square object-cover rounded-md"
                  />
                  <span>{genre.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default MainSidebar;
