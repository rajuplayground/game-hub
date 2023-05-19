import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data: genres, error, isLoading } = useGenres();

  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold dark:text-white">Genres</h2>
      {genres.length > 0 && (
        <ul className="space-y-3">
          {genres.map((genre) => {
            return (
              <li key={genre.id}>
                <a
                  onClick={() => console.log(genre.id)}
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

export default GenreList;
