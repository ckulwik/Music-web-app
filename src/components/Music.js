import "../styles/section.css";
import SongCard from "../components/SongCard";

const Music = () => {
  // useEffect(() => {
  //     const audioEl = document.getElementsByClassName("audio-player")[0];
  //     audioEl.play();
  // })

  return (
    <div className="page-container music-page-container">
      <h1 className="page-title">Music</h1>
      <SongCard
        imgSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/spongebobbootssq.jpg"
        songTitle="Are You Gonna be my Barb? (Big Black Boots)"
        audioSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/Are+you+gonna+be+my+barb+(big+black+boots).wav"
      />
    </div>
  );
};

export default Music;
