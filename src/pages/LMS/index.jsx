// import React, { useEffect, useState } from 'react';
// import Layout from '@theme/Layout';
// import TextComponent from './TextComponent';
// import './VideoPlayerComponent.css';

// const VideoPlayerComponent = () => {
//   const [currentSection, setCurrentSection] = useState('video'); // 'video' or 'text'
//   const [videoData, setVideoData] = useState({
//     videoId: 'dQw4w9WgXcQ',
//     title: 'Introduction to the course',
//     description: 'Description of the current video will appear here.',
//   });
//   const [completedVideos, setCompletedVideos] = useState([false, false, false]);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [currentStatusId, setCurrentStatusId] = useState('');

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

//   const changeVideo = (videoId, title, description, index, statusId) => {
//     setCurrentSection('video');
//     setVideoData({ videoId, title, description });
//     setCurrentVideoIndex(index);
//     setCurrentStatusId(statusId);
//     if (window.player && window.player.loadVideoById) {
//       window.player.loadVideoById(videoId);
//     }
//   };

//   const loadTextComponent = (title, description) => {
//     setCurrentSection('text');
//     setVideoData({ videoId: '', title, description });
//     if (window.player && window.player.stopVideo) {
//       window.player.stopVideo();
//     }
//   };

//   const onPlayerStateChange = (event) => {
//     if (event.data === window.YT.PlayerState.ENDED) {
//       markAsCompleted(currentVideoIndex, currentStatusId);
//     }
//   };

//   const markAsCompleted = (index, statusId) => {
//     const updatedCompletedVideos = [...completedVideos];
//     updatedCompletedVideos[index] = true;
//     setCompletedVideos(updatedCompletedVideos);

//     const sectionStatus = document.getElementById(statusId);
//     const totalVideos = parseInt(sectionStatus.innerText.split('/')[1], 10);
//     const completedCount = updatedCompletedVideos.filter(Boolean).length;

//     // Update individual video item to indicate completion
//     const videoItem = document.getElementById(`video-${index}`);
//     if (videoItem) {
//       videoItem.style.color = 'green';
//     }

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
//           <div className="video-player-container" id="video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
//             <div id="video-placeholder"></div>
//           </div>
//           {currentSection === 'text' && (
//             <TextComponent
//               title={videoData.title}
//               description={videoData.description}
//             />
//           )}
//           <div className="video-description" id="video-description">
//             <h3 id="video-title">{videoData.title}</h3>
//             <p id="video-details">{videoData.description}</p>
//           </div>
//         </div>
//         <div className="course-content">
//           <h2>Course Content</h2>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>
//               Section 1: Introduction (New) (<span id="section-1-status">0/1</span> | 6min)
//             </div>
//             <div className="section-content">
//               <ul>
//                 <li
//                   id="video-0"
//                   onClick={() =>
//                     changeVideo('dQw4w9WgXcQ', 'Introduction to the course', 'Step-by-Step Guide to Creating a Document Type for Classification Model in IDP Tool', 0, 'section-1-status')
//                   }
//                 >
//                   1. Introduction
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>
//               Section 2: Introduction to IDP (New) (<span id="section-2-status">0/2</span> | 1hr)
//             </div>
//             <div className="section-content">
//               <ul>
//                 <li
//                   id="video-1"
//                   onClick={() =>
//                     changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 1, 'section-2-status')
//                   }
//                 >
//                   2. Mastering the IDP Tool: Document Upload and Value Extraction Demo (2min)
//                 </li>
//                 <li
//                   id="video-2"
//                   onClick={() => changeVideo('lPJlgbvEZys', 'Document Type', 'Description for document type here', 2, 'section-2-status')}
//                 >
//                   3. Document type (6min)
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>
//               Section 3: Text Only
//             </div>
//             <div className="section-content">
//               <ul>
//                 <li onClick={() => loadTextComponent('Section 3: Text Component', 'This is a text-only section that loads specific information related to this section.')}>
//                   4. Text Component
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

// import React, { useEffect, useState } from 'react';
// import Layout from '@theme/Layout';
// import TextComponent from './TextComponent';
// import './VideoPlayerComponent.css';

// const VideoPlayerComponent = () => {
//   const [currentSection, setCurrentSection] = useState('video'); // 'video' or 'text'
//   const [videoData, setVideoData] = useState({
//     videoId: 'dQw4w9WgXcQ',
//     title: 'Introduction to the course',
//     description: 'Description of the current video will appear here.',
//   });
//   const [completedVideos, setCompletedVideos] = useState([false, false, false]);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [currentStatusId, setCurrentStatusId] = useState('');

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

//   const changeVideo = (videoId, title, description, index, statusId) => {
//     setCurrentSection('video');
//     setVideoData({ videoId, title, description });
//     setCurrentVideoIndex(index);
//     setCurrentStatusId(statusId);
//     if (window.player && window.player.loadVideoById) {
//       window.player.loadVideoById(videoId);
//     }
//   };

//   const loadTextComponent = (title, description) => {
//     setCurrentSection('text');
//     setVideoData({ videoId: '', title, description });
//     if (window.player && window.player.stopVideo) {
//       window.player.stopVideo();
//     }
//   };

//   const onPlayerStateChange = (event) => {
//     if (event.data === window.YT.PlayerState.ENDED) {
//       markAsCompleted(currentVideoIndex, currentStatusId);
//     }
//   };

//   const markAsCompleted = (index, statusId) => {
//     const updatedCompletedVideos = [...completedVideos];
//     updatedCompletedVideos[index] = true;
//     setCompletedVideos(updatedCompletedVideos);

//     // Update individual video item to indicate completion
//     const videoItem = document.getElementById(`video-${index}`);
//     if (videoItem) {
//       videoItem.style.color = 'green';
//     }
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
//           <div className="video-player-container" id="video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
//             <div id="video-placeholder"></div>
//           </div>
//           {currentSection === 'text' && (
//             <TextComponent
//               title={videoData.title}
//               description={videoData.description}
//             />
//           )}
//           <div className="video-description" id="video-description">
//             <h3 id="video-title">{videoData.title}</h3>
//             <p id="video-details">{videoData.description}</p>
//           </div>
//         </div>
//         <div className="course-content">
//           <h2>Course Content</h2>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>
//               Section 1: Introduction (New) | 6min
//             </div>
//             <div className="section-content">
//               <ul>
//                 <li
//                   id="video-0"
//                   onClick={() =>
//                     changeVideo('dQw4w9WgXcQ', 'Introduction to the course', 'Step-by-Step Guide to Creating a Document Type for Classification Model in IDP Tool', 0, 'section-1-status')
//                   }
//                 >
//                   1. Introduction
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>
//               Section 2: Introduction to IDP (New) | 1hr
//             </div>
//             <div className="section-content">
//               <ul>
//                 <li
//                   id="video-1"
//                   onClick={() =>
//                     changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 1, 'section-2-status')
//                   }
//                 >
//                   2. Mastering the IDP Tool: Document Upload and Value Extraction Demo (2min)
//                 </li>
//                 <li
//                   id="video-2"
//                   onClick={() => changeVideo('lPJlgbvEZys', 'Document Type', 'Description for document type here', 2, 'section-2-status')}
//                 >
//                   3. Document type (6min)
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="section">
//             <div className="section-header" onClick={(e) => toggleSection(e.target)}>
//               Section 3: Text Only
//             </div>
//             <div className="section-content">
//               <ul>
//                 <li onClick={() => loadTextComponent('Section 3: Text Component', 'This is a text-only section that loads specific information related to this section.')}>
//                   4. Text Component
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
    videoId: 'N0ZboK3w_Qg',  // Updated video ID
    title: 'Introduction to the course',
    description: 'Description of the current video will appear here.',
  });
  const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentStatusId, setCurrentStatusId] = useState('');

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
        videoId: 'N0ZboK3w_Qg',  // Updated video ID
        events: {
          onStateChange: onPlayerStateChange,
        },
      });
    };
  }, []);

  const changeVideo = (videoId, title, description, index, statusId) => {
    setCurrentSection('video');
    setVideoData({ videoId, title, description });
    setCurrentVideoIndex(index);
    setCurrentStatusId(statusId);
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

  const markAsCompleted = (index, statusId) => {
    const updatedCompletedVideos = [...completedVideos];
    updatedCompletedVideos[index] = true;
    setCompletedVideos(updatedCompletedVideos);

    // Update individual video item to indicate completion
    const videoItem = document.getElementById(`video-${index}`);
    if (videoItem) {
      videoItem.style.color = 'green';
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
          {currentSection === 'video' && (
            <div className="video-description" id="video-description">
              <h3 id="video-title">{videoData.title}</h3>
              <p id="video-details">{videoData.description}</p>
            </div>
          )}
        </div>
        <div className="course-content">
          <h2>Course Content</h2>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 1: Introduction (New) | 6min
            </div>
            <div className="section-content">
              <ul>
                <li
                  onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents')}
                >
                  1. Introduction
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 2: Types of Documents
            </div>
            <div className="section-content">
              <ul>
                <li
                  id="video-1"
                  onClick={() =>
                    changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 1, 'section-2-status')
                  }
                >
                  2. Mastering the IDP Tool: Document Upload and Value Extraction Demo (2min)
                </li>
                <li
                  id="video-2"
                  onClick={() => changeVideo('lPJlgbvEZys', 'Document Type', 'Description for document type here', 2, 'section-2-status')}
                >
                  3. Document type (6min)
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 3: General Questions
            </div>
            <div className="section-content">
              <ul>
                <li onClick={() => loadTextComponent('Why do we need to register a Document Type?', 'A Document Type registration is a one-time process that is required to create a model that is then used for extraction from new documents of that registered type.')}>
                  4. Why do we need to register a Document Type?
                </li>
                <li onClick={() => loadTextComponent('What happens when we register a new Document Type?', 'When a new Document Type is registered, a new AI workflow. This graph is then deployed and is now ready for use. All the data that is provided during the time of registration (the taxonomy, the spatial detail of where the data is available etc.) is embedded in the model which is then used for the subsequent extraction of documents.')}>
                  5. What happens when we register a new Document Type?
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 4: How to Register a Document Type
            </div>
            <div className="section-content">
              <ul>
                <li
                  id="video-3"
                  onClick={() =>
                    changeVideo('lPJlgbvEZys', 'How to Register a Document Type', 'In this detailed tutorial, we guide you through the process of creating a document type for a classification model using the IDP (Intelligent Document Processing) tool. Whether you\'re new to IDP or looking to refine your skills, this step-by-step guide will help you master document classification and streamline your workflow.', 3, 'section-4-status')
                  }
                >
                  6. How to Register a Document Type
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-header" onClick={(e) => toggleSection(e.target)}>
              Section 5: Document Type Registration Kit
            </div>
            <div className="section-content">
              <ul>
                <li style={{ fontWeight: 'bold', color: 'white' }}>How-to guides</li>
                <ul>
                  <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank">Listing</a></li>
                  <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank">Creating a document type</a></li>
                  <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank">A guide to annotation</a></li>
                </ul>
                <li style={{ fontWeight: 'bold', color: 'white' }}>Samples</li>
                <ul>
                  <li><a href="https://drive.google.com/drive/folders/14tNYn4GQTG-0Y_PDxn7RlZya_svEjPWE?usp=sharing" target="_blank">Sample documents</a></li>
                </ul>
                <li style={{ fontWeight: 'bold', color: 'white' }}>Session Recording</li>
                <ul>
                  <li><a href="#">Link to recording</a></li>
                </ul>
                <li style={{ fontWeight: 'bold', color: 'white' }}>Feedback</li>
                <ul>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXsrO2ntD0nvX-F1GsYSQdaU5ayzMGmc7TdJlqv7iDhTNfgg/viewform" target="_blank">Feedback</a></li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayerComponent;
