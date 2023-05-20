import { useState } from "react";
import { GameGrid, MainHeader, GenreList } from "./components";
import { GameQuery } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
  });

  const selectSearch = (query: string) => {
    // setSearch(query);
  };

  const selectGenre = (genre: Genre) => {
    setGameQuery((q) => {
      return { ...q, genre };
    });
  };

  return (
    <div>
      <MainHeader selectSearch={selectSearch} />
      <main className="px-4 flex items-baseline">
        <div className="w-[250px] hidden lg:block">
          <GenreList selectGenre={selectGenre} />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-5xl dark:text-white">Games</h1>
          <div className="h-[20px]"></div>
          <div className="h-[20px]"></div>
          <div>
            <GameGrid gameQuery={gameQuery} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
