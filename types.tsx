/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Sound } from "expo-av/build/Audio";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
  Home: undefined;
  TabTwo: undefined;
  UserScreen: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  AlbumScreen: { id: string };
  NewReleasesScreen: undefined;
  ChartScreen: undefined;
};

export type SearchTabParamList = {
  TabTwoScreen: undefined;
  AlbumScreen: { id: string };
};

export type UserTabParamList = {
  UserScreen: undefined;
  AlbumsScreen: undefined;
  TracksScreen: undefined;
  ArtistsScreen: undefined;
  ArtistScreen: {id: string};
  AlbumScreen: { id: string };
};

export type AuthParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type AlbumType = {
  _id: string;
  picture: string;
  tracks: Array<Song>;
  artist: Artist;
  name: string;
};

export type Song = {
  _id: string;
  picture: string;
  artist: Artist;
  name: string;
  audio: string;
  listens: number;
};

export type Artist = {
  _id: string;
  picture: string;
  name: string;
  tracks: Array<Song>;
  albums: Array<AlbumType>;
};

export type PlayerState = {
  active: null | Song;
  volume: number;
  duration: number | null;
  currentTime: number | null;
  isPlaying: boolean;
  showPlayer: boolean;
  soundObj: Sound | null;
  currentPlayingSongList: Array<Song>;
  songIndex: number;
};

export type Selections = {
  _id: string;
  title: string;
  albums: Array<AlbumType>;
}

export type User = {
  _id: string;
  email: string;
  likedAlbums: Array<string>;
  likedTracks: Array<string>;
  likedArtists: Array<string>;
};

export type UserState = {
  token: string | null;
  isLoading: boolean;
  user: User | null;
};

export enum PlayerActionTypes {
  SET_IS_PLAYING = "SET_IS_PLAYING",
  SET_ACTIVE = "SET_ACTIVE",
  SET_DURATION = "SET_DURATION",
  SET_CURRENT_TIME = "SET_CURRENT_TIME",
  SET_VOLUME = "SET_VOLUME",
  SET_SHOW_PLAYER = "SET_SHOW_PLAYER",
  SET_SOUND_OBJ = "SET_SOUND_OBJ",
  SET_CURRENT_PLAYING_SONG_LIST = "SET_CURRENT_PLAYING_SONG_LIST",
  PLAY_NEXT_SONG = "PLAY_NEXT_SONG",
  PLAY_PREV_SONG = "PLAY_PREV_SONG",
}

type SetSoundObj = {
  type: PlayerActionTypes.SET_SOUND_OBJ;
  payload: Sound;
};

type SetShowPlayerAction = {
  type: PlayerActionTypes.SET_SHOW_PLAYER;
  payload: boolean;
};

type setIsPlayingAction = {
  type: PlayerActionTypes.SET_IS_PLAYING;
  payload: boolean;
};

type SetActiveAction = {
  type: PlayerActionTypes.SET_ACTIVE;
  payload: {
    song: Song;
    index: number;
  };
};

type SetDurationAction = {
  type: PlayerActionTypes.SET_DURATION;
  payload: number;
};

type SetCurrentTimeAction = {
  type: PlayerActionTypes.SET_CURRENT_TIME;
  payload: number;
};

type SetVolumeAction = {
  type: PlayerActionTypes.SET_VOLUME;
  payload: number;
};

type SetCurrentPlayingSongList = {
  type: PlayerActionTypes.SET_CURRENT_PLAYING_SONG_LIST;
  payload: Array<Song>;
};

type PlayNextSong = {
  type: PlayerActionTypes.PLAY_NEXT_SONG;
};

type PlayPrevSong = {
  type: PlayerActionTypes.PLAY_PREV_SONG;
};

export type PlayerAction =
  | setIsPlayingAction
  | SetActiveAction
  | SetDurationAction
  | SetCurrentTimeAction
  | SetVolumeAction
  | SetShowPlayerAction
  | SetSoundObj
  | SetCurrentPlayingSongList
  | PlayNextSong
  | PlayPrevSong;

export enum UserActionTypes {
  SET_TOKEN = "SET_TOKEN",
  SET_IS_LOADING = "SET_IS_LOADING",
  SET_USER = "SET_USER",
  ADD_LIKED_SONG = "ADD_LIKED_SONG",
  REMOVE_LIKED_SONG = "REMOVE_LIKED_SONG",
  ADD_LIKED_ALBUM = "ADD_LIKED_ALBUM",
  REMOVE_LIKED_ALBUM = "REMOVE_LIKED_ALBUM",
}
type SetTokenAction = {
  type: UserActionTypes.SET_TOKEN;
  payload: string | null;
};

type AddLikedAlbum = {
  type: UserActionTypes.ADD_LIKED_ALBUM;
  payload: string;
}

type RemoveLikedAlbum = {
  type: UserActionTypes.REMOVE_LIKED_ALBUM;
  payload: string;
}

type RemoveLikedSong = {
  type: UserActionTypes.REMOVE_LIKED_SONG;
  payload: string;
};

type AddLikedSong = {
  type: UserActionTypes.ADD_LIKED_SONG;
  payload: string;
};

type SetLoadingAction = {
  type: UserActionTypes.SET_IS_LOADING;
  payload: boolean;
};

type SetUserAction = {
  type: UserActionTypes.SET_USER;
  payload: User;
};

export type UserAction =
  | SetTokenAction
  | SetLoadingAction
  | SetUserAction
  | AddLikedSong
  | RemoveLikedSong
  | AddLikedAlbum
  | RemoveLikedAlbum;
