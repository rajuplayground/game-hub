import { useEffect, useState } from "react";
import thumbsUp from "../assets/thumbs-up.webp";
import { Game, GameService } from "../service";
import MainFilters from "./MainFilters";
import GamesGrid from "./GamesGrid";

interface Props {
  genre: number | null;
  search: string;
}

const MainContent = ({ genre = 0, search = "" }: Props) => {
  const [games, setGames] = useState<Game[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [platform, setPlatform] = useState(0);
  const [orderBy, setOrderBy] = useState("");

  useEffect(() => {
    setLoading(true);
    let paramsStr = "";
    if (genre != 0) {
      paramsStr += `&genres=${genre}`;
    }
    if (platform != 0) {
      paramsStr += `&parent_platforms=${platform}`;
    }
    if (orderBy != "") {
      paramsStr += `&ordering=${orderBy}`;
    }
    if (search != "") {
      paramsStr += `&search=${search}`;
    }
    GameService.getAll(paramsStr)
      .then((response) => {
        setGames(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [genre, platform, orderBy, search]);

  console.log(games);

  const selectPlatform = (id: number) => {
    setPlatform(id);
  };

  const selectOrder = (order: string) => {
    setOrderBy(order);
  };

  return (
    <div className="flex-1">
      <h1 className="font-bold text-5xl dark:text-white">Games</h1>
      <div className="h-[20px]"></div>
      <MainFilters selectPlatform={selectPlatform} selectOrder={selectOrder} />
      <div className="h-[20px]"></div>
      <div>
        {isLoading && (
          <svg
            width="30"
            height="30"
            viewBox="0 0 135 135"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-neutral-700 dark:fill-neutral-300"
          >
            <path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="-360 67 67"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </path>
            <path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 67 67"
                to="360 67 67"
                dur="8s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        )}
        <GamesGrid games={games} />
      </div>
    </div>
  );
};

export default MainContent;
