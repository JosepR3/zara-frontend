import * as TrackTypes from "./podcasts-types";
import api from "../../api";

export function setTracksLoading() {
  return { type: TrackTypes.TRACKS_LOADING };
}

export function setTracksLoadingSuccess() {
  return { type: TrackTypes.TRACKS_LOADING_SUCCESS };
}

export function setTracksResult(result) {
  return { type: TrackTypes.TRACKS_SET_RESULT, payload: result };
}

export function setTracksError(error) {
  return { type: TrackTypes.TRACKS_SET_ERROR, payload: error };
}

export function getTrackSuccess(data) {
  return { type: TrackTypes.GET_TRACK_SUCCESS, payload: data };
}



export async function fetchAllPodcasts(dispatch) {
  try {
    const res = await api.fetchAllPodcasts({
      headers: "",
    });
    return dispatch(setTracksResult(res.data.data));
  } catch (error) {
    console.log(error, "fetcherror");
  }
}

export function fetchPodcastById(data) {
  return async function createThunk(dispatch) {
    const res = await api.fetchTrackById(
      {
        headers: "",
      },
      data,
    );
    dispatch(getTrackSuccess(res.data.data));
  };
}

