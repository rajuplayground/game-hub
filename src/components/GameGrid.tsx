import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./GameSkeleton";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  console.log(isLoading);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {error && <p>{error}</p>}
      {isLoading && skeletons.map((s) => <SkeletonCard key={s} />)}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GameGrid;
