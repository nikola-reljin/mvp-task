import React from "react";
import classNames from "classnames";
import "./UserComponent.scss";
import userSvg from "../../img/john-doe.svg";

interface IUserComponentProps {
  className?: string;
  firstName: string;
  lastName: string;
}

const UserComponent = ({
  className,
  lastName,
  firstName,
}: IUserComponentProps) => {
  const wrapperClassName = classNames("user-block", className);
  const initials = firstName.charAt(0) + lastName.charAt(0);
  return (
    <div className={wrapperClassName}>
      <div className="avatar-container">
        <img src={userSvg} alt="Your Avatar" />
        <div className="avatar-initials">{initials}</div>
      </div>
      <span className="ps-3 fw-bold link-primary">
        {firstName} {lastName}
      </span>
    </div>
  );
};

export default UserComponent;
