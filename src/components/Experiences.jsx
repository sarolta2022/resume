import React, { useState } from "react";
import Card from "./Card";

import experiencesData from "../data/experiencesData";
import Boots from "../images/boots.jpg";

const Experiences = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="main-tile">
      <div
        className="tile-div"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="tile-header experiences-header">Experiences</h1>
        <img className="tile" src={Boots} alt="boots" />
      </div>
      {show && (
        <div>
          <button className="closeButton" onClick={() => setShow(false)}>
            x
          </button>
          {experiencesData.map((experience, index) => (
            <Card
              key={index}
              year={experience.year}
              header={experience.header}
              description={experience.description}
              content={experience.content}
              link={experience.link}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Experiences;
