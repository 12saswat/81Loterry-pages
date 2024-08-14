import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { IoGameController } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { MdSportsVolleyball } from "react-icons/md";
import { RxDiscordLogo } from "react-icons/rx";
const Header = () => {
  return (
    <>
      <div className="header">
        <FaChevronLeft className="arrow" />
        <b style={{ paddingLeft: "10rem", fontSize: "20px" }}>Rebate ratio</b>
      </div>
      <div className="bars">
        {" "}
        <div>
          <IoGameController className="a1" />
          <p className="txt">Game</p>
        </div>
        <div>
          <RxDiscordLogo className="a1" />
          <p className="txt">Arcade</p>
        </div>
        <div>
          <MdLiveTv className="a1" />
          <p className="txt">Live</p>
        </div>
        <div>
          <MdSportsVolleyball className="a1" />
          <p className="txt">Sports</p>
        </div>
      </div>
    </>
  );
};
export default Header;
