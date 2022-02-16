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
      <SongCard>
        <iframe
          title="ypsi-bridge-iframe"
          width="100%"
          height="300"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172045620&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <div className="ypsi-bridge-div">
          <a
            href="https://soundcloud.com/chris-kulwik"
            title="Chris Kulwik"
            target="_blank"
            rel="noreferrer"
            className="ypsi-bridge-a"
          >
            Chris Kulwik
          </a>
          ·
          <a
            href="https://soundcloud.com/chris-kulwik/ypsi-bridge"
            title="Ypsi Bridge"
            target="_blank"
            rel="noreferrer"
            className="ypsi-bridge-a"
          >
            Ypsi Bridge
          </a>
        </div>
      </SongCard>
    </div>
  );
};

export default Music;
