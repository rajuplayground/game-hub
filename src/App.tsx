import { useState } from "react";
import { GameGrid, MainHeader, GenreList, GameFilters } from "./components";
import { GameQuery } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const selectSearch = (searchText: string) => {
    setGameQuery((q) => {
      return { ...q, searchText };
    });
  };

  const selectGenre = (genre: Genre) => {
    setGameQuery((q) => {
      return { ...q, genre };
    });
  };

  const selectOrder = (sortOrder: string) => {
    setGameQuery((q) => {
      return { ...q, sortOrder };
    });
  };

  const selectPlatform = (platform: Platform) => {
    setGameQuery((q) => {
      return { ...q, platform };
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
          <GameFilters
            selectOrder={selectOrder}
            selectPlatform={selectPlatform}
          />
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
