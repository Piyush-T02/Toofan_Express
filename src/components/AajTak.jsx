import React from "react";

const AajTak = () => {
  return (
    <div className="live-news-container">
      <div className="video-wrapper">
      <iframe 
        width="300" 
        height="200"
        src="https://www.youtube.com/embed/Nq2wYlWFucg?si=1tmCvYPW43yACsRy"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      </div>
    </div>
  );
};

export default AajTak;
