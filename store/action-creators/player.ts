import { Sound } from 'expo-av/build/Audio';
import { Song } from './../../types';
import { PlayerAction, PlayerActionTypes } from "../../types";

export const setIsPlaying = (payload: boolean): PlayerAction => {
  return { type: PlayerActionTypes.SET_IS_PLAYING, payload };
};

export const setActiveTrack = (song: Song, index: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_ACTIVE, payload: {song, index} };
};

export const setDuration = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_DURATION, payload};
};

export const setCurrentTime = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_TIME, payload };
};

export const setVolume = (payload: number): PlayerAction => {
  return { type: PlayerActionTypes.SET_VOLUME, payload };
};

export const setShowPlayer = (payload: boolean): PlayerAction => {
  return {type: PlayerActionTypes.SET_SHOW_PLAYER, payload}
}

export const setSoundObj = (payload: Sound): PlayerAction => {
  return {type: PlayerActionTypes.SET_SOUND_OBJ, payload}
}

export const setCurrentPlayingSongList = (
  payload: Array<Song>
): PlayerAction => {
  return { type: PlayerActionTypes.SET_CURRENT_PLAYING_SONG_LIST, payload };
};

export const playNextSong = (): PlayerAction => {
  return {type: PlayerActionTypes.PLAY_NEXT_SONG}
}

export const playPrevSong = (): PlayerAction => {
  return {type: PlayerActionTypes.PLAY_PREV_SONG}
}