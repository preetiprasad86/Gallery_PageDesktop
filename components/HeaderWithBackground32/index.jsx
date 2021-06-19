import React from "react";
import Group86 from "../Group86";
import GetAQuoteButton22 from "../GetAQuoteButton22";
import "./HeaderWithBackground32.css";

function HeaderWithBackground32(props) {
  const {
    unselectedI2732160,
    unselectedI27321602,
    unselectedI27321603,
    text166,
    unselectedI27321604,
    unselectedI27321605,
    unselectedI27321606,
    unselectedI27321607,
    group86Props,
    getAQuoteButton22Props,
  } = props;

  return (
    <div className="header-with-background">
      <Group86 group85={group86Props.group85} whiteProps={group86Props.whiteProps} />
      <div className="frame-34">
        <div className="frame-27">
          <div className="unselected-i2732160 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI2732160}
          </div>
          <div className="unselected-i2732160-1 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI27321602}
          </div>
          <div className="unselected-i2732160-2 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI27321603}
          </div>
          <div className="selected">
            <div className="overlap-group1-1">
              <div className="rectangle-61"></div>
              <div className="text-39 valign-text-middle overpass-bold-shark-14px">{text166}</div>
            </div>
          </div>
          <div className="unselected-i2732160-3 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI27321604}
          </div>
          <div className="unselected-i2732160-4 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI27321605}
          </div>
          <div className="unselected-i2732160-5 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI27321606}
          </div>
          <div className="unselected-i2732160-6 valign-text-middle typography-body-smalltext-14-regular">
            {unselectedI27321607}
          </div>
        </div>
        <GetAQuoteButton22>{getAQuoteButton22Props.children}</GetAQuoteButton22>
      </div>
    </div>
  );
}

export default HeaderWithBackground32;
