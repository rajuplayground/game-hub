import { useState } from "react";
import { MainHeader } from "./components";
import { MainSidebar } from "./components";
import { MainContent } from "./components";

function App() {
  const [genre, setGenre] = useState(0);
  const [search, setSearch] = useState("");

  const selectGenre = (id: number) => {
    setGenre(id);
  };

  const selectSearch = (query: string) => {
    console.log(query);
    setSearch(query);
  };

  return (
    <div>
      <MainHeader selectSearch={selectSearch} />
      <main className="px-4 flex items-baseline">
        <MainSidebar selectGenre={selectGenre} />
        <MainContent genre={genre} search={search} />
      </main>
    </div>
  );
}

export default App;
