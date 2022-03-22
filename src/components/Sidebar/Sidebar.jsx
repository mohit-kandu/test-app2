import React, { useEffect, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import settings from "../../assets/settings.png"
import subscription from "../../assets/subscription.png"
import logo from "../../assets/logo.png"
import "./Sidebar.css"

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [currentWindowSize, setCurrentWindowSize] = useState(window.innerWidth)
  const [activeItem, setActiveItem] = useState("overview")

  useEffect(() => {
    window.addEventListener("resize", () => {
      setSidebar(window.innerWidth > 991 ? true : false)
      setCurrentWindowSize(window.innerWidth)
    })
  }, [])

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        {/* sidebar toggler button */}
        {
          currentWindowSize < 991 &&
          <div className='sidebar'>
            <div to='#' className='sidemenu-bars'>
              <FaIcons.FaBars onClick={showSidebar} />
            </div>
          </div>
        }
        <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <ul className='sidebar-menu-items' onClick={() => currentWindowSize < 991 && showSidebar()}>
            {
              currentWindowSize < 991 &&
              <li className='sidebar-toggle'>
                <Link to='/' className='menu-bars'>
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
            }
            <li className='sidebar-text mb-5'>
              <Link to="/">
                <div><img src={logo} alt="item_icon" /></div>
                <span className='logo-text'>Dashboard Kit</span>
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li
                  id={item.id}
                  key={`sidebar-item-${index}`}
                  className={`sidebar-text ${item.id === activeItem && "sidebar-item-active"}`}
                  onClick={() => setActiveItem(item.id)}
                >
                  <Link to={item.path}>
                    <div><img src={item.icon} alt="item_icon" /></div>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <li
              id="settings"
              className={`line-divide sidebar-text ${"settings" === activeItem && "sidebar-item-active"}`}
              onClick={() => setActiveItem("settings")}

            >

              <Link to="/">
                <div><img src={settings} alt="item_icon" /></div>
                <span>Settings</span>
              </Link>
            </li>
            <li
              id="subscription"
              className={`sidebar-text ${"subscription" === activeItem && "sidebar-item-active"}`}
              onClick={() => setActiveItem("subscription")}
            >
              <Link to="/">
                <div><img src={subscription} alt="item_icon" /></div>
                <span>Subscription</span>
              </Link>
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
