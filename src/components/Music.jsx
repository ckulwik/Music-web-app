import "../styles/section.css";
import SongCard from "./SongCard";

const Music = () => {

  return (
    <div
      className="page-container music-page-container"
      data-aos="flip-right"
      data-aos-duration="800"
      data-aos-delay="100"
      data-aos-once
    >
      <SongCard
        coverImgSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ypsibridgecoverpng.png"
        coverImgAlt="cover for chris kulwik's 'Ypsi Bridge' song"
        songTitle="Ypsi Bridge"
        audioSrc="https://music-web-app-songs.s3.us-east-2.amazonaws.com/ypsiFinalMaybe3.wav"
      />
    </div>
  );
};

export default Music;
