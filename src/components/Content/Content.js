import React from "react";

import Title from "../Title/Title";
import Description from "../Description/Description";

import "./content.css";

const Content = (props) => {
  return (
    <div className="content">
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
};

export default Content;
