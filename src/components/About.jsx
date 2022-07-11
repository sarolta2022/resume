import React, { useState } from "react";
import direction from "../images/direction.jpg";

const About = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="about main-tile">
      <div
        className="tile-div"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="tile-header">About</h1>
        <img className="tile" src={direction} alt="direction" />
      </div>

      {show && (
        <div>
          <button className="closeButton" onClick={() => setShow(false)}>
            x
          </button>
          <p className="about longDescription">
            I'm searching for interesting projects where I can improve my
            development skills. I'm available 30 hours per week and I like
            working remotely/hybrid way. You can reach references from previous
            workplaces, if you want.
          </p>
        </div>
      )}
    </div>
  );
};

export default About;
