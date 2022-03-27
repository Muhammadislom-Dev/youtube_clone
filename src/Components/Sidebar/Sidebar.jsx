import './Sidebar.scss'
import { NavLink, Link } from 'react-router-dom'

//Images
import Toggle from '../../assets/img/toggle.png'
import Youtube from '../../assets/img/youtube.png'
import Home from '../../assets/img/home.png'
import Person from '../../assets/img/person.png'

//Svgs
import Video from '../Lib/Svgs/Video';
import NotificationIcon from '../Lib/Svgs/Notification';
import Homes from '../Lib/Svgs/home';
import Favourites from '../Lib/Svgs/Favourites'
import Library from '../Lib/Svgs/Library'
import Liked from '../Lib/Svgs/Liked'
import Subscribing from '../Lib/Svgs/Subscribing'
import Trending from '../Lib/Svgs/Trending'
import Clock from '../Lib/Svgs/Clock'
import Menu from '../Lib/Svgs/Menu'
import Games from '../Lib/Svgs/Games'
import Music from '../Lib/Svgs/Music'


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
{/* 
              <ul className="sidebar__list">
                  <li className="sidebar__item">
                      <NavLink  to="/" exact className='sidebar__list-link'>
                          <Homes />
                          <p className="sidebar__names">Home</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/trending" className='sidebar__list-link'>
                         <Subscribing />
                          <p className="sidebar__names">Trending</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/subscriptions" className='sidebar__list-link'>
                         <Video />
                          <p className="sidebar__names">Subscriptions</p>
                      </NavLink>
                  </li>
              </ul>
              <ul className="sidebar-list">
                  
              <li className="sidebar__item">
                      <NavLink to="/library" className='sidebar__list-link'>
                         <NotificationIcon />
                          <p className="sidebar__names">Library</p>
                      </NavLink>
                  </li>

                  <li className="sidebar__item">
                      <NavLink to="/history" className='sidebar__list-link'>
                         <Favourites />
                          <p className="sidebar__names">History</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/watch" className='sidebar__list-link'>
                         <Clock />
                          <p className="sidebar__names">Watch Later</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/favourites" className='sidebar__list-link'>
                         <Trending />
                          <p className="sidebar__names">Favourites</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/likevideo" className='sidebar__list-link'>
                         <Liked />
                          <p className="sidebar__names">Liked Videos</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="music" className='sidebar__list-link'>
                         <Library />
                          <p className="sidebar__names">Music</p>
                      </NavLink>
                  </li>
                  <li className="sidebar__item">
                      <NavLink to="/games" className='sidebar__list-link'>
                         <Menu />
                          <p className="sidebar__names">Games</p>
                      </NavLink>
                  </li>
              </ul> */}

              <div className="sidebar-top">
              <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/"
                    exact
                >
                    <Homes />
                    <p className="sidebar__menues-text">Home</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/trending"
                >
                    <Trending />
                    <p className="sidebar__menues-text ">Trending</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/subscribing"
                >
                    <Subscribing />
                    <p className="sidebar__menues-text">Subscribing</p>
                </NavLink>
            </div>
            <div className="sidebar-center">
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/library"
                    exact
                >
                    <Library />
                    <p className="sidebar__menues-text">Library</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/history"
                >
                    <Menu />
                    <p className="sidebar__menues-text ">History</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/watchlater"
                >
                    <Clock />
                    <p className="sidebar__menues-text">Watch later</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/favourites"
                >
                    <Favourites />
                    <p className="sidebar__menues-text">Favourites</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/liked-videos"
                >
                    <Liked />
                    <p className="sidebar__menues-text">Liked videos</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/music"
                >
                    <Music />
                    <p className="sidebar__menues-text">Music</p>
                </NavLink>
                <NavLink
                    className="sidebar__menues"
                    activeClassName="sidebar__menues-active"
                    to="/games"
                >
                    <Games />
                    <p className="sidebar__menues-text">Games</p>
                </NavLink>
              </div>
{/* 
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
              </ul> */}

            <div className="sidebar-bottom">
                <h2 className="sidebar-bottom__title">Subscriptions</h2>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={Person}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">
                        Gussie Singleton
                    </p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={Person}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Nore Francis</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={Person}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Belle Briggs</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={Person}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Eunice Cortez</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={Person}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Emma Hanson</p>
                </Link>
                <Link className="sidebar-bottom__links" to="/channel">
                    <img
                        src={Person}
                        alt="subscription users"
                        width={26}
                        height={26}
                    />
                    <p className="sidebar-bottom__links-text">Leah Berry</p>
                </Link>
            </div>
          </div>
        </div>
    )
}

export default Sidebar