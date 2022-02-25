import React from "react";
import UserComponent from "./UserComponent";
import NavbarLogo from "./NavbarLogo";
import "./Navbar.scss";
import { MenuIcon } from "../icons";

const Navbar = () => {
  return (
    <section className="navbar">
      <NavbarLogo />
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            <MenuIcon currentPath={""} path={""} />
          </a>
        </li>
      </ul>
      <UserComponent className="ms-auto" firstName="John" lastName="Doe" />
    </section>
  );
};

export default Navbar;
