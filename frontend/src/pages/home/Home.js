import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import * as ROUTES from "../../routes";

// REDUX
import { useSelector, useDispatch } from "react-redux";

// HOC
import withLayout from "../../components/HOC/withLayout";

//COMPONENTS
import Search from "../../components/search";
import PodcastList from "../../components/podcastList";


function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
    
  }, [dispatch])

  return (
    <>
      <Search />
      <PodcastList />
    </>
  );
}


export default withLayout(Home);
