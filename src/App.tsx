import { GameGrid, MainHeader, GenreList, GameFilters } from "./components";

function App() {
  return (
    <div>
      <MainHeader />
      <main className="px-4 flex items-baseline">
        <div className="w-[250px] hidden lg:block">
          <GenreList />
        </div>
        <div className="flex-1">
          <h1 className="font-bold text-5xl dark:text-white">Games</h1>
          <div className="h-[20px]"></div>
          <GameFilters />
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
