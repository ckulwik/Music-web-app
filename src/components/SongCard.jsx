import React from "react";
import "../styles/songCard.css";

const SongCard = ({ hoverSpeed, children }) => {
  return <div className={`card-container speed-${hoverSpeed}`}>{children}</div>;
};

export default SongCard;
