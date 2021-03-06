import React from "react";
import YouTube from "react-youtube";

export default function Video({ nowPlaying, setNowPlaying, setIframeState }) {
  const youtubePlayerOptions = {
    height: "0px",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      playsinline: 1,
      iv_load_policy: 3,
      color: "white",
      enablejsapi: 1,
      origin:
        process.env.NODE_ENV === "production"
          ? "https://qasong.com/"
          : "http://localhost:8080",
    },
  };

  function handleVideoEnd() {
    setNowPlaying(null);
  }

  function handleStateChange(e) {
    setIframeState(e.data);
  }

  const id = nowPlaying.videoId;

  if (!id) return <div id="empty-div"></div>;

  return (
    <YouTube
      videoId={id}
      opts={youtubePlayerOptions}
      onEnd={handleVideoEnd}
      // onError
      // onReady
      // onPause
      // onPlay
      // onPlaybackQualityChange
      // onPlaybackRateChange
      onStateChange={handleStateChange}
    />
  );
}
