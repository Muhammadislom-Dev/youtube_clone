import React from 'react';

const SideVideos = ({ video, onVideoSelect }) => {
     return (
               <div className="section-box" onClick={() => onVideoSelect(video)} >
                    <img src={video.snippet.thumbnails.medium.url} alt="overlay"  />
                    <div className="titleVideo">
                         <p className='header__title'>{video.snippet.title}</p>
                    </div>
               </div>
     );
};

export default SideVideos;