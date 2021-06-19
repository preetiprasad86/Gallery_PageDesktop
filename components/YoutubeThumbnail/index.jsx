import React from "react";
import AntDesignplayCircleOutlined from "../AntDesignplayCircleOutlined";
import "./YoutubeThumbnail.css";

function YoutubeThumbnail(props) {
  const { youtubeThumbnail, className, antDesignplayCircleOutlinedProps } = props;

  return (
    <div className={`youtube-thumbnail ${className || ""}`} style={{ backgroundImage: `url(${youtubeThumbnail})` }}>
      <AntDesignplayCircleOutlined
        overlapGroup3={antDesignplayCircleOutlinedProps.overlapGroup3}
        className={antDesignplayCircleOutlinedProps.className}
      />
    </div>
  );
}

export default YoutubeThumbnail;
