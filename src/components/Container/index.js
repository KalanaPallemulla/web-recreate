import React from "react";
import Navbar from "../Navbar";

function Container({ children }) {
  return (
    <>
      <Navbar />
      <div className="mt-4">{children}</div>
    </>
  );
}

export default Container;
