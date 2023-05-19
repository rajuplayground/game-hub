import { useState } from "react";
import { GameGrid, MainHeader, GenreList } from "./components";

function App() {
  const [genre, setGenre] = useState<number>();
  const [search, setSearch] = useState<string>();

  const selectSearch = (query: string) => {
    setSearch(query);
  };

  return (
    <div>
      <MainHeader selectSearch={selectSearch} />
      <main className="px-4 flex items-baseline">
        <div className="w-[250px] hidden lg:block">
          <GenreList />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-5xl dark:text-white">Games</h1>
          <div className="h-[20px]"></div>
          <div className="h-[20px]"></div>
          <div>
            <GameGrid />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
