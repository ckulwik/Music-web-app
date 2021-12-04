import "../styles/section.css";
import SongCard from "./SongCard";

const Music = () => {
  // useEffect(() => {
  //     const audioEl = document.getElementsByClassName("audio-player")[0];
  //     audioEl.play();
  // })

  return (
    <div className="page-container music-page-container">
      <SongCard
        coverImgSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ypsibridgecover.svg"
        coverImgAlt="cover for chris kulwik's 'Ypsi Bridge' song"
        songTitle="Ypsi Bridge"
        audioSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ypsiFinalMaybe3.wav"
      />
    </div>
  );
};

export default Music;
