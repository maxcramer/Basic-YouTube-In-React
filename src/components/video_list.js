import React from 'react';
import VideoListItem from './components/video_list_item';

const VideoList = (props) => {
  const videoItems = props.video.map((video) => {
    return (
      <VideoListItem
        key={video.etag}
        video={video} />
    );
  });

  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
