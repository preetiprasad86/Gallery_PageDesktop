import React from "react";
import "./AntDesignplayCircleOutlined.css";

function AntDesignplayCircleOutlined(props) {
  const { overlapGroup3, className } = props;

  return (
    <div className={`ant-designplay-circle-outlined-1 ${className || ""}`}>
      <div className="overlap-group-1" style={{ backgroundImage: `url(${overlapGroup3})` }}>
        <img
          className="vector-3"
          src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-111@2x.svg"
        />
      </div>
    </div>
  );
}

export default AntDesignplayCircleOutlined;
