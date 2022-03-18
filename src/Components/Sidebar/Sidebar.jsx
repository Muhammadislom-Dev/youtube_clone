import './Sidebar.scss'
import { Link } from 'react-router-dom'

//Images
import Toggle from '../../assets/img/toggle.png'
import Youtube from '../../assets/img/youtube.png'
import Home from '../../assets/img/home.png'
import Person from '../../assets/img/person.png'


const Sidebar = () =>{
    return(
        <div className='sidebar'>
          <div className="sidebar__page">
              <Link to="/" className="sidebar__link">
                 <div className="sidebar__links">
                 <img src={Toggle} alt="" className="sidebar__logo" />
                  <img src={Youtube} alt="" className="sidebar__youtube" />
                  <h1 className='sidebar__name'>Youtube</h1>
                 </div>
              </Link>

              <ul className="sidebar__list">
                  <li className="sidebar__item">
                      <Link to="/" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Home</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/trending" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Trending</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/subscriptions" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Subscriptions</p>
                      </Link>
                  </li>
              </ul>
              <ul className="sidebar-list">
                  
              <li className="sidebar__item">
                      <Link to="/library" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Library</p>
                      </Link>
                  </li>

                  <li className="sidebar__item">
                      <Link to="/history" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">History</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/watch" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Watch Later</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/favourites" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Favourites</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/likevideo" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Liked Videos</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="music" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Music</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/games" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Games</p>
                      </Link>
                  </li>
              </ul>

              <ul className="sidebar-lists">
                  <li className="sidebar__item">
                      <Link to="/person" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Gussie Singleton</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/person1" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Nora Francis</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/person2" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Belle Briggs</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/person3" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Eunice Cortez</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/person4" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Emma Hanson</p>
                      </Link>
                  </li>
                  <li className="sidebar__item">
                      <Link to="/person5" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Leah Berry</p>
                      </Link>
                  </li>
              </ul>
          </div>
        </div>
    )
}

export default Sidebar