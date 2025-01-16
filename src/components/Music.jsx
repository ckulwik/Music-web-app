import "../styles/section.css";
import SongsContainer from "./SongsContainer";
import React, { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const SongCard = lazy(() => import("./SongCard"));


function GradientCircularProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a90b1b" />
            <stop offset="100%" stopColor="#03697a" />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} size={40} />
    </React.Fragment>
  );
}

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
        <Suspense fallback={<GradientCircularProgress />}> 
          <SongCard hoverSpeed={5}>
            <iframe
              title="pokemon-pinball-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1518799396&color=%232f2d2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>

        <Suspense fallback={<GradientCircularProgress />}> 
          <SongCard hoverSpeed={6}>
            <iframe
              title="4-strings-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1393800082&color=%232f2d2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>

        <Suspense fallback={<GradientCircularProgress />}> 
          <SongCard hoverSpeed={7}>
            <iframe
              title="gobble-wobble-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1390104205&color=%232f2d2e&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>

        <Suspense fallback={<GradientCircularProgress />}>
          <SongCard hoverSpeed={1}>
            <iframe
              title="all-at-once-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1355607472&color=%231f2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>

        <Suspense fallback={<GradientCircularProgress />}>
          <SongCard hoverSpeed={2}>
            <iframe
              title="ypsi-bridge-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1172045620&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>
      </SongsContainer>

      <SongsContainer title="Mashups etc.">
        <Suspense fallback={<GradientCircularProgress />}>
          <SongCard hoverSpeed={3}>
            <iframe
              title="big-black-boots-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1277106907&color=%231f2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>

        <Suspense fallback={<GradientCircularProgress />}>
          <SongCard hoverSpeed={4}>
            <iframe
              title="butterflies-and-circles-iframe"
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1123652962&color=%231f2020&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            />
          </SongCard>
        </Suspense>
      </SongsContainer>
    </div>
  );
};

export default Music;
