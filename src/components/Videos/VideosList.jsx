import React, { useEffect, useState } from 'react';
import axios from 'axios';
import VideosContainer from './VideosContainer';

function VideosList() {
  const YOUTUBE_API_KEY = 'AIzaSyCC9jCGbsKOFUALGPbkjOtL0uGMb0haI8s';
  const YOUTUBER_USERNAME = 'yogawithadriene';
  
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: YOUTUBE_API_KEY,
          q: YOUTUBER_USERNAME,
          part: 'snippet',
          maxResults: 10,
          type: 'video',
        },
      })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section className='ny-videos__container'>
      <div className="container-fluid">
      <VideosContainer videos={videos} />
      </div>
    </section>
  )
}

export default VideosList
