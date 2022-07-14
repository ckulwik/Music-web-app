import "../styles/section.css";
import SongCard from "./SongCard";
import SongsContainer from "./SongsContainer";

const Music = () => {
  return (
    <div
      className="page-container music-page-container"
      // data-aos="flip-right"
      // data-aos-duration="800"
      // data-aos-delay="100"
      // data-aos-once
    >
      <SongsContainer title="Originals">
        <SongCard hoverSpeed={1}>
          <iframe
            title="ypsi-bridge-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172045620&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
      </SongsContainer>
      <SongsContainer title="Mashups etc.">
        <SongCard hoverSpeed={2}>
          <iframe
            title="big-black-boots-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1277106907&color=%231f2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
        <SongCard hoverSpeed={3}>
          <iframe
            title="butterflies-and-circles-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1123652962&color=%231f2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
      </SongsContainer>
    </div>
  );
};

export default Music;
