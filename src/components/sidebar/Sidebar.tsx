import React from "react";
import { AnalyseIcon } from "../icons";
import ShortcutsIcon from "../icons/ShortcutsIcon";
import PaymentsIcon from "../icons/PaymentsIcon";
import LogoutIcon from "../icons/LogoutIcon";
import GraphsIcon from "../icons/GraphsIcon";
import "./Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const Sidebar = () => {
  const navItems = [
    {
      icon: AnalyseIcon,
      tooltip: "Analysis",
      path: "/analysis",
    },
    {
      icon: ShortcutsIcon,
      tooltip: "Shortcuts",
      path: "/shortcuts",
    },
    {
      icon: PaymentsIcon,
      tooltip: "Payments",
      path: "/payments",
    },
    {
      icon: GraphsIcon,
      tooltip: "Reports",
      path: "/reports",
    },
    {
      icon: LogoutIcon,
      tooltip: "Logout",
      path: "/logout",
      type: "button",
    },
  ];
  const location = useLocation();

  return (
    <aside className="app-sidebar">
      <ul className="nav flex-column">
        {navItems.map((item) => (
          <li className="nav-item" key={item.path}>
            <div className="nav-link-item">
              {item.type === "button" ? (
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 100, hide: 400 }}
                  overlay={renderLogoutButtonTooltip}
                >
                  <button
                    disabled
                    style={{
                      margin: 0,
                      padding: 0,
                      border: 0,
                      cursor: "not-allowed",
                    }}
                  >
                    {React.createElement(item.icon, {
                      path: item.path,
                      currentPath: location.pathname,
                    })}
                  </button>
                </OverlayTrigger>
              ) : (
                <Link to={item.path}>
                  {React.createElement(item.icon, {
                    path: item.path,
                    currentPath: location.pathname,
                  })}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

const renderLogoutButtonTooltip = (props: any) => (
  <Tooltip id="logout-button-tooltip" {...props}>
    Feature not supported.
  </Tooltip>
);
export default Sidebar;
