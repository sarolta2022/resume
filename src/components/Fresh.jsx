import React, { useState } from "react";
import Card from "./Card";
import freshData from "../data/freshData";
import lemo from "../images/lemo.jpg";

const Fresh = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="main-tile">
      <div
        className="tile-div"
        onClick={() => {
          setShow(!show);
        }}
      >
        <h1 className="tile-header">Fresh</h1>
        <img className="tile" src={lemo} alt="lemo" />
      </div>
      {show && (
        <div>
          <button className="closeButton" onClick={() => setShow(false)}>
            x
          </button>
          {freshData.map((fresh, index) => (
            <Card
              key={index}
              year={fresh.year}
              header={fresh.header}
              description={fresh.description}
              content={fresh.content}
              link={fresh.link}
            ></Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Fresh;
