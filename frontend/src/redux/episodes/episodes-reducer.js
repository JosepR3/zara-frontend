import initialState from "./episodes-state";
import * as TYPES from "./episodes-types";

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_EPISODES:
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    case TYPES.EPISODES_SET_RESULT:{
      return {
        ...state
      };
    }

    case TYPES.EPISODES_LOADING:
      return {
        ...state,
        loading: true,
      };

    case TYPES.GET_EPISODE_SUCCESS: {
      return {
        ...state,
        track: [...state.track, action.payload]
      };
    }

    default:
      return state;
  }
}
