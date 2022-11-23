import { userReducer } from './reducers/userReducer';
import { playerReducer } from './reducers/playerReducer';
import { createStore, combineReducers} from 'redux';
 
const rootReducer = combineReducers({
  playerReducer,
  userReducer
});
 
export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof rootReducer>