import React, { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";
import useGameQuery from "../hooks/useGameQuery";

const GenreList = () => {
  const { gameQuery, setGenre } = useGameQuery();
  const { data, error, isLoading } = useGenres();

  const genres = data?.results;

  const handeSelect = (genre: Genre) => {
    setGenre(genre);
  };

  if (error) return <p>{error}</p>;
  if (isLoading) return <FaSpinner className="animate-spin" />;
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-bold dark:text-white">Genres</h2>
      {genres.length > 0 && (
        <ul className="space-y-3">
          {genres.map((genre) => {
            return (
              <li key={genre.id}>
                <a
                  onClick={() => handeSelect(genre)}
                  className={clsx(
                    "cursor-pointer hover:underline flex items-center gap-2 font-thin text-neutral-500 dark:text-neutral-200",
                    genre.id === gameQuery.genre?.id && "underline"
                  )}
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
