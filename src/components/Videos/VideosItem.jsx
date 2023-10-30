import React from 'react'

function VideosItem({video}) {
  return (
    <div className='col-md-6 col-sm-12 ny-videos__container__item mt-4'>
      <iframe
        title={video.snippet.title}
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
        allowFullScreen
        width="100%"
        height="330"
      ></iframe>
    </div>
  )
}

export default VideosItem
