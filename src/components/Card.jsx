import React, { useState } from "react";
import experiencesData from "../data/experiencesData";
import ModalExperiences from "./ModalExperiences";

const contentDetails1 = (
  <div className="contentDetails">
    <h5>{experiencesData[1].contentDetails[0].contentHeader}</h5>
    <h6>{experiencesData[1].contentDetails[0].lines[0].line}</h6>
    <p>{experiencesData[1].contentDetails[0].lines[0].lineContent}</p>
    <h6>{experiencesData[1].contentDetails[0].lines[1].line}</h6>
    <p>{experiencesData[1].contentDetails[0].lines[1].lineContent}</p>
    <h6>{experiencesData[2].contentDetails[0].lines[2].line}</h6>
    <p>{experiencesData[1].contentDetails[0].lines[2].lineContent}</p>
    <h6>{experiencesData[1].contentDetails[0].lines[3].line}</h6>
    <p>{experiencesData[1].contentDetails[0].lines[3].lineContent}</p>
    <h5>{experiencesData[1].contentDetails[1].contentHeader}</h5>
    <h6>{experiencesData[1].contentDetails[1].lines[0].line}</h6>
    <p>{experiencesData[1].contentDetails[1].lines[0].lineContent}</p>
    <h6>{experiencesData[1].contentDetails[1].lines[1].line}</h6>
    <p>{experiencesData[1].contentDetails[1].lines[1].lineContent}</p>
    <h6>{experiencesData[2].contentDetails[1].lines[2].line}</h6>
    <p>{experiencesData[1].contentDetails[1].lines[2].lineContent}</p>
    <h6>{experiencesData[1].contentDetails[1].lines[3].line}</h6>
    <p>{experiencesData[1].contentDetails[1].lines[3].lineContent}</p>
  </div>
);

const contentDetails2 = (
  <div className="contentDetails">
    <h6>{experiencesData[2].contentDetails[0].contentHeader}</h6>
    <p>{experiencesData[2].contentDetails[0].lines}</p>
    <h6>{experiencesData[2].contentDetails[1].contentHeader}</h6>
    <p>{experiencesData[2].contentDetails[1].lines}</p>
    <h6>{experiencesData[2].contentDetails[2].contentHeader}</h6>
    <p>{experiencesData[2].contentDetails[2].lines}</p>
  </div>
);

const Card = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="card" id="card-id">
      <div className="card-top">
        <div className="card-year">{props.year}</div>
        <a href={props.link} className="card-header">
          {props.header}
        </a>
      </div>
      <hr></hr>

      <h4 className="card-description">{props.description}</h4>

      {open && (
        <div>
          {props.content === "" ? (
            props.header === "MOL Group" ? (
              <ModalExperiences contentDetails={contentDetails1} />
            ) : (
              <ModalExperiences contentDetails={contentDetails2} />
            )
          ) : (
            <p className="card-content">{props.content}</p>
          )}
        </div>
      )}

      <button className="card-button" onClick={handleClick}>
        {open ? "that's enough for me" : "read more..."}
      </button>
    </div>
  );
};

export default Card;
