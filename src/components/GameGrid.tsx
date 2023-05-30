import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../hooks/useGames";
import React from "react";
import useGameQuery from "../hooks/useGameQuery";

const GameGrid = () => {
  const gameQuery = useGameQuery();
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  const pages = data?.pages;

  console.log(pages);

  return (
    <div>
      <GameCardContainer>
        {error && <p>{error}</p>}
        {isLoading && skeletons.map((s) => <SkeletonCard key={s} />)}
        {pages &&
          pages.map((page, index) => {
            return (
              <React.Fragment key={index}>
                {page.results.map((game) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </React.Fragment>
            );
          })}
      </GameCardContainer>
      <button onClick={() => fetchNextPage()}>
        {" "}
        {isFetchingNextPage
          ? "Loading more..."
          : hasNextPage
          ? "Load More"
          : "Nothing more to load"}
      </button>
    </div>
  );
};

export default GameGrid;
