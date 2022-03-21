import React from 'react';

const Video = ({ video: { id: {videoId}, snippet: { title, channelTitle, description } } }) => {
     
     if (!videoId) return <p className="noResult">No Results</p>;
     const videoSrc = `https://www.youtube.com/embed/${videoId}`;
     
     return (
          <>
               <div className="section-videoiframe">
                    <iframe className='section-iframe'
                         frameBorder="0"
                         allowFullScreen
                         title="Video player"
                         src={videoSrc}
                    />
               </div>
               <div className="videoInfo">
                    <p className="section-title">{title}</p>
                    <p className="section-text">{channelTitle}</p>
                    <p className="section-text">{description}</p>
               </div>
          </>
     );
};

export default Video;