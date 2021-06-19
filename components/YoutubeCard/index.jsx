import React from "react";
import YoutubeThumbnail from "../YoutubeThumbnail";
import "./YoutubeCard.css";

function YoutubeCard(props) {
  const { text129, address, className, youtubeThumbnailProps } = props;

  return (
    <div className={`youtube-card ${className || ""}`}>
      <YoutubeThumbnail
        youtubeThumbnail={youtubeThumbnailProps.youtubeThumbnail}
        className={youtubeThumbnailProps.className}
        antDesignplayCircleOutlinedProps={youtubeThumbnailProps.antDesignplayCircleOutlinedProps}
      />
      <div className="group-162">
        <div className="text valign-text-middle overpass-bold-shark-24px">{text129}</div>
        <p className="address-1 valign-text-middle overpass-semi-bold-scarpa-flow-16px">{address}</p>
      </div>
    </div>
  );
}

export default YoutubeCard;
