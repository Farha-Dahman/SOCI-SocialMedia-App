import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faUserGroup, faGear, faBars } from "@fortawesome/free-solid-svg-icons";
import { useAppStore } from "../../../../hooks/useAppStore";
import {
  faUserPlus,
  faCommentDots,
  faBell,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Logout from "../../../../auth/Logout/Logout";
const Toolbar: React.FC = () => {
  const { username } = useAppStore();
  return (
    <>
      <button
        className="navbar-toggler d-md-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#friendsContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-icon">
          <FontAwesomeIcon icon={faUserGroup} className="icon py-1" />
        </span>
      </button>
      <button
        className="navbar-toggler d-md-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#app-menuContent"
        aria-expanded="true"
        aria-label="Toggle navigation"
      >
        <span className="navbar-icon">
          <FontAwesomeIcon icon={faGear} className="icon py-1" />
        </span>
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-icon">
          <FontAwesomeIcon icon={faBars} className="icon py-1" />
        </span>
      </button>
      <div
        className="collapse navbar-collapse d-lg-block "
        id="navbarSupportedContent"
      >
        <nav className="navbar-nav ms-auto mb-2 align-items-center">
          <Link className="nav-item nav-link active" aria-current="page" to="#">
            <FontAwesomeIcon icon={faUserPlus} className="icon" />
          </Link>
          <Link className="nav-item nav-link" to="#">
            <FontAwesomeIcon icon={faCommentDots} className="icon" />
          </Link>
          <Link className="nav-link nav-item" to="#">
            <FontAwesomeIcon icon={faBell} className="icon" />
          </Link>
          <Link className="nav-link nav-item d-block d-lg-none me-md-2" to="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
          </Link>
          <div className="nav-link nav-item dropdown d-flex align-items-center justify-content-items">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <img
                src="https://api.dicebear.com/6.x/avataaars/svg?backgroundColor=c0aede&seed=lano"
                alt="profile_picture"
                className="profile_picture me-1"
              />
              <h6 className="mt-1">{username}</h6>
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/savedPosts">
                  Saved items
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <Logout />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Toolbar;
