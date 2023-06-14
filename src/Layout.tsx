import React from "react";
import TopNav from "./static_components/TopNav";

function Layout(props: React.ComponentPropsWithoutRef<"div">) {  

  return (
    <div>
      <TopNav />
      {props.children}
    </div>
  );
}

export default Layout;
