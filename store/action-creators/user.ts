import { User } from "./../../types";
import { UserAction, UserActionTypes } from "../../types";

export const setToken = (payload: string | null): UserAction => {
  return { type: UserActionTypes.SET_TOKEN, payload };
};

export const setLoading = (payload: boolean): UserAction => {
  return { type: UserActionTypes.SET_IS_LOADING, payload };
};

export const setUser = (payload: User): UserAction => {
  return { type: UserActionTypes.SET_USER, payload };
};

export const setLikedSong = (payload: string): UserAction => {
  return { type: UserActionTypes.ADD_LIKED_SONG, payload };
};

export const removeFromLikedSong = (payload: string): UserAction => {
  return { type: UserActionTypes.REMOVE_LIKED_SONG, payload };
};

export const addLikedAlbum = (payload: string): UserAction => {
  return { type: UserActionTypes.ADD_LIKED_ALBUM, payload };
};

export const removeFromLikedAlbums = (payload: string): UserAction => {
  return { type: UserActionTypes.REMOVE_LIKED_ALBUM, payload };
};