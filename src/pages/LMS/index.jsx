// import React, { useEffect } from 'react';
// import Layout from '@theme/Layout';
// import './VideoPlayerComponent.css';

// const VideoPlayerComponent = () => {
//   useEffect(() => {
//     // Load YouTube IFrame Player API script
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     // Initialize YouTube Player API
//     window.onYouTubeIframeAPIReady = () => {
//       window.player = new window.YT.Player('video-placeholder', {
//         height: '500',
//         width: '100%',
//         videoId: 'dQw4w9WgXcQ',
//         events: {
//           onStateChange: onPlayerStateChange,
//         },
//       });
//     };
//   }, []);

//   let completedVideos = [false, false, false];
//   let currentVideoIndex = 0;
//   let currentStatusId = '';

//   const changeVideo = (videoId, title, description, index, statusId) => {
//     currentVideoIndex = index;
//     currentStatusId = statusId;
//     window.player.loadVideoById(videoId);
//     document.getElementById('video-title').innerText = title;
//     document.getElementById('video-details').innerText = description;
//   };

//   const onPlayerStateChange = (event) => {
//     if (event.data === window.YT.PlayerState.ENDED) {
//       markAsCompleted(currentVideoIndex, currentStatusId);
//     }
//   };

//   const markAsCompleted = (index, statusId) => {
//     completedVideos[index] = true;
//     const sectionStatus = document.getElementById(statusId);
//     const totalVideos = parseInt(sectionStatus.innerText.split('/')[1], 10);
//     const completedCount = completedVideos.filter(Boolean).length;

//     // Update individual video item to indicate completion
//     document.getElementById(`video-${index}`).style.color = 'green';

//     // Count completed videos in this section
//     const sectionIndex = statusId.split('-')[1];
//     const sectionContent = document.querySelectorAll('.section-content')[sectionIndex - 1];
//     const completedVideosInSection = sectionContent.querySelectorAll('li[style*="color: green"]').length;

//     // Update section status
//     sectionStatus.innerText = `${completedVideosInSection}/${totalVideos}`;
//     console.log(`Completed count: ${completedCount}, Section: ${sectionIndex}, Section completed count: ${completedVideosInSection}/${totalVideos}`);
//   };

//   const toggleSection = (header) => {
//     const content = header.nextElementSibling;
//     if (content.style.display === 'none' || content.style.display === '') {
//       content.style.display = 'block';
//     } else {
//       content.style.display = 'none';
//     }
//   };

//   return (
//     <Layout>
//       <div className="container">
//         <div className="video-section">
//           <h1 className="video-title">IDP Deep Dive</h1>
//           <div className="video-player-container" id="video-player-container">
//             <div id="video-placeholder"></div>
//           </div>
//           <div className="video-description" id="video-description">
//             <h3 id="video-title">Introduction to the course</h3>
//             <p id="video-details">Description of the current video will appear here.</p>
//           </div>
//         </div>
//         <div className="course-content">
//           <h2>Course Content</h2>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>Section 1: Introduction (New) (<span id="section-1-status">0/1</span> | 6min)</div>
//             <div className="section-content">
//               <ul>
//                 <li id="video-0" onClick={() => changeVideo('dQw4w9WgXcQ', 'Introduction to the course', 'Step-by-Step Guide to Creating a Document Type for Classification Model in IDP Tool', 0, 'section-1-status')}>
//                   1. Introduction
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>Section 2: Introduction to IDP (New) (<span id="section-2-status">0/2</span> | 1hr)</div>
//             <div className="section-content">
//               <ul>
//                 <li id="video-1" onClick={() => changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 1, 'section-2-status')}>
//                   2. Mastering the IDP Tool: Document Upload and Value Extraction Demo (2min)
//                 </li>
//                 <li id="video-2" onClick={() => changeVideo('lPJlgbvEZys', 'Document Type', 'Description for document type here', 2, 'section-2-status')}>
//                   3. Document type (6min)
//                 </li>
//               </ul>
//             </div>
//           </div>
//           {/* Add more sections as needed */}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default VideoPlayerComponent;


import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import TextComponent from './TextComponent';
import './VideoPlayerComponent.css';

const VideoPlayerComponent = () => {
  const [currentSection, setCurrentSection] = useState('video'); // 'video' or 'text'
  const [videoData, setVideoData] = useState({
    videoId: 'dQw4w9WgXcQ',
    title: 'Introduction to the course',
    description: 'Description of the current video will appear here.',
  });

  useEffect(() => {
    // Load YouTube IFrame Player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Initialize YouTube Player API
    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player('video-placeholder', {
        height: '500',
        width: '100%',
        videoId: 'dQw4w9WgXcQ',
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  const changeVideo = (videoId, title, description) => {
    setCurrentSection('video');
    setVideoData({ videoId, title, description });
    if (window.player && window.player.loadVideoById) {
      window.player.loadVideoById(videoId);
    }
  };

  const loadTextComponent = (title, description) => {
    setCurrentSection('text');
    setVideoData({ videoId: '', title, description });
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.ENDED) {
      markAsCompleted(currentVideoIndex, currentStatusId);
    }
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
    <Layout>
      <div className="container">
        <div className="video-section">
          <h1 className="video-title">IDP Deep Dive</h1>
          <div className="video-player-container" id="video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
            <div id="video-placeholder"></div>
          </div>
          {currentSection === 'text' && (
            <TextComponent
              title={videoData.title}
              description={videoData.description}
            />
          )}
          <div className="video-description" id="video-description">
            <h3 id="video-title">{videoData.title}</h3>
            <p id="video-details">{videoData.description}</p>
          </div>
        </div>
        <div className="course-content">
          <h2>Course Content</h2>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 1: Introduction (New) (<span id="section-1-status">0/1</span> | 6min)
            </div>
            <div className="section-content">
              <ul>
                <li
                  id="video-0"
                  onClick={() =>
                    changeVideo('dQw4w9WgXcQ', 'Introduction to the course', 'Step-by-Step Guide to Creating a Document Type for Classification Model in IDP Tool')
                  }
                >
                  1. Introduction
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 2: Introduction to IDP (New) (<span id="section-2-status">0/2</span> | 1hr)
            </div>
            <div className="section-content">
              <ul>
                <li
                  id="video-1"
                  onClick={() =>
                    changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo')
                  }
                >
                  2. Mastering the IDP Tool: Document Upload and Value Extraction Demo (2min)
                </li>
                <li
                  id="video-2"
                  onClick={() => changeVideo('lPJlgbvEZys', 'Document Type', 'Description for document type here')}
                >
                  3. Document type (6min)
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 3: Text Only
            </div>
            <div className="section-content">
              <ul>
                <li onClick={() => loadTextComponent('Section 3: Text Component', 'This is a text-only section that loads specific information related to this section.')}>
                  4. Text Component
                </li>
              </ul>
            </div>
          </div>
          {/* Add more sections as needed */}
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayerComponent;
