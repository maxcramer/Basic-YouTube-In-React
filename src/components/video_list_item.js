import React from 'react';

const VideoListItem = (props) => {
  const video = props.video;
  console.log(video);
  const imageUrl = video.snippet.thumbnails.default.url;

  return(
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt={video.snippet.title} src={imageUrl}/>
        </div>
        <div className="media-body">
          <div className="media-heading">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  )
}

export default VideoListItem;
