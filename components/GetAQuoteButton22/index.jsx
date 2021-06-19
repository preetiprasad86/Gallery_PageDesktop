import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./GetAQuoteButton22.css";

function GetAQuoteButton22(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(i2732160964120TimelineData);
  }, []);

  return (
    <div className="i27321609-64120 component component-wrapper not-ready">
      <div className="master-button-2FhSjx">
        <div className="button-i2732160964-zRAgiv valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const i2732160964120TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".i27321609-64120",
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

export default GetAQuoteButton22;
