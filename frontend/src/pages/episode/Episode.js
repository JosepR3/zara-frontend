import { useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { tracksSelector } from "../../redux/tracks/tracks-selector";
import withLayout from "../../components/HOC/withLayout";

import EpisodeDetail from "../../components/episodeDetail/EpisodeDetail";

function Episode() {
  const dispatch = useDispatch();

  useEffect(() => {
  }, [dispatch]);

  return <EpisodeDetail />;
}

export default withLayout(Episode);
