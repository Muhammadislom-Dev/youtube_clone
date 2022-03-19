import "../Section/Section.scss"
import { useState } from "react";
import Search from '../Search'
import Video from '../Video'
import URL from '../api/URL'
import ListVideos from '../ListVideos'

const Section = () =>{
    const [videos, setVideos] = useState([]);
    const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });
  
    async function videoSubmit(searchTerm) {
      const {data: { items: videos } } = await URL.get("search", {
        params: {
          part: "snippet",
          maxResults: 30,
          key: "AIzaSyC4HtSwSzpwlqoHnERzQLnCX5oRrljl1Uk",
          q: searchTerm
        }
      });
  
      console.log(videos);
      setVideos(videos);
      setSelectedVideos(videos[0]);
    }

    return(
        <div className="section">
        <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectedVideos} />
        </div>
        <div className="videoLists">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
        </div>
    )
}

export default Section