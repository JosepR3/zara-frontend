import { useEffect, React } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./utils/scss/index.scss";
import * as ROUTES from "./routes";

// PAGES
import {Home} from "./pages/home";
import {Podcast} from "./pages/podcast";
import {Episode} from "./pages/episode";


function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.PODCAST} element={<Podcast />} />
        <Route path={ROUTES.PODCAST + ROUTES.EPISODE} element={<Episode />} />
      </Routes>
    </>
  );
}

export default App;
