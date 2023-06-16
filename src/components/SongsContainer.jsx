import React from "react";
// import { useMediaQuery } from "react-responsive";
import "../styles/songsContainer.css";
import Separator from "./Separator";

const SongsContainer = ({ title, children }) => {
  return (
    <>
      <Separator title={title} />
      <div className="songs-container">{children}</div>
    </>
  );
};

export default SongsContainer;
