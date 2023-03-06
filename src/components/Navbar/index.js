import React, { useState } from "react";

const TopKeys = ({ title, value }) => {
  return (
    <div className="flex space-x-1">
      <h1 className="font-sans" style={{ color: "#A197AA", fontSize: "11px" }}>
        {title}:
      </h1>
      <h1 className="font-mono" style={{ color: "#E42575", fontSize: "11px" }}>
        {value}
      </h1>
    </div>
  );
};
const Navbar = () => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div>
      <div className="w-screen bg-red-400 fixed top-0">
        <div className="md:block hidden">
          <div className="bg-purple-900 h-8 flex justify-center items-center space-x-4 ">
            <TopKeys title="Volume 24h" value="89,839 SOL" />
            <TopKeys title="Volume total" value="55,405,964 SOL" />
            <TopKeys title="SOL/USD" value="$20.97" />
            <TopKeys title="Solana Netwrok " value="4,951 TPS" />
          </div>
        </div>
        <div className="md:hidden block">
          <div className="bg-purple-900 h-7 flex justify-center items-center space-x-4 ">
            <TopKeys title="Volume 24h" value="89,839 SOL" />
          </div>
        </div>
        <div className="h-20 bg-red-400 flex justify-between px-16 items-center">
          <div className="flex space-x-4">
            <div>Image</div>
            <div>dropDown</div>
          </div>
          <div>Search</div>
          <div>Button</div>
        </div>
      </div>
      <div
        className={`h-screen bg-red-400 ${
          isHover ? "w-48" : "w-28"
        } fixed left-0 top-28`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <div className="">hi</div>
      </div>
    </div>
  );
};

export default Navbar;
