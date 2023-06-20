import React from "react"

function MainContainer({children, ...props}) {

  return (
    <main className="content__container d-flex flex-column h-100 w-100"{...props}>
      {children}
    </main>
  );
}

export default MainContainer;
