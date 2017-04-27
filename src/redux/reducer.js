import { data } from './../mock-data';
import { UP_VOTE } from './actions'

export function WeeksReducer(state = data.weeks, action) {
  switch(action.type) {
    default:
    return state
  }
}

export function PostReducer(state = data.posts, action) {
  switch(action.type) {
    case UP_VOTE:
      // Stuck on building reducer for upvote
      return state.map((post) => {
        if (action.id === post.id) {
          post.votes += 1;
        }});

  default:
    return state;
  }
}
