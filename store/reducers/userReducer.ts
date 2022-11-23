import { UserState, UserAction, UserActionTypes } from './../../types';
const initState: UserState = {
  token: null, 
  isLoading: true,
  user: null,
}

export const userReducer = (state = initState, action: UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.SET_TOKEN: 
      return {...state, token: action.payload} 
    case UserActionTypes.SET_IS_LOADING:
      return {...state, isLoading: action.payload}
    case UserActionTypes.SET_USER:
      return {...state, user: action.payload}
    case UserActionTypes.ADD_LIKED_SONG:
      if (state.user !== null) {
        return {...state, user: {...state.user, likedTracks: [...state.user.likedTracks, action.payload]}}
      }
    case UserActionTypes.REMOVE_LIKED_SONG:
      if (state.user !== null) {
        return {...state, user: {...state.user, likedTracks: state.user.likedTracks.filter(item => item !== action.payload)}}
      }
    case UserActionTypes.ADD_LIKED_ALBUM:
      if (state.user !==null) {
        return {...state, user: {...state.user, likedAlbums: [...state.user.likedAlbums, action.payload]}}
      }
    case UserActionTypes.REMOVE_LIKED_ALBUM:
      if (state.user !== null) {
        return {...state, user: {...state.user, likedAlbums: state.user.likedAlbums.filter(item => item !== action.payload)}}
      }
    default:
      return state;
  }
}