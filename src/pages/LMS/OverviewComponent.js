import React from 'react';

const OverviewComponent = () => {
  return (
    <div>
      <h2>Introduction to the course</h2>
      <p>
        Hello and welcome to the world of Intelligent Document Processing (IDP). Let's kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.
      </p>
      <div className="video-container">
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/N0ZboK3w_Qg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Introduction to IDP"
        ></iframe>
      </div>
    </div>
  );
};

export default OverviewComponent;
