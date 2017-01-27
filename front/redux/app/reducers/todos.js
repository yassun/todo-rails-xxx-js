import {
    REQUEST_TODOS,
    RECEIVE_TODOS
} from "../actions";

export default function todos(state = [], action) {
  switch (action.type) {
    case RECEIVE_TODOS:
      return [...action.payload.todos]
    default:
      return state;
  }
}
