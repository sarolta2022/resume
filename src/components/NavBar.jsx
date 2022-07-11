import React, { useState } from "react";
import { Link } from "react-router-dom";

import Avatar from "./Avatar";
import AvatarImg from "../images/avatar.png";
import { BiMenu } from "react-icons/bi";

const NavBar = () => {
  const [collapse, setCollapse] = useState(true);

  const handleClick = () => {
    setCollapse(!collapse);
  };

  return (
    <div className="navbar">
      <Avatar avatar={AvatarImg} />
      <h1 className="resume">resume</h1>

      <div onClick={handleClick} className={collapse ? "links" : "openedLinks"}>
        <button onClick={handleClick} className="closeMenu closeButton">
          x
        </button>
        <Link className={collapse ? "links" : "singleLink"} to="/">
          Home
        </Link>
        <Link className={collapse ? "links" : "singleLink"} to="/fresh">
          Fresh
        </Link>
        <Link className={collapse ? "links" : "singleLink"} to="/experiences">
          Experiences
        </Link>
        <Link className={collapse ? "links" : "singleLink"} to="/about">
          About
        </Link>
        <Link className={collapse ? "links" : "singleLink"} to="/contact">
          Contact
        </Link>
        <Link className={collapse ? "links" : "singleLink"} to="/github">
          Github
        </Link>
      </div>
      {collapse && (
        <BiMenu size="4x" className="hamburger-links" onClick={handleClick} />
      )}
    </div>
  );
};

export default NavBar;
