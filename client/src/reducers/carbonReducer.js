import { FETCH_CARBON } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_CARBON:
      return action.payload || false;
    default:
      return state;
  }
}
