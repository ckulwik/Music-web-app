import "../styles/section.css";
import SongCard from "../components/SongCard";

const Music = () => {
  // useEffect(() => {
  //     const audioEl = document.getElementsByClassName("audio-player")[0];
  //     audioEl.play();
  // })

  return (
    <div className="page-container music-page-container">
      <SongCard
        imgSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ypsibridgecover.svg"
        songTitle="Ypsi Bridge"
        audioSrc=""
      />
    </div>
  );
};

export default Music;
