import classNames from "classnames";
import { Link } from "react-router-dom";
import businessLogo from "../../business-logo.svg";
import "./NavbarLogo.scss";

const NavbarLogo = () => {
  return (
    <div className="header-banner">
      <Link to="/">
        <img
          src={businessLogo}
          alt="Business Name"
          className="my-auto cursor-pointer"
          height={40}
        />
      </Link>
    </div>
  );
};

export default NavbarLogo;
