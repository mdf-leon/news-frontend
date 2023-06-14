import React from "react"; 

export default function DefaultPageContainer(props: React.ComponentPropsWithoutRef<"div">) { 

  return (
    <div
      className="h-full font-mono flex justify-center items-center"
      style={{
        minHeight: `calc(100vh - 3.125rem)`,
      }}
    >
      {props.children}
    </div>
  );
}