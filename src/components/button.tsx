import * as React from "react";
import { ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};
function Button({ children }: PropsType) {
  return (
    <button
      style={{
        color: "black",
        background: "white",
        borderRadius: "5px",
        border: "solid 2px black",
        padding: "10px 20px",
        margin: "10px 20px",
        cursor: "pointer",
        fontSize: "1.2em",
      }}
    >
      {children}
    </button>
  );
}

export { Button };
