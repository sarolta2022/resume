import React, { useState } from "react";
import tools from "../images/tools.jpg";

const Github = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="github main-tile">
      <div
        className="tile-div"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="tile-header">Github</h1>
        <img className="tile" src={tools} alt="tools" />
      </div>
      {show && (
        <div>
          <button className="closeButton" onClick={() => setShow(false)}>
            x
          </button>
          <p className="github longDescription">
            In programming school, we did different team and individual
            projects, for example
            <span>
              <span> </span>
              <a
                href="https://sarolta2022.github.io/JShECMAthlon/"
                target="_blank"
              >
                this, <span> </span>
              </a>
              <a href="https://sarolta2022.github.io/artworks/" target="_blank">
                this, <span> </span>
              </a>
              <a
                href="https://sarolta2022.github.io/react-and-morty/"
                target="_blank"
              >
                and this one. <span> </span>
              </a>
            </span>
            <br></br>
            Here are the other public works from this period, my sandbox:
            <span> </span>
            <span>
              <a href="https://github.com/sarolta2021" target="_blank">
                Github 2021.
              </a>
            </span>
            <br></br>
            In addition, I went through several udemy tutorials, like this one:
            <a
              href="https://sarolta2022.github.io/Countries-api/"
              target="_blank"
            >
              <span> </span>Countries api.
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Github;
