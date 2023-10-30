import React from "react";
import VideosItem from "./VideosItem";

function VideosContainer({ videos }) {
  return (
    <div className="row">
      {videos.map((video) => (
        <VideosItem key={video.id.videoId} video={video} />
      ))}
    </div>
  );
}

export default VideosContainer;
