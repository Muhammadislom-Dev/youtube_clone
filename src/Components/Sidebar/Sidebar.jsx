import './Sidebar.scss'
import { NavLink, Link } from 'react-router-dom'

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
                      <NavLink  to="/" exact className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Home</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/trending" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Trending</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/subscriptions" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Subscriptions</p>
                      </NavLink>
                  </li>
              </ul>
              <ul className="sidebar-list">
                  
              <li className="sidebar__item">
                      <NavLink to="/library" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Library</p>
                      </NavLink>
                  </li>

                  <li className="sidebar__item">
                      <NavLink to="/history" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">History</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/watch" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Watch Later</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/favourites" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Favourites</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/likevideo" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Liked Videos</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="music" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Music</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/games" className='sidebar__list-link'>
                         <img src={Home} alt="" className="sidebar-imgs" />
                          <p className="sidebar__names">Games</p>
                      </NavLink>
                  </li>
              </ul>

              <ul className="sidebar-lists">
                  <li className="sidebar__item">
                      <NavLink to="/person" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Gussie Singleton</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/person1" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Nora Francis</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/person2" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Belle Briggs</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/person3" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Eunice Cortez</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/person4" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Emma Hanson</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/person5" className='sidebar__list-link'>
                        <img src={Person} alt="" className="sidebar-photo" />
                        <p className='sidebar__names'>Leah Berry</p>
                      </NavLink>
                  </li>
              </ul>
          </div>
        </div>
    )
}

export default Sidebar