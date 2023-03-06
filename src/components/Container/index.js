import React from "react";
import Navbar from "../Navbar";

function Container({ children }) {
  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-28">{children}</div>
    </>
  );
}

export default Container;
