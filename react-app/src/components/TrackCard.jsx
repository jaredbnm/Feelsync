import spotifyIcon from "../assets/icons/spotify.svg";
import React, { useRef, useState } from "react";

function TrackCard({ track }) {
  const { title, artist, duration, audio } = track;
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="
        flex items-center gap-3 rounded-md bg-slate-100 text-slate-900
        p-3
        sm:gap-4 sm:p-4
      "
    >
      <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-slate-300 sm:h-14 sm:w-14" />

      <div className="flex-1">
        <p className="text-sm font-semibold sm:text-base">{title}</p>
        <p className="text-xs text-slate-600 sm:text-sm">{artist}</p>
      </div>

      <div className="flex flex-col items-end gap-1 text-xs sm:flex-row sm:items-center sm:gap-4">
        <span className="text-slate-500">{duration}</span>

        <div className="flex items-center gap-2">
          {track.spotify ? (
            <a
              href={track.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="h-6 w-6 flex items-center justify-center"
            >
              <img src={spotifyIcon} alt="Spotify" className="h-full w-full" />
            </a>
          ) : (
            <div className="h-6 w-6 rounded-full bg-slate-300" />
          )}

          {audio && (
            <>
              <audio
                ref={audioRef}
                src={audio.startsWith("assets/") ? `/${audio}` : audio}
                onEnded={handleEnded}
              >
                <track kind="captions" label="No captions" />
              </audio>
              <button
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white"
                onClick={handlePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? "❚❚" : "►"}
              </button>
            </>
          )}
          {!audio && (
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white"
              disabled
              title="No audio available"
            >
              ►
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";

TrackCard.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    audio: PropTypes.string,
    spotify: PropTypes.string,
  }).isRequired,
};

export default TrackCard;
