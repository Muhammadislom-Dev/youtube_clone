import React from 'react';
import SideVideos from './SideVideos';

const ListVideos = ({ videos, onVideoSelect }) => {
     const videoLists = videos.map(video => (
          <SideVideos 
               onVideoSelect={onVideoSelect}
               key={video.id.videoId}
               video={video}
          />
     ));

     return (
          <div className='section__pages'>
               {videoLists}
          </div>
     );
};

export default ListVideos;