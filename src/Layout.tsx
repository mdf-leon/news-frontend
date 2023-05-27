import React from "react";
import TopNav from "./static_components/TopNav";

function Layout(props: any) {
  return (
    <div className="h-full ">
      <TopNav />
      {props.children}
    </div>
  );
}

export default Layout;
