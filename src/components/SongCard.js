import "../styles/songCard.css";

const SongCard = (props) => {
  return (
    <div className="card-container">
      <img className="card-img" src={props.imgSrc}></img>
      <div className="title-container">
        <h2>{props.songTitle}</h2>
      </div>
      <audio controls controlsList="nodownload" className="audio-player">
        <source src={props.audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default SongCard;
