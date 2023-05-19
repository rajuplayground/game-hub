import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log(isLoading);
  return (
    <GameCardContainer>
      {error && <p>{error}</p>}
      {isLoading && skeletons.map((s) => <SkeletonCard key={s} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </GameCardContainer>
  );
};

export default GameGrid;
