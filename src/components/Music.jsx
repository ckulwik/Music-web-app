import "../styles/section.css";
import SongsContainer from "./SongsContainer";
import React, { lazy, Suspense } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSongs } from '../hooks/useSongs';

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
  const { songs: originalsSongs } = useSongs('Originals');
  const { songs: mashupsSongs } = useSongs('Mashups etc.');

  const renderSongCard = (song) => (
    <Suspense key={song.id} fallback={<GradientCircularProgress />}>
      <SongCard hoverSpeed={song.hoverSpeed}>
        <iframe
          title={`${song.title.toLowerCase().replace(/\s+/g, '-')}-iframe`}
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={song.soundcloudUrl}
        />
      </SongCard>
    </Suspense>
  );

  return (
    <div
      className="page-container music-page-container"
    // data-aos="flip-right"
    // data-aos-duration="800"
    // data-aos-delay="100"
    // data-aos-once
    >
      <SongsContainer title="Originals">
        {originalsSongs.map(renderSongCard)}
      </SongsContainer>

      <SongsContainer title="Mashups etc.">
        {mashupsSongs.map(renderSongCard)}
      </SongsContainer>
    </div>
  );
};

export default Music;
