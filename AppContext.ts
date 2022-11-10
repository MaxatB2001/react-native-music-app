import { Song } from "./types";
import React, { Dispatch, SetStateAction } from "react";

interface AppContextInterface {
  song: Song,
  setSong: (song: Song) => void,
  showPlayer: boolean,
  setShowPlayer: Dispatch<SetStateAction<boolean>>
}

const defaultState = {
  song: {} as Song, setSong: () => {}, showPlayer: false, setShowPlayer: () => {}
}

export const AppContext = React.createContext<AppContextInterface>(defaultState);