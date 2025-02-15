import React from "react";

const LiveNews = () => {
  return (
    <div className="live-news-container">
      <div className="video-wrapper">
        <iframe 
          width="300"
          height="200"
          src="https://www.youtube.com/embed/1b8bBvoIFHY?si=ssIUeYXTLlEFfQrP" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default LiveNews;
