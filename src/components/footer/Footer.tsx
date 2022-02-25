import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <ul className="footer nav">
      <li className="nav-item">
        <a className="nav-link fw-bold" aria-current="page" href="#">
          Terms & Conditions
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link fw-bold" aria-current="page" href="#">
          Privacy Policy
        </a>
      </li>
    </ul>
  );
};

export default Footer;
