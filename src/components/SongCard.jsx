import React from "react";
import { useMediaQuery } from "react-responsive";
import "../styles/songCard.css";

const SongCard = ({ songTitle, imgSrc, audioSrc }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 700px)",
  });
  console.log("isDesktop: ", isDesktop);
  return (
    <div className="card-container">
      <div className="image-and-title">
        <img className="card-img" src={imgSrc} />
        <div className="title-container">
          <h3>{songTitle}</h3>
        </div>
      </div>
      <audio controls controlsList="nodownload" className="audio-player">
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SongCard;
