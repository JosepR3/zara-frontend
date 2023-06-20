import React from "react";

import SideBar from "../sideBar";
import Header from "../header";
import MainContainer from "../mainContainer";

export default function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    return (
      <div className="d-flex h-100">
        <SideBar />
        <div className="d-flex flex-column vh-100 position-relative vw-100">
          <Header />
          <MainContainer>
            <WrappedComponent className="container" {...props} />
          </MainContainer>
        </div>
      </div>
    );
  }
  return WrapperComponent;
}
