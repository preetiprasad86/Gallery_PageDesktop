import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button8.css";

function Button8(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x27321591TimelineData);
  }, []);

  return (
    <div className="x27321591 component component-wrapper not-ready">
      <div className="master-button-ExgCSs">
        <div className="button-i2732159151-VMUhEc valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x27321591TimelineData = [
  {
    initial_state_name: "Property-1=Tertiary",
    root_element: ".x27321591",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {
          "": {
            position: "relative",
          },
        },
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button8;
