import React from "react";

const AbpNews = () => {
  return (
    <div className="live-news-container">
      <div className="video-wrapper">
        <iframe
          width="300" 
          height="200"
          src="https://www.youtube.com/embed/nyd-xznCpJc?si=bhfoZCMYLca9QdDP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
        </iframe>
      </div>
    </div>
  );
};

export default AbpNews;
