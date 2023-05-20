import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import SkeletonCard from "./GameSkeleton";
import GameCardContainer from "./GameCardContainer";
import { GameQuery } from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];

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
