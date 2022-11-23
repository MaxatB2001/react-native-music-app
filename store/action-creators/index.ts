import * as PlayerActionCreators from './player'
import * as UserActionCreators from './user'

export default {
  ...PlayerActionCreators,
  ...UserActionCreators
}