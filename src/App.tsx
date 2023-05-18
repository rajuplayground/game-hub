import { useState } from "react";
import { GameGrid, MainHeader } from "./components";

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
        <div className="w-[250px] space-y-3 hidden lg:block">aside</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <GameGrid />
        </div>
      </main>
    </div>
  );
}

export default App;
