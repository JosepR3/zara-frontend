import { combineReducers } from "redux";

import podcastsReducer from "./podcasts/podcasts-reducer";
import episodesReducer from "./episodes/episodes-reducer";

const rootReducer = combineReducers({
  podcasts: podcastsReducer,
  episodes: episodesReducer
});

export default rootReducer;
