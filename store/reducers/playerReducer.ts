import { PlayerAction, PlayerActionTypes, PlayerState } from "../../types"

const initState: PlayerState = {
  currentTime: null,
  duration: null,
  active: null,
  volume: 0,
  isPlaying: true,
  showPlayer: false,
  soundObj: null,
  currentPlayingSongList: [],
  songIndex: 0
} 

export const playerReducer = (state = initState, action: PlayerAction): PlayerState => {
  switch (action.type) {
    case PlayerActionTypes.SET_SOUND_OBJ:
      return {...state, soundObj: action.payload}
    case PlayerActionTypes.SET_IS_PLAYING:
      return {...state, isPlaying: action.payload}
    case PlayerActionTypes.SET_ACTIVE:
      return {...state, active: action.payload.song, songIndex: action.payload.index, duration: 0, currentTime: 0}
    case PlayerActionTypes.SET_CURRENT_TIME:
      return {...state, currentTime: action.payload}
    case PlayerActionTypes.SET_DURATION:
      return {...state, duration: action.payload}
    case PlayerActionTypes.SET_VOLUME:
      return {...state, volume: action.payload}
    case PlayerActionTypes.SET_SHOW_PLAYER:
      return {...state, showPlayer: action.payload}
    case PlayerActionTypes.SET_CURRENT_PLAYING_SONG_LIST:
      return { ...state, currentPlayingSongList: action.payload };
    case PlayerActionTypes.PLAY_NEXT_SONG:
      if (state.songIndex == state.currentPlayingSongList.length - 1) {
        return {...state, active: state.currentPlayingSongList[0], songIndex: 0}
      }
      return {...state, active: state.currentPlayingSongList[state.songIndex + 1], songIndex: state.songIndex + 1}
    case PlayerActionTypes.PLAY_PREV_SONG:
      if (state.songIndex == 0) {
        return {...state, active: state.currentPlayingSongList[state.currentPlayingSongList.length - 1], songIndex: state.currentPlayingSongList.length - 1}
      }
      return {...state, active: state.currentPlayingSongList[state.songIndex - 1], songIndex: state.songIndex - 1}
    default:
      return state;
  }
}