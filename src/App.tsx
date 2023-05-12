import { useState } from "react";
import { MainHeader } from "./components";
import { MainSidebar } from "./components";
import { MainContent } from "./components";

function App() {
  const [genre, setGenre] = useState(0);

  const selectGenre = (id: number) => {
    setGenre(id);
  };

  return (
    <div>
      <MainHeader />
      <main className="px-4 flex items-baseline">
        <MainSidebar selectGenre={selectGenre} />
        <MainContent genre={genre} />
      </main>
    </div>
  );
}

export default App;
