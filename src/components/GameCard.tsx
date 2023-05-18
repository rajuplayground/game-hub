import bullsEye from "../assets/bulls-eye.webp";
import { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <div
      key={game.id}
      className="bg-white border border-gray-200 rounded-lg shadow dark:bg-neutral-800 dark:border-neutral-700"
    >
      <img className="rounded-t-lg w-full" src={game.background_image} alt="" />
      <div className="p-5">
        <div className="flex justify-between mb-2 items-center">
          <div className="flex gap-2">platforms</div>
          <p className="font-semibold text-sm dark:text-green-300 bg-green-200 px-2 rounded-md dark:bg-green-800 dark:bg-opacity-40">
            {game.metacritic}
          </p>
        </div>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {game.name}
        </h5>
        <div>
          <img
            src={bullsEye}
            alt=""
            className="w-10 aspect-square object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
