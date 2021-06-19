import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button22.css";

function Button22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27321587TimelineData);
  }, []);

  return (
    <div className="x27321587 component component-wrapper not-ready">
      <div className="master-button-AvLgq4">
        <div className="button-i2732158751-67q3SB valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27321587TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27321587",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button22;
