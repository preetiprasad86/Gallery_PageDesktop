import React from "react";
import AntDesignplayCircleOutlined from "../AntDesignplayCircleOutlined";
import YoutubeCard from "../YoutubeCard";
import Button22 from "../Button22";
import Button8 from "../Button8";
import Footer32 from "../Footer32";
import HeaderWithBackground32 from "../HeaderWithBackground32";
import "./X05GalleryPageDesktop.css";

function X05GalleryPageDesktop(props) {
  const {
    videos,
    vector2,
    rectangle81,
    text128,
    latestVideos,
    address,
    text165,
    line4,
    line5,
    line6,
    line7,
    vector3,
    group,
    line8,
    antDesignplayCircleOutlinedProps,
    youtubeCardProps,
    youtubeCard2Props,
    youtubeCard3Props,
    youtubeCardProps2,
    youtubeCard2Props2,
    youtubeCard3Props2,
    button22Props,
    youtubeCardProps3,
    youtubeCard2Props3,
    youtubeCard3Props3,
    button8Props,
    footer3Props,
    headerWithBackground3Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x05-gallery-page-desktop screen">
        <div className="overlap-group">
          <div className="frame-1576">
            <div className="overlap-group1">
              <h1 className="title valign-text-middle typographyheadlineh2-extrabold-40">{videos}</h1>
              <div className="group-182">
                <div className="chevronleftblack24dp-1">
                  <div className="overlap-group4">
                    <img
                      className="vector"
                      src="https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector@2x.png"
                    />
                    <img className="vector-1" src={vector2} />
                  </div>
                </div>
                <div className="overlap-group2">
                  <img className="rectangle-81" src={rectangle81} />
                  <div className="rectangle-82"></div>
                  <div className="text-1 valign-text-middle overpass-bold-white-40px">{text128}</div>
                  <div className="latest-videos valign-text-middle typographybody16-regular">{latestVideos}</div>
                  <p className="address valign-text-middle overpass-semi-bold-white-16px-22">{address}</p>
                  <AntDesignplayCircleOutlined overlapGroup3={antDesignplayCircleOutlinedProps.overlapGroup3} />
                </div>
              </div>
              <div className="frame-1568">
                <div className="flex-col">
                  <YoutubeCard
                    text129={youtubeCardProps.text129}
                    address={youtubeCardProps.address}
                    youtubeThumbnailProps={youtubeCardProps.youtubeThumbnailProps}
                  />
                  <YoutubeCard
                    text129={youtubeCard2Props.text129}
                    address={youtubeCard2Props.address}
                    className={youtubeCard2Props.className}
                    youtubeThumbnailProps={youtubeCard2Props.youtubeThumbnailProps}
                  />
                  <YoutubeCard
                    text129={youtubeCard3Props.text129}
                    address={youtubeCard3Props.address}
                    className={youtubeCard3Props.className}
                    youtubeThumbnailProps={youtubeCard3Props.youtubeThumbnailProps}
                  />
                </div>
                <div className="flex-col-1">
                  <YoutubeCard
                    text129={youtubeCardProps2.text129}
                    address={youtubeCardProps2.address}
                    youtubeThumbnailProps={youtubeCardProps2.youtubeThumbnailProps}
                  />
                  <YoutubeCard
                    text129={youtubeCard2Props2.text129}
                    address={youtubeCard2Props2.address}
                    className={youtubeCard2Props2.className}
                    youtubeThumbnailProps={youtubeCard2Props2.youtubeThumbnailProps}
                  />
                  <YoutubeCard
                    text129={youtubeCard3Props2.text129}
                    address={youtubeCard3Props2.address}
                    className={youtubeCard3Props2.className}
                    youtubeThumbnailProps={youtubeCard3Props2.youtubeThumbnailProps}
                  />
                  <Button22>{button22Props.children}</Button22>
                </div>
                <div className="flex-col-2">
                  <YoutubeCard
                    text129={youtubeCardProps3.text129}
                    address={youtubeCardProps3.address}
                    youtubeThumbnailProps={youtubeCardProps3.youtubeThumbnailProps}
                  />
                  <YoutubeCard
                    text129={youtubeCard2Props3.text129}
                    address={youtubeCard2Props3.address}
                    className={youtubeCard2Props3.className}
                    youtubeThumbnailProps={youtubeCard2Props3.youtubeThumbnailProps}
                  />
                  <YoutubeCard
                    text129={youtubeCard3Props3.text129}
                    address={youtubeCard3Props3.address}
                    className={youtubeCard3Props3.className}
                    youtubeThumbnailProps={youtubeCard3Props3.youtubeThumbnailProps}
                  />
                </div>
              </div>
              <Button8>{button8Props.children}</Button8>
              <p className="text-38 typographybody16-regular">{text165}</p>
              <div className="group-89">
                <img className="line-4" src={line4} />
                <img className="line" src={line5} />
                <img className="line" src={line6} />
                <img className="line" src={line7} />
                <div className="bigrid-3x2-gap">
                  <img className="vector-2" src={vector3} />
                </div>
                <div className="bigrid-3x2-gap-1">
                  <div className="group" style={{ backgroundImage: `url(${group})` }}></div>
                </div>
                <img className="line-8" src={line8} />
              </div>
            </div>
            <Footer32 {...footer3Props} />
          </div>
          <HeaderWithBackground32 {...headerWithBackground3Props} />
        </div>
      </div>
    </div>
  );
}

export default X05GalleryPageDesktop;
