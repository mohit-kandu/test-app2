import React from 'react'
import notification from "../../assets/new.png"
import search from "../../assets/search.png"
import pfp from "../../assets/pfp.png"

const Nav = () => {
    const name = localStorage.getItem("user")
    const logout = () => {
        localStorage.clear()
        window.location.reload()
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light mb-5">
            <div className="container-fluid px-5">
                <a className="navbar-brand fw-bold" href="#">Tickets</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 align-items-center">
                        <li className="nav-item cursor-pointer">
                            <div>
                                <img src={search} alt="search" />
                            </div>
                        </li>
                        <li className="nav-item cursor-pointer">
                            <div>
                                <img src={notification} alt="notifications" />
                            </div>
                        </li>
                        <li className="nav-item d-flex gap-3 align-items-center  profile dropdown">
                            <span>{name}</span>
                            <div className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={pfp} alt="profile_photo" />
                            </div>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li onClick={logout}><a href="#" className="dropdown-item" style={{ fontSize: "small" }}>Log out</a></li>
                            </ul>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Nav