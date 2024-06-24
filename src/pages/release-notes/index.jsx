import React, { useEffect } from 'react';

const VideoPlayerComponent = () => {
  useEffect(() => {
    // Load YouTube IFrame Player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube Player API
    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player('video-placeholder', {
        height: '400', // Adjusted height
        width: '700', // Adjusted width
        videoId: 'dQw4w9WgXcQ',
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  let completedVideos = [false, false, false];
  let currentVideoIndex = 0;
  let currentStatusId = '';

  const changeVideo = (videoId, title, description, index, statusId) => {
    currentVideoIndex = index;
    currentStatusId = statusId;
    window.player.loadVideoById(videoId);
    document.getElementById('video-title').innerText = title;
    document.getElementById('video-details').innerText = description;
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      markAsCompleted(currentVideoIndex, currentStatusId);
    }
  };

  const markAsCompleted = (index, statusId) => {
    completedVideos[index] = true;
    const sectionStatus = document.getElementById(statusId);
    const totalVideos = parseInt(sectionStatus.innerText.split('/')[1], 10);
    const completedCount = completedVideos.filter(Boolean).length;

    // Update individual video item to indicate completion
    document.getElementById(`video-${index}`).style.color = 'green';

    // Count completed videos in this section
    const sectionIndex = statusId.split('-')[1];
    const sectionContent = document.querySelectorAll('.section-content')[sectionIndex - 1];
    const completedVideosInSection = sectionContent.querySelectorAll('li[style*="color: green"]').length;

    // Update section status
    sectionStatus.innerText = `${completedVideosInSection}/${totalVideos}`;
    console.log(`Completed count: ${completedCount}, Section: ${sectionIndex}, Section completed count: ${completedVideosInSection}/${totalVideos}`);
  };

  const toggleSection = (header) => {
    const content = header.nextElementSibling;
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    } else {
      content.style.display = 'none';
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>IDP Deep Dive</h1>
      <div id="video-player-container">
        <div id="video-placeholder"></div>
      </div>
      <div id="video-description" style={{ marginTop: '20px', width: '700px' }}>
        <h3 id="video-title">Introduction to the course</h3>
        <p id="video-details">Description of the current video will appear here.</p>
      </div>
      <div style={{ flex: 1, padding: '20px', borderLeft: '1px solid #ddd', maxHeight: '600px', overflowY: 'auto', width: '700px' }}>
        <h2>Course Content</h2>
        <div className="section">
          <div className="section-header" style={{ cursor: 'pointer', fontWeight: 'bold', margin: '10px 0' }} onClick={(e) => toggleSection(e.target)}>Section 1: Introduction (New) (<span id="section-1-status">0/1</span> | 6min)</div>
          <div className="section-content" style={{ display: 'none', paddingLeft: '20px' }}>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li id="video-0" style={{ margin: '10px 0', cursor: 'pointer', color: '#007bff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={() => changeVideo('dQw4w9WgXcQ', 'Introduction to the course', 'Step-by-Step Guide to Creating a Document Type for Classification Model in IDP Tool', 0, 'section-1-status')}>
                1. Introduction
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="section-header" style={{ cursor: 'pointer', fontWeight: 'bold', margin: '10px 0' }} onClick={(e) => toggleSection(e.target)}>Section 2: Introduction to IDP (New) (<span id="section-2-status">0/2</span> | 1hr)</div>
          <div className="section-content" style={{ display: 'none', paddingLeft: '20px' }}>
            <ul style={{ listStyleType: 'none', padding: '0' }}>
              <li id="video-1" style={{ margin: '10px 0', cursor: 'pointer', color: '#007bff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={() => changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 1, 'section-2-status')}>
                2. Mastering the IDP Tool: Document Upload and Value Extraction Demo (2min)
              </li>
              <li id="video-2" style={{ margin: '10px 0', cursor: 'pointer', color: '#007bff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} onClick={() => changeVideo('L_jWHffIx5E', 'Technical Communications', 'Technical Communications', 2, 'section-2-status')}>
                3. Document TYPE (6min)
              </li>
            </ul>
          </div>
        </div>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default VideoPlayerComponent;
