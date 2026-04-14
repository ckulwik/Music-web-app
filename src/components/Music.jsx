import SongsContainer from "./SongsContainer";
import React, { lazy, Suspense, useState, useEffect } from "react";
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
  const { songs: originalsSongs, loading: originalsLoading, error: originalsError } = useSongs('Originals');
  const { songs: mashupsSongs, loading: mashupsLoading, error: mashupsError } = useSongs('Mashups etc.');

  const [timedOut, setTimedOut] = useState(false);
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (originalsLoading || mashupsLoading) {
        setTimedOut(true);
        setShowRetry(true);
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, [originalsLoading, mashupsLoading]);

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

  if (originalsError || mashupsError) {
    return (
      <div className="page-container music-page-container">
        <SongsContainer title="Originals">
          <p style={{ color: '#a90b1b', textAlign: 'center', marginTop: '2rem' }}>
            Songs could not be retrieved. Refresh the page to try again.
          </p>
        </SongsContainer>
        <SongsContainer title="Mashups etc.">
          <p style={{ color: '#a90b1b', textAlign: 'center', marginTop: '2rem' }}>
            Songs could not be retrieved. Refresh the page to try again.
          </p>
        </SongsContainer>
      </div>
    );
  }

  return (
    <div
      className="page-container music-page-container"
    >
      <SongsContainer title="Originals">
        {(originalsLoading || mashupsLoading) && !timedOut && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CircularProgress sx={{ color: '#a90b1b' }} size={40} />
            <p style={{ color: '#a90b1b', marginTop: '1rem' }}>Retrieving songs...</p>
          </div>
        )}
        {timedOut && showRetry && (
          <p style={{ color: '#a90b1b', textAlign: 'center', marginTop: '2rem' }}>
            Songs could not be retrieved. Refresh the page to try again.
          </p>
        )}
        {!originalsLoading && !timedOut && originalsSongs.map(renderSongCard)}
      </SongsContainer>

      <SongsContainer title="Mashups etc.">
        {(mashupsLoading || originalsLoading) && !timedOut && (
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <CircularProgress sx={{ color: '#a90b1b' }} size={40} />
            <p style={{ color: '#a90b1b', marginTop: '1rem' }}>Retrieving songs...</p>
          </div>
        )}
        {timedOut && showRetry && (
          <p style={{ color: '#a90b1b', textAlign: 'center', marginTop: '2rem' }}>
            Songs could not be retrieved. Refresh the page to try again.
          </p>
        )}
        {!mashupsLoading && !timedOut && mashupsSongs.map(renderSongCard)}
      </SongsContainer>
    </div>
  );
};

export default Music;
