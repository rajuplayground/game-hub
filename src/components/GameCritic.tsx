import React from "react";
import { Game } from "../service";
import clsx from "clsx";

interface Props {
  game: Game;
}

const GameCritic = ({ game }: Props) => {
  return (
    <p
      className={clsx(
        "font-semibold text-sm px-2 rounded-md dark:bg-opacity-40 dark:text-green-300 bg-green-200 dark:bg-green-800",
        game.metacritic < 90 &&
          "dark:text-yellow-300 bg-yellow-200 dark:bg-yellow-800",
        game.metacritic < 50 && "dark:text-red-300 bg-red-200 dark:bg-red-800"
      )}
    >
      {game.metacritic}
    </p>
  );
};

export default GameCritic;
