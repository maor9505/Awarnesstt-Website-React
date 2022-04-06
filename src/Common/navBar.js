import React from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";
import {
  FaWaze,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import {FiAlignJustify} from "react-icons/fi";
import { HashLink } from "react-router-hash-link";


const NavBar = () => {
  return (
    <div className="container  fixed-top">
      <nav className="navbar  navbar-expand-lg ">
        <div className="container-fluid">
          <div className={`${classes["header-title"]}`}>
            <HashLink
              to={"/#home"}
              className={`${classes.title} navbar-brand ml-2`}
            >
              <b>Att</b>
            </HashLink>
            <span className={`${classes.slogan}`}>
              <b>a</b>warness
              <br />
              <b>t</b>ravel
              <br />
              <b>t</b>herapy
            </span>
          </div>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
          >
            <span>
              <FiAlignJustify
                style={{ color: "black", fontSize: "40px" }}
              ></FiAlignJustify>
            </span>
          </button>
          <div
            className={`${classes["main-content"]} collapse navbar-collapse`}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav">
              <li>
                <HashLink smooth to={"/#home"}>
                  דף הבית
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={"/#aboutMe"}>
                  מי אני
                </HashLink>
              </li>
              <li>
                <HashLink to={"/#tipolim-plans"}>הטיפולים שלי</HashLink>
              </li>
              <li>
                <HashLink to={"/#reviews"}>ביקורות</HashLink>
              </li>
              <li>
                <HashLink to={"/#Contact"}>דברו איתי</HashLink>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100000653375892"
                  target="_blank"
                >
                  <FaFacebook
                    style={{ color: "blue", fontSize: "20px" }}
                  ></FaFacebook>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/nisan137/" target="_blank">
                  <FaInstagram
                    style={{ color: "purple", fontSize: "20px" }}
                  ></FaInstagram>
                </a>
              </li>
              <li>
                <a
                  href="https://www.waze.com/he/live-map/directions?to=ll.33.208902%2C35.602763"
                  target="_blank"
                >
                  <FaWaze style={{ color: "black", fontSize: "20px" }}></FaWaze>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
