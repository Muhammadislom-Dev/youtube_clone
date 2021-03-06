import './App.scss';
import { useEffect } from 'react';
import Aos from "aos"
import "aos/dist/aos.css"
import Sidebar from './Components/Sidebar/Sidebar';
import {Switch, Route} from 'react-router'
import Section from './cloneMain/Section/Section';
import Sublime from './Components/Sublime/Sublime';



function App() {

  useEffect(() =>{
    Aos.init({});
  }, []);
  // const [videos, setVideos] = useState([]);
  // const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });

  // async function videoSubmit(searchTerm) {
  //   const {data: { items: videos } } = await URL.get("search", {
  //     params: {
  //       part: "snippet",
  //       maxResults: 50,
  //       key: "AIzaSyC4HtSwSzpwlqoHnERzQLnCX5oRrljl1Uk",
  //       q: searchTerm
  //     }
  //   });

  //   console.log(videos);
  //   setVideos(videos);
  //   setSelectedVideos(videos[0]);
  // }
  
  

  return (
   <>
      {/* <div className="searchSec">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="videoMain">
        <div className="videoSec">
          <Video video={selectedVideos} />
        </div>
        <div className="videoLists">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div> */}
   

    <div className="App">
      <Sidebar />
        <div className='App__content'>
           <Switch>
              <Route path="/trending">
                /trending
              </Route>
              <Route path="/subscriptions">
                /subscriptions
              </Route>
              <Route path="/library">
                /library
              </Route>
              <Route path="/history">
                /history
              </Route>
              <Route path="/watchlater">
                /watch
              </Route>
              <Route path="/favourites">
                /favourites
              </Route>
              <Route path="/likevideo">
                /likevideo
              </Route>
              <Route path="/music">
                /music
              </Route>
              <Route path="/games">
                /games
              </Route>
              <Route path="/">
                <Section />
              </Route>
           </Switch>
        </div>
        <div></div>
    </div>
    </>
  );
}

export default App;
