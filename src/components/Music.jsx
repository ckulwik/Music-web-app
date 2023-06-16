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
        <SongCard hoverSpeed={5}>
          <iframe
            title="pokemon-pinball-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1518799396&color=%232f2d2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
        <SongCard hoverSpeed={6}>
          <iframe
            title="4-strings-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1393800082&color=%232f2d2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
        <SongCard hoverSpeed={7}>
          <iframe
            title="gobble-wobble-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1390104205&color=%232f2d2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
        <SongCard hoverSpeed={1}>
          <iframe
            title="all-at-once-iframe"
            width="100%"
            height="300"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1355607472&color=%231f2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
          ></iframe>
        </SongCard>
        <SongCard hoverSpeed={2}>
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
        <SongCard hoverSpeed={3}>
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
        <SongCard hoverSpeed={4}>
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
