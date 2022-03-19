import './App.scss';
import HomeContent from './Pages/HomeContent/HomeContent';


function App() {
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
        <div>
          <HomeContent />
        </div>
        <div></div>
    </div>
    </>
  );
}

export default App;
