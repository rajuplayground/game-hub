import React from "react";
import { create } from "zustand";
import { GameQuery } from "./useGames";
import { Genre } from "../service/GenreService";
import { Platform } from "../service/PlatformService";

interface GameQueryStore {
  gameQuery: GameQuery;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
  setSort: (sort: string) => void;
  setSearch: (search: string) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setGenre: (genre) => {
    set(({ gameQuery }) => ({
      gameQuery: { ...gameQuery, genre },
    }));
  },
  setPlatform: (platform) => {
    set(({ gameQuery }) => ({
      gameQuery: { ...gameQuery, platform },
    }));
  },
  setSort: (sort) => {
    set(({ gameQuery }) => ({
      gameQuery: { ...gameQuery, sortOrder: sort },
    }));
  },
  setSearch: (search) => {
    set(({ gameQuery }) => ({
      gameQuery: { ...gameQuery, searchText: search },
    }));
  },
}));

export default useGameQuery;
