import React from "react";
// import { useMediaQuery } from "react-responsive";
import "../styles/songCard.css";

const SongCard = ({ children }) => {
  // const isDesktop = useMediaQuery({
  //   query: "(min-width: 700px)",
  // });
  return (
    <div className="card-container">{children}</div>

    // <>
    //   {isDesktop ? (
    //     <div className="card-container desktop">
    //       <img
    //         className="card-img desktop"
    //         alt={coverImgAlt}
    //         src={coverImgSrc}
    //       />
    //       <div className="title-and-player">
    //         <div className="title-container desktop">
    //           <h3>{songTitle}</h3>
    //         </div>
    //         <audio
    //           controls
    //           controlsList="nodownload noplaybackrate"
    //           className="audio-player desktop"
    //         >
    //           <source src={audioSrc} type="audio/wav" />
    //           Your browser does not support the audio element.
    //         </audio>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="card-container">
    //       <div className="image-and-title">
    //         <img className="card-img" alt={coverImgAlt} src={coverImgSrc} />
    //         <div className="title-container">
    //           <h3>{songTitle}</h3>
    //         </div>
    //       </div>
    //       <audio controls controlsList="nodownload" className="audio-player">
    //         <source src={audioSrc} type="audio/wav" />
    //         Your browser does not support the audio element.
    //       </audio>
    //     </div>
    //   )}
    // </>
  );
};

export default SongCard;
