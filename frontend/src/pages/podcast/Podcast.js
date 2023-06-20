import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { fetchPlaylistById } from "../../redux/playlists/playlists-actions";
import withLayout from "../../components/HOC/withLayout";

// Components
import PodcastDetail from "../../components/podcastList";

function Podcast() {
  const dispatch = useDispatch();
  useEffect(() => {

  }, [dispatch]);

  return (
    <PodcastDetail />
  );
}

export default withLayout(Podcast);
