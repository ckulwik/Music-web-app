import React from "react";
import HeaderItem from "./HeaderItem";
import "../styles/header.css";

const Header = ({ MusicRef, AboutRef, LinksRef }) => {
  return (
    <header>
      <div className="header-container">
        <div className="header-items-container">
          <HeaderItem title="Music" ref={MusicRef} order={1} />
          <HeaderItem title="About" ref={AboutRef} order={2} />
          <HeaderItem title="Links" ref={LinksRef} order={3} />
        </div>
        <div className="circle" />
        <div className="circle-crop" />
        <div className="hide-headers" />
        <div className="top-lines" />
      </div>
    </header>
  );
};

export default Header;
