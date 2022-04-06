import React from 'react'
import classes from './Footer.module.css';
import { FaWaze, FaFacebook, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <ul className={`${classes.social}`}>
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
        <div className="row">
          <div className="col-lg-12">
            <p className={`${classes.copyright}`}>
              Copyright &copy; 2022 Maor Elimelech
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer