import React from "react";

const SongCard = ({ hoverSpeed, children }) => {
  return <div className={`card-container speed-${hoverSpeed}`}>{children}</div>;
};

export default SongCard;
