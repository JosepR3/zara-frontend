import initialState from "./podcasts-state";
import * as TYPES from "./podcasts-types";

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.FETCH_PODCASTS:
      return {
        ...state,
        status: "idle",
        error: undefined,
        isPlaying: false,
      };

    case TYPES.PODCASTS_SET_RESULT:{
      
      return {
        ...state
      };
    }

    case TYPES.PODCASTS_LOADING:
      return {
        ...state,
        status: "loading",
      };

    case TYPES.GET_PODCAST_SUCCESS: {
      return {
        ...state,
        track: [...state.track, action.payload]
      };
    }

    default:
      return state;
  }
}
