import { useState } from "react";
import logo from "../assets/logo.webp";
import ToggleTheme from "./ToggleTheme";
import useGameQuery from "../hooks/useGameQuery";

const MainHeader = () => {
  const { gameQuery, setSearch } = useGameQuery();
  const [query, setQuery] = useState("");

  const handleQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(query);
  };

  return (
    <header className="flex items-center gap-2 py-3 px-4">
      {/* Logo */}
      <div>
        <img className="w-[60px] aspect-square" src={logo} alt="" />
      </div>
      {/* Search  */}
      <div className="flex-1">
        <form onSubmit={handleQuery}>
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-neutral-500 dark:text-neutral-200"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="block w-full p-2 pl-10 text-md text-neutral-800 rounded-full bg-neutral-200 placeholder-neutral-400 dark:placeholder-neutral-700 hover:bg-neutral-300 dark:hover:bg-neutral-800  transition focus:bg-white focus:ring-primary-500 focus:border-primary-500 dark:bg-neutral-900 dark:border-gray-600 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Search games..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </div>
        </form>
      </div>
      {/* Toggle Mode  */}
      <ToggleTheme />
    </header>
  );
};

export default MainHeader;
