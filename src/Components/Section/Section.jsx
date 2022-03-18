import './Section.scss'
import React, {useState} from 'react'



import '../Youtube/ListVideo'
import '../Youtube/SideVideos'
import  '../Youtube/Video'
import Search from '../Youtube/Search'
import URL from '../../api/URL'

const Section = () =>{
    const [videos, setVideos] = useState ([]);
    const [selectedVideos, setSelectedVideos] = useState({id : {}, snippet: {}});

    async function videoSubmit (searchTerm) {
        const {date : {items: videos} } = await URL.get("search", {
            params: {
                part: "snippet",
                maxResult: 8,
                key: "AIzaSyB_TZFEkOb0hm8J9jR7a5Q1xiI5UngaaFY",
                q: searchTerm
            }
        });


        console.log(videos);
        setVideos(videos);
        setSelectedVideos(videos[0]);
    }

    return (
        <div className="section">
            <Search onSubmit={videoSubmit} />
        </div>
    )
}
export default Section