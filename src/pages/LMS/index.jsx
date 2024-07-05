// // import React, { useEffect, useState } from 'react';
// // import Layout from '@theme/Layout';
// // import TextComponent from './TextComponent';
// // import MoreAboutDocumentTypeComponent from './MoreAboutDocumentTypeComponent';
// // import HowToRegisterDocumentTypeComponent from './HowToRegisterDocumentTypeComponent';
// // import HowToAnnotateComponent from './HowToAnnotateComponent';
// // import QuestionAnswerComponent from './QuestionAnswerComponent';
// // import DocumentTypeConfigurationComponent from './DocumentTypeConfigurationComponent'; // Import new component
// // import './UniqueVideoPlayerComponent.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faVideo, faBook, faCheckCircle, faBars, faMicrophone, faGlobe } from '@fortawesome/free-solid-svg-icons';

// // const VideoPlayerComponent = () => {
// //   const [currentSection, setCurrentSection] = useState('video');
// //   const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
// //   const [videoData, setVideoData] = useState({
// //     title: 'Introduction to the course',
// //     description: 'Hello and welcome to the world of Intelligent Document Processing (IDP). Let\'s kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.',
// //     videoId: 'N0ZboK3w_Qg',
// //   });
// //   const [imageData, setImageData] = useState('');
// //   const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
// //   const [currentStatusId, setCurrentStatusId] = useState('');
// //   const [currentComponent, setCurrentComponent] = useState(null);

// //   const questions = [
// //     {
// //       question: 'Which one of these is not a recognized document structure:',
// //       options: ['Structured', 'Semi-structured', 'Unstructured', 'Non-deterministic'],
// //       correctAnswer: 'Non-deterministic',
// //     },
// //     {
// //       question: 'To register a passport as a new document type, which would you choose?',
// //       options: ['Structured', 'Semi-structured', 'Unstructured', 'ID Card'],
// //       correctAnswer: 'Semi-structured',
// //     },
// //     {
// //       question: 'Which of the following is not a data type supported currently?',
// //       options: ['Date', 'Name', 'Freeform text', 'Image'],
// //       correctAnswer: 'Image',
// //     },
// //   ];

// //   const courseContents = [
// //     {
// //       type: 'text',
// //       title: 'What is a Document Type',
// //       description: 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents'
// //     },
// //     {
// //       type: 'image',
// //       title: 'Structured Documents',
// //       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg'
// //     },
// //     {
// //       type: 'image',
// //       title: 'Semi-structured Documents',
// //       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg'
// //     },
// //     {
// //       type: 'image',
// //       title: 'Unstructured Documents',
// //       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg'
// //     },
// //     {
// //       type: 'component',
// //       title: 'More About Document Type',
// //       component: <MoreAboutDocumentTypeComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'How to Register a Document Type',
// //       component: <HowToRegisterDocumentTypeComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'Document Type Configuration',
// //       component: <DocumentTypeConfigurationComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'How to Annotate',
// //       component: <HowToAnnotateComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'Question and Answer',
// //       component: <QuestionAnswerComponent questions={questions} />
// //     },
// //   ];

// //   useEffect(() => {
// //     const tag = document.createElement('script');
// //     tag.src = 'https://www.youtube.com/iframe_api';
// //     const firstScriptTag = document.getElementsByTagName('script')[0];
// //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// //     window.onYouTubeIframeAPIReady = () => {
// //       window.player = new window.YT.Player('video-placeholder', {
// //         height: '500',
// //         width: '100%',
// //         videoId: 'N0ZboK3w_Qg',
// //         events: {
// //           onStateChange: onPlayerStateChange,
// //         },
// //       });
// //     };
// //   }, []);

// //   const changeVideo = (videoId, title, description, index, statusId) => {
// //     setCurrentSection('video');
// //     setVideoData({ videoId, title, description });
// //     setCurrentVideoIndex(index);
// //     setCurrentStatusId(statusId);
// //     setCurrentComponent(null);
// //     if (window.player && window.player.loadVideoById) {
// //       window.player.loadVideoById(videoId);
// //     }
// //   };

// //   const loadTextComponent = (title, description, index) => {
// //     setCurrentSection('text');
// //     setVideoData({ videoId: '', title, description });
// //     setCurrentVideoIndex(index);
// //     setCurrentComponent(null);
// //     if (window.player && window.player.stopVideo) {
// //       window.player.stopVideo();
// //     }
// //   };

// //   const loadImageComponent = (imageUrl, title, index) => {
// //     setCurrentSection('image');
// //     setImageData(imageUrl);
// //     setVideoData({ videoId: '', title, description: '' });
// //     setCurrentVideoIndex(index);
// //     setCurrentComponent(null);
// //     if (window.player && window.player.stopVideo) {
// //       window.player.stopVideo();
// //     }
// //   };

// //   const loadComponent = (title, component, index) => {
// //     setCurrentSection('component');
// //     setVideoData({ videoId: '', title, description: '' });
// //     setCurrentStatusId('');
// //     setCurrentComponent(component);
// //     setCurrentVideoIndex(index);
// //     if (window.player && window.player.stopVideo) {
// //       window.player.stopVideo();
// //     }
// //   };

// //   const onPlayerStateChange = (event) => {
// //     if (event.data === window.YT.PlayerState.ENDED) {
// //       markAsCompleted(currentVideoIndex, currentStatusId);
// //     }
// //   };

// //   const markAsCompleted = (index, statusId) => {
// //     const updatedCompletedVideos = [...completedVideos];
// //     updatedCompletedVideos[index] = true;
// //     setCompletedVideos(updatedCompletedVideos);

// //     const videoItem = document.getElementById(`video-${index}`);
// //     if (videoItem) {
// //       videoItem.style.color = 'green';
// //     }
// //   };

// //   const toggleSection = (header) => {
// //     const content = header.nextElementSibling;
// //     if (content.style.display === 'none' || content.style.display === '') {
// //       content.style.display = 'block';
// //     } else {
// //       content.style.display = 'none';
// //     }
// //   };

// //   const toggleCourseContent = () => {
// //     setIsCourseContentVisible(!isCourseContentVisible);
// //   };

// //   const nextItem = () => {
// //     if (currentVideoIndex < courseContents.length - 1) {
// //       const nextIndex = currentVideoIndex + 1;
// //       setCurrentVideoIndex(nextIndex);
// //       const nextContent = courseContents[nextIndex];
// //       loadContentByType(nextContent, nextIndex);
// //     }
// //   };

// //   const previousItem = () => {
// //     if (currentVideoIndex > 0) {
// //       const prevIndex = currentVideoIndex - 1;
// //       setCurrentVideoIndex(prevIndex);
// //       const prevContent = courseContents[prevIndex];
// //       loadContentByType(prevContent, prevIndex);
// //     }
// //   };

// //   const loadContentByType = (content, index) => {
// //     switch (content.type) {
// //       case 'text':
// //         loadTextComponent(content.title, content.description, index);
// //         break;
// //       case 'image':
// //         loadImageComponent(content.imageUrl, content.title, index);
// //         break;
// //       case 'component':
// //         loadComponent(content.title, content.component, index);
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <div className="unique-container">
// //         {isCourseContentVisible && (
// //           <div className="unique-course-content">
// //             <div className="menu-toggle" onClick={toggleCourseContent}>
// //               <FontAwesomeIcon icon={faBars} /> Hide menu
// //             </div>
// //             <h2>Course Content</h2>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents', 0)}>
// //                 Introduction to Document Type
// //               </div>
// //               <div className="unique-section-content">
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 Types of Documents
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg', 'Structured Documents', 1)}>
// //                     Structured
// //                   </li>
// //                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg', 'Semi-structured Documents', 2)}>
// //                     Semi-structured
// //                   </li>
// //                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg', 'Unstructured Documents', 3)}>
// //                     Unstructured
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 More on Document Types
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li onClick={() => loadComponent('More About Document Type', <MoreAboutDocumentTypeComponent />, 4)}>
// //                     <FontAwesomeIcon icon={faBook} className="icon" /> More About Document Type
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 How to Register a Document Type
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li id="video-3" onClick={() => loadComponent('How to Register a Document Type', <HowToRegisterDocumentTypeComponent />, 5)}>
// //                     <FontAwesomeIcon icon={faBook} className="icon" /> How to Register a Document Type
// //                   </li>
// //                   <li onClick={() => loadComponent('Document Type Configuration', <DocumentTypeConfigurationComponent />, 6)}>
// //                     <FontAwesomeIcon icon={faVideo} className="icon" /> Document Type Configuration
// //                   </li>
// //                   <li onClick={() => loadTextComponent('Navigating to Document Types', 'Description for Navigating to Document Types', 7)}>Navigating to Document Types</li>
// //                   <li onClick={() => loadTextComponent('Zero Shot Learning', 'Description for Zero Shot Learning', 8)}>Zero Shot Learning</li>
// //                   <li onClick={() => loadTextComponent('Exploring the Taxonomy', 'Description for Exploring the Taxonomy', 9)}>Exploring the Taxonomy</li>
// //                   <li onClick={() => loadTextComponent('Adding a New Attribute', 'Description for Adding a New Attribute', 10)}>Adding a New Attribute</li>
// //                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Redrawing the Annotation Box', 'Description for Redrawing the Annotation Box', 11)}>Redrawing the Annotation Box</li>
// //                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Editing the Extracted Value', 'Description for Editing the Extracted Value', 12)}>Editing the Extracted Value</li>
// //                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Deleting an Extracted Attribute', 'Description for Deleting an Extracted Attribute', 13)}>Deleting an Extracted Attribute</li>
// //                   <li onClick={() => loadTextComponent('Primer on Data Types', 'Description for Primer on Data Types', 14)}>Primer on Data Types</li>
// //                   <li onClick={() => loadTextComponent('All About Tables', 'Description for All About Tables', 15)}>All About Tables</li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 Resources
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul style={{ marginLeft: '20px' }}>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>How-to guides</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Listing</a></li>
// //                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Creating a document type</a></li>
// //                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> A guide to annotation</a></li>
// //                   </ul>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Samples</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="https://drive.google.com/drive/folders/14tNYn4GQTG-0Y_PDxn7RlZya_svEjPWE?usp=sharing" target="_blank">Sample documents</a></li>
// //                   </ul>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Session Recording</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="#">Link to recording</a></li>
// //                   </ul>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Feedback</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXsrO2ntD0nvX-F1GsYSQdaU5ayzMGmc7TdJlqv7iDhTNfgg/viewform" target="_blank">Feedback</a></li>
// //                   </ul>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={() => loadQuestionComponent()}>
// //                 Question and Answer
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li>Question and Answer</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         <div className={`unique-video-section ${isCourseContentVisible ? '' : 'full-width'}`}>
// //           {!isCourseContentVisible && (
// //             <div className="menu-toggle" onClick={toggleCourseContent}>
// //               <FontAwesomeIcon icon={faBars} /> Show menu
// //             </div>
// //           )}
// //           <h1 className="unique-video-title">IDP: Module 1 - Registering Document Types</h1>
// //           {currentSection === 'video' && (
// //             <>
// //               <h3 id="unique-video-title">{videoData.title}</h3>
// //               <p className="unique-video-description" id="unique-video-description">
// //                 {videoData.description}
// //               </p>
// //             </>
// //           )}
// //           <div className="unique-video-player-container" id="unique-video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
// //             <div id="video-placeholder"></div>
// //           </div>
// //           {currentSection === 'text' && (
// //             <div className="content-section">
// //               <TextComponent
// //                 title={videoData.title}
// //                 description={videoData.description}
// //               />
// //             </div>
// //           )}
// //           {currentSection === 'image' && (
// //             <div className="unique-image-container">
// //               <img src={imageData} alt={videoData.title} style={{ maxWidth: '100%' }} />
// //               <h3>{videoData.title}</h3>
// //             </div>
// //           )}
// //           {currentSection === 'component' && (
// //             <div className="content-section">
// //               {currentComponent}
// //             </div>
// //           )}
// //           <div className="navigation-buttons">
// //             <button onClick={previousItem} disabled={currentVideoIndex === 0}>
// //               Previous
// //             </button>
// //             <button onClick={nextItem} disabled={currentVideoIndex === courseContents.length - 1}>
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default VideoPlayerComponent;

// // import React, { useEffect, useState } from 'react';
// // import Layout from '@theme/Layout';
// // import TextComponent from './TextComponent';
// // import MoreAboutDocumentTypeComponent from './MoreAboutDocumentTypeComponent';
// // import HowToRegisterDocumentTypeComponent from './HowToRegisterDocumentTypeComponent';
// // import HowToAnnotateComponent from './HowToAnnotateComponent';
// // import QuestionAnswerComponent from './QuestionAnswerComponent';
// // import DocumentTypeConfigurationComponent from './DocumentTypeConfigurationComponent'; // Import new component
// // import './UniqueVideoPlayerComponent.css';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faVideo, faBook, faCheckCircle, faBars, faMicrophone, faGlobe } from '@fortawesome/free-solid-svg-icons';

// // const VideoPlayerComponent = () => {
// //   const [currentSection, setCurrentSection] = useState('video');
// //   const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
// //   const [videoData, setVideoData] = useState({
// //     title: 'Introduction to the course',
// //     description: 'Hello and welcome to the world of Intelligent Document Processing (IDP). Let\'s kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.',
// //     videoId: 'N0ZboK3w_Qg',
// //   });
// //   const [imageData, setImageData] = useState('');
// //   const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
// //   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
// //   const [currentStatusId, setCurrentStatusId] = useState('');
// //   const [currentComponent, setCurrentComponent] = useState(null);

// //   const questions = [
// //     {
// //       question: 'Which one of these is not a recognized document structure:',
// //       options: ['Structured', 'Semi-structured', 'Unstructured', 'Non-deterministic'],
// //       correctAnswer: 'Non-deterministic',
// //     },
// //     {
// //       question: 'To register a passport as a new document type, which would you choose?',
// //       options: ['Structured', 'Semi-structured', 'Unstructured', 'ID Card'],
// //       correctAnswer: 'Semi-structured',
// //     },
// //     {
// //       question: 'Which of the following is not a data type supported currently?',
// //       options: ['Date', 'Name', 'Freeform text', 'Image'],
// //       correctAnswer: 'Image',
// //     },
// //   ];

// //   const courseContents = [
// //     {
// //       type: 'text',
// //       title: 'What is a Document Type',
// //       description: 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents'
// //     },
// //     {
// //       type: 'image',
// //       title: 'Structured Documents',
// //       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg'
// //     },
// //     {
// //       type: 'image',
// //       title: 'Semi-structured Documents',
// //       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg'
// //     },
// //     {
// //       type: 'image',
// //       title: 'Unstructured Documents',
// //       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg'
// //     },
// //     {
// //       type: 'component',
// //       title: 'More About Document Type',
// //       component: <MoreAboutDocumentTypeComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'How to Register a Document Type',
// //       component: <HowToRegisterDocumentTypeComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'Document Type Configuration',
// //       component: <DocumentTypeConfigurationComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'How to Annotate',
// //       component: <HowToAnnotateComponent />
// //     },
// //     {
// //       type: 'component',
// //       title: 'Question and Answer',
// //       component: <QuestionAnswerComponent questions={questions} />
// //     },
// //   ];

// //   useEffect(() => {
// //     const tag = document.createElement('script');
// //     tag.src = 'https://www.youtube.com/iframe_api';
// //     const firstScriptTag = document.getElementsByTagName('script')[0];
// //     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// //     window.onYouTubeIframeAPIReady = () => {
// //       window.player = new window.YT.Player('video-placeholder', {
// //         height: '500',
// //         width: '100%',
// //         videoId: 'N0ZboK3w_Qg',
// //         events: {
// //           onStateChange: onPlayerStateChange,
// //         },
// //       });
// //     };
// //   }, []);

// //   const changeVideo = (videoId, title, description, index, statusId) => {
// //     setCurrentSection('video');
// //     setVideoData({ videoId, title, description });
// //     setCurrentVideoIndex(index);
// //     setCurrentStatusId(statusId);
// //     setCurrentComponent(null);
// //     if (window.player && window.player.loadVideoById) {
// //       window.player.loadVideoById(videoId);
// //     }
// //   };

// //   const loadTextComponent = (title, description, index) => {
// //     setCurrentSection('text');
// //     setVideoData({ videoId: '', title, description });
// //     setCurrentVideoIndex(index);
// //     setCurrentComponent(null);
// //     if (window.player && window.player.stopVideo) {
// //       window.player.stopVideo();
// //     }
// //   };

// //   const loadImageComponent = (imageUrl, title, index) => {
// //     setCurrentSection('image');
// //     setImageData(imageUrl);
// //     setVideoData({ videoId: '', title, description: '' });
// //     setCurrentVideoIndex(index);
// //     setCurrentComponent(null);
// //     if (window.player && window.player.stopVideo) {
// //       window.player.stopVideo();
// //     }
// //   };

// //   const loadComponent = (title, component, index) => {
// //     setCurrentSection('component');
// //     setVideoData({ videoId: '', title, description: '' });
// //     setCurrentStatusId('');
// //     setCurrentComponent(component);
// //     setCurrentVideoIndex(index);
// //     if (window.player && window.player.stopVideo) {
// //       window.player.stopVideo();
// //     }
// //   };

// //   const onPlayerStateChange = (event) => {
// //     if (event.data === window.YT.PlayerState.ENDED) {
// //       markAsCompleted(currentVideoIndex, currentStatusId);
// //     }
// //   };

// //   const markAsCompleted = (index, statusId) => {
// //     const updatedCompletedVideos = [...completedVideos];
// //     updatedCompletedVideos[index] = true;
// //     setCompletedVideos(updatedCompletedVideos);

// //     const videoItem = document.getElementById(`video-${index}`);
// //     if (videoItem) {
// //       videoItem.style.color = 'green';
// //     }
// //   };

// //   const toggleSection = (header) => {
// //     const content = header.nextElementSibling;
// //     if (content.style.display === 'none' || content.style.display === '') {
// //       content.style.display = 'block';
// //     } else {
// //       content.style.display = 'none';
// //     }
// //   };

// //   const toggleCourseContent = () => {
// //     setIsCourseContentVisible(!isCourseContentVisible);
// //   };

// //   const nextItem = () => {
// //     if (currentVideoIndex < courseContents.length - 1) {
// //       const nextIndex = currentVideoIndex + 1;
// //       setCurrentVideoIndex(nextIndex);
// //       const nextContent = courseContents[nextIndex];
// //       loadContentByType(nextContent, nextIndex);
// //     }
// //   };

// //   const previousItem = () => {
// //     if (currentVideoIndex > 0) {
// //       const prevIndex = currentVideoIndex - 1;
// //       setCurrentVideoIndex(prevIndex);
// //       const prevContent = courseContents[prevIndex];
// //       loadContentByType(prevContent, prevIndex);
// //     }
// //   };

// //   const loadContentByType = (content, index) => {
// //     switch (content.type) {
// //       case 'text':
// //         loadTextComponent(content.title, content.description, index);
// //         break;
// //       case 'image':
// //         loadImageComponent(content.imageUrl, content.title, index);
// //         break;
// //       case 'component':
// //         loadComponent(content.title, content.component, index);
// //         break;
// //       default:
// //         break;
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <div className="unique-container">
// //         {isCourseContentVisible && (
// //           <div className="unique-course-content">
// //             <div className="menu-toggle" onClick={toggleCourseContent}>
// //               <FontAwesomeIcon icon={faBars} /> Hide menu
// //             </div>
// //             <h2>Course Content</h2>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents', 0)}>
// //                 Introduction to Document Type
// //               </div>
// //               <div className="unique-section-content">
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 Types of Documents
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg', 'Structured Documents', 1)}>
// //                     Structured
// //                   </li>
// //                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg', 'Semi-structured Documents', 2)}>
// //                     Semi-structured
// //                   </li>
// //                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg', 'Unstructured Documents', 3)}>
// //                     Unstructured
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 More on Document Types
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li onClick={() => loadComponent('More About Document Type', <MoreAboutDocumentTypeComponent />, 4)}>
// //                     <FontAwesomeIcon icon={faBook} className="icon" /> More About Document Type
// //                   </li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 How to Register a Document Type
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li id="video-3" onClick={() => loadComponent('How to Register a Document Type', <HowToRegisterDocumentTypeComponent />, 5)}>
// //                     <FontAwesomeIcon icon={faBook} className="icon" /> How to Register a Document Type
// //                   </li>
// //                   <li onClick={() => loadComponent('Document Type Configuration', <DocumentTypeConfigurationComponent />, 6)}>
// //                     <FontAwesomeIcon icon={faVideo} className="icon" /> Document Type Configuration
// //                   </li>
// //                   <li onClick={() => loadTextComponent('Navigating to Document Types', 'Description for Navigating to Document Types', 7)}>Navigating to Document Types</li>
// //                   <li onClick={() => loadTextComponent('Zero Shot Learning', 'Description for Zero Shot Learning', 8)}>Zero Shot Learning</li>
// //                   <li onClick={() => loadTextComponent('Exploring the Taxonomy', 'Description for Exploring the Taxonomy', 9)}>Exploring the Taxonomy</li>
// //                   <li onClick={() => loadTextComponent('Adding a New Attribute', 'Description for Adding a New Attribute', 10)}>Adding a New Attribute</li>
// //                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Redrawing the Annotation Box', 'Description for Redrawing the Annotation Box', 11)}>Redrawing the Annotation Box</li>
// //                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Editing the Extracted Value', 'Description for Editing the Extracted Value', 12)}>Editing the Extracted Value</li>
// //                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Deleting an Extracted Attribute', 'Description for Deleting an Extracted Attribute', 13)}>Deleting an Extracted Attribute</li>
// //                   <li onClick={() => loadTextComponent('Primer on Data Types', 'Description for Primer on Data Types', 14)}>Primer on Data Types</li>
// //                   <li onClick={() => loadTextComponent('All About Tables', 'Description for All About Tables', 15)}>All About Tables</li>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
// //                 Resources
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul style={{ marginLeft: '20px' }}>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>How-to guides</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Listing</a></li>
// //                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Creating a document type</a></li>
// //                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> A guide to annotation</a></li>
// //                   </ul>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Samples</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="https://drive.google.com/drive/folders/14tNYn4GQTG-0Y_PDxn7RlZya_svEjPWE?usp=sharing" target="_blank">Sample documents</a></li>
// //                   </ul>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Session Recording</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="#">Link to recording</a></li>
// //                   </ul>
// //                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Feedback</li>
// //                   <ul style={{ marginLeft: '20px' }}>
// //                     <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXsrO2ntD0nvX-F1GsYSQdaU5ayzMGmc7TdJlqv7iDhTNfgg/viewform" target="_blank">Feedback</a></li>
// //                   </ul>
// //                 </ul>
// //               </div>
// //             </div>
// //             <div className="unique-section">
// //               <div className="unique-section-header" onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>
// //                 Question and Answer
// //               </div>
// //               <div className="unique-section-content">
// //                 <ul>
// //                   <li onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>Question and Answer</li>
// //                 </ul>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //         <div className={`unique-video-section ${isCourseContentVisible ? '' : 'full-width'}`}>
// //           {!isCourseContentVisible && (
// //             <div className="menu-toggle" onClick={toggleCourseContent}>
// //               <FontAwesomeIcon icon={faBars} /> Show menu
// //             </div>
// //           )}
// //           <h1 className="unique-video-title">IDP: Module 1 - Registering Document Types</h1>
// //           {currentSection === 'video' && (
// //             <>
// //               <h3 id="unique-video-title">{videoData.title}</h3>
// //               <p className="unique-video-description" id="unique-video-description">
// //                 {videoData.description}
// //               </p>
// //             </>
// //           )}
// //           <div className="unique-video-player-container" id="unique-video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
// //             <div id="video-placeholder"></div>
// //           </div>
// //           {currentSection === 'text' && (
// //             <div className="content-section">
// //               <TextComponent
// //                 title={videoData.title}
// //                 description={videoData.description}
// //               />
// //             </div>
// //           )}
// //           {currentSection === 'image' && (
// //             <div className="unique-image-container">
// //               <img src={imageData} alt={videoData.title} style={{ maxWidth: '100%' }} />
// //               <h3>{videoData.title}</h3>
// //             </div>
// //           )}
// //           {currentSection === 'component' && (
// //             <div className="content-section">
// //               {currentComponent}
// //             </div>
// //           )}
// //           <div className="navigation-buttons">
// //             <button onClick={previousItem} disabled={currentVideoIndex === 0}>
// //               Previous
// //             </button>
// //             <button onClick={nextItem} disabled={currentVideoIndex === courseContents.length - 1}>
// //               Next
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </Layout>
// //   );
// // };

// // export default VideoPlayerComponent;

// import React, { useEffect, useState } from 'react';
// import Layout from '@theme/Layout';
// import TextComponent from './TextComponent';
// import MoreAboutDocumentTypeComponent from './MoreAboutDocumentTypeComponent';
// import HowToRegisterDocumentTypeComponent from './HowToRegisterDocumentTypeComponent';
// import HowToAnnotateComponent from './HowToAnnotateComponent';
// import QuestionAnswerComponent from './QuestionAnswerComponent';
// import DocumentTypeConfigurationComponent from './DocumentTypeConfigurationComponent'; // Import new component
// import './UniqueVideoPlayerComponent.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVideo, faBook, faCheckCircle, faBars, faMicrophone, faGlobe, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

// const VideoPlayerComponent = () => {
//   const [currentSection, setCurrentSection] = useState('video');
//   const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
//   const [videoData, setVideoData] = useState({
//     title: 'Introduction to the course',
//     description: 'Hello and welcome to the world of Intelligent Document Processing (IDP). Let\'s kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.',
//     videoId: 'N0ZboK3w_Qg',
//   });
//   const [imageData, setImageData] = useState('');
//   const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [currentStatusId, setCurrentStatusId] = useState('');
//   const [currentComponent, setCurrentComponent] = useState(null);

//   const questions = [
//     {
//       question: 'Which one of these is not a recognized document structure:',
//       options: ['Structured', 'Semi-structured', 'Unstructured', 'Non-deterministic'],
//       correctAnswer: 'Non-deterministic',
//     },
//     {
//       question: 'To register a passport as a new document type, which would you choose?',
//       options: ['Structured', 'Semi-structured', 'Unstructured', 'ID Card'],
//       correctAnswer: 'Semi-structured',
//     },
//     {
//       question: 'Which of the following is not a data type supported currently?',
//       options: ['Date', 'Name', 'Freeform text', 'Image'],
//       correctAnswer: 'Image',
//     },
//   ];

//   const courseContents = [
//     {
//       type: 'text',
//       title: 'What is a Document Type',
//       description: 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents'
//     },
//     {
//       type: 'image',
//       title: 'Structured Documents',
//       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg'
//     },
//     {
//       type: 'image',
//       title: 'Semi-structured Documents',
//       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg'
//     },
//     {
//       type: 'image',
//       title: 'Unstructured Documents',
//       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg'
//     },
//     {
//       type: 'component',
//       title: 'More About Document Type',
//       component: <MoreAboutDocumentTypeComponent />
//     },
//     {
//       type: 'component',
//       title: 'How to Register a Document Type',
//       component: <HowToRegisterDocumentTypeComponent />
//     },
//     {
//       type: 'component',
//       title: 'Document Type Configuration',
//       component: <DocumentTypeConfigurationComponent />
//     },
//     {
//       type: 'component',
//       title: 'How to Annotate',
//       component: <HowToAnnotateComponent />
//     },
//     {
//       type: 'component',
//       title: 'Question and Answer',
//       component: <QuestionAnswerComponent questions={questions} />
//     },
//   ];

//   useEffect(() => {
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       window.player = new window.YT.Player('video-placeholder', {
//         height: '500',
//         width: '100%',
//         videoId: 'N0ZboK3w_Qg',
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
//     setCurrentComponent(null);
//     if (window.player && window.player.loadVideoById) {
//       window.player.loadVideoById(videoId);
//     }
//   };

//   const loadTextComponent = (title, description, index) => {
//     setCurrentSection('text');
//     setVideoData({ videoId: '', title, description });
//     setCurrentVideoIndex(index);
//     setCurrentComponent(null);
//     if (window.player && window.player.stopVideo) {
//       window.player.stopVideo();
//     }
//   };

//   const loadImageComponent = (imageUrl, title, index) => {
//     setCurrentSection('image');
//     setImageData(imageUrl);
//     setVideoData({ videoId: '', title, description: '' });
//     setCurrentVideoIndex(index);
//     setCurrentComponent(null);
//     if (window.player && window.player.stopVideo) {
//       window.player.stopVideo();
//     }
//   };

//   const loadComponent = (title, component, index) => {
//     setCurrentSection('component');
//     setVideoData({ videoId: '', title, description: '' });
//     setCurrentStatusId('');
//     setCurrentComponent(component);
//     setCurrentVideoIndex(index);
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

//   const toggleCourseContent = () => {
//     setIsCourseContentVisible(!isCourseContentVisible);
//   };

//   const nextItem = () => {
//     if (currentVideoIndex < courseContents.length - 1) {
//       const nextIndex = currentVideoIndex + 1;
//       setCurrentVideoIndex(nextIndex);
//       const nextContent = courseContents[nextIndex];
//       loadContentByType(nextContent, nextIndex);
//     }
//   };

//   const previousItem = () => {
//     if (currentVideoIndex > 0) {
//       const prevIndex = currentVideoIndex - 1;
//       setCurrentVideoIndex(prevIndex);
//       const prevContent = courseContents[prevIndex];
//       loadContentByType(prevContent, prevIndex);
//     }
//   };

//   const loadContentByType = (content, index) => {
//     switch (content.type) {
//       case 'text':
//         loadTextComponent(content.title, content.description, index);
//         break;
//       case 'image':
//         loadImageComponent(content.imageUrl, content.title, index);
//         break;
//       case 'component':
//         loadComponent(content.title, content.component, index);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Layout>
//       <div className={`unique-container ${isCourseContentVisible ? '' : 'collapsed'}`}>
//         {isCourseContentVisible && (
//           <div className="unique-course-content">
//             <div className="menu-toggle" onClick={toggleCourseContent}>
//               <FontAwesomeIcon icon={faAngleLeft} /> Hide menu
//             </div>
//             <h2>Course Content</h2>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents', 0)}>
//                 Introduction to Document Type
//               </div>
//               <div className="unique-section-content">
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 Types of Documents
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg', 'Structured Documents', 1)}>
//                     Structured
//                   </li>
//                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg', 'Semi-structured Documents', 2)}>
//                     Semi-structured
//                   </li>
//                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg', 'Unstructured Documents', 3)}>
//                     Unstructured
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 More on Document Types
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li onClick={() => loadComponent('More About Document Type', <MoreAboutDocumentTypeComponent />, 4)}>
//                     <FontAwesomeIcon icon={faBook} className="icon" /> More About Document Type
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 How to Register a Document Type
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li id="video-3" onClick={() => loadComponent('How to Register a Document Type', <HowToRegisterDocumentTypeComponent />, 5)}>
//                     <FontAwesomeIcon icon={faBook} className="icon" /> How to Register a Document Type
//                   </li>
//                   <li onClick={() => loadComponent('Document Type Configuration', <DocumentTypeConfigurationComponent />, 6)}>
//                     <FontAwesomeIcon icon={faVideo} className="icon" /> Document Type Configuration
//                   </li>
//                   <li onClick={() => loadTextComponent('Navigating to Document Types', 'Description for Navigating to Document Types', 7)}>Navigating to Document Types</li>
//                   <li onClick={() => loadTextComponent('Zero Shot Learning', 'Description for Zero Shot Learning', 8)}>Zero Shot Learning</li>
//                   <li onClick={() => loadTextComponent('Exploring the Taxonomy', 'Description for Exploring the Taxonomy', 9)}>Exploring the Taxonomy</li>
//                   <li onClick={() => loadTextComponent('Adding a New Attribute', 'Description for Adding a New Attribute', 10)}>Adding a New Attribute</li>
//                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Redrawing the Annotation Box', 'Description for Redrawing the Annotation Box', 11)}>Redrawing the Annotation Box</li>
//                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Editing the Extracted Value', 'Description for Editing the Extracted Value', 12)}>Editing the Extracted Value</li>
//                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Deleting an Extracted Attribute', 'Description for Deleting an Extracted Attribute', 13)}>Deleting an Extracted Attribute</li>
//                   <li onClick={() => loadTextComponent('Primer on Data Types', 'Description for Primer on Data Types', 14)}>Primer on Data Types</li>
//                   <li onClick={() => loadTextComponent('All About Tables', 'Description for All About Tables', 15)}>All About Tables</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 Resources
//               </div>
//               <div className="unique-section-content">
//                 <ul style={{ marginLeft: '20px' }}>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>How-to guides</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Listing</a></li>
//                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Creating a document type</a></li>
//                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> A guide to annotation</a></li>
//                   </ul>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Samples</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="https://drive.google.com/drive/folders/14tNYn4GQTG-0Y_PDxn7RlZya_svEjPWE?usp=sharing" target="_blank">Sample documents</a></li>
//                   </ul>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Session Recording</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="#">Link to recording</a></li>
//                   </ul>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Feedback</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXsrO2ntD0nvX-F1GsYSQdaU5ayzMGmc7TdJlqv7iDhTNfgg/viewform" target="_blank">Feedback</a></li>
//                   </ul>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>
//                 Question and Answer
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>Question and Answer</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className={`unique-video-section ${isCourseContentVisible ? '' : 'full-width'}`}>
//           {!isCourseContentVisible && (
//             <div className="menu-toggle" onClick={toggleCourseContent}>
//               <FontAwesomeIcon icon={faAngleRight} /> Show menu
//             </div>
//           )}
//           <h1 className="unique-video-title">IDP: Module 1 - Registering Document Types</h1>
//           {currentSection === 'video' && (
//             <>
//               <h3 id="unique-video-title">{videoData.title}</h3>
//               <p className="unique-video-description" id="unique-video-description">
//                 {videoData.description}
//               </p>
//             </>
//           )}
//           <div className="unique-video-player-container" id="unique-video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
//             <div id="video-placeholder"></div>
//           </div>
//           {currentSection === 'text' && (
//             <div className="content-section">
//               <TextComponent
//                 title={videoData.title}
//                 description={videoData.description}
//               />
//             </div>
//           )}
//           {currentSection === 'image' && (
//             <div className="unique-image-container">
//               <img src={imageData} alt={videoData.title} style={{ maxWidth: '100%' }} />
//               <h3>{videoData.title}</h3>
//             </div>
//           )}
//           {currentSection === 'component' && (
//             <div className="content-section">
//               {currentComponent}
//             </div>
//           )}
//           <div className="navigation-buttons">
//             <button onClick={previousItem} disabled={currentVideoIndex === 0}>
//               Previous
//             </button>
//             <button onClick={nextItem} disabled={currentVideoIndex === courseContents.length - 1}>
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default VideoPlayerComponent;

// import React, { useEffect, useState } from 'react';
// import Layout from '@theme/Layout';
// import TextComponent from './TextComponent';
// import MoreAboutDocumentTypeComponent from './MoreAboutDocumentTypeComponent';
// import HowToRegisterDocumentTypeComponent from './HowToRegisterDocumentTypeComponent';
// import HowToAnnotateComponent from './HowToAnnotateComponent';
// import QuestionAnswerComponent from './QuestionAnswerComponent';
// import DocumentTypeConfigurationComponent from './DocumentTypeConfigurationComponent'; // Import new component
// import './UniqueVideoPlayerComponent.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faVideo, faBook, faCheckCircle, faBars, faMicrophone, faGlobe, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const VideoPlayerComponent = () => {
//   const [currentSection, setCurrentSection] = useState('video');
//   const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
//   const [videoData, setVideoData] = useState({
//     title: 'Introduction to the course',
//     description: 'Hello and welcome to the world of Intelligent Document Processing (IDP). Let\'s kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.',
//     videoId: 'N0ZboK3w_Qg',
//   });
//   const [imageData, setImageData] = useState('');
//   const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [currentStatusId, setCurrentStatusId] = useState('');
//   const [currentComponent, setCurrentComponent] = useState(null);

//   const questions = [
//     {
//       question: 'Which one of these is not a recognized document structure:',
//       options: ['Structured', 'Semi-structured', 'Unstructured', 'Non-deterministic'],
//       correctAnswer: 'Non-deterministic',
//     },
//     {
//       question: 'To register a passport as a new document type, which would you choose?',
//       options: ['Structured', 'Semi-structured', 'Unstructured', 'ID Card'],
//       correctAnswer: 'Semi-structured',
//     },
//     {
//       question: 'Which of the following is not a data type supported currently?',
//       options: ['Date', 'Name', 'Freeform text', 'Image'],
//       correctAnswer: 'Image',
//     },
//   ];

//   const courseContents = [
//     {
//       type: 'text',
//       title: 'What is a Document Type',
//       description: 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents'
//     },
//     {
//       type: 'image',
//       title: 'Structured Documents',
//       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg'
//     },
//     {
//       type: 'image',
//       title: 'Semi-structured Documents',
//       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg'
//     },
//     {
//       type: 'image',
//       title: 'Unstructured Documents',
//       imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg'
//     },
//     {
//       type: 'component',
//       title: 'More About Document Type',
//       component: <MoreAboutDocumentTypeComponent />
//     },
//     {
//       type: 'component',
//       title: 'How to Register a Document Type',
//       component: <HowToRegisterDocumentTypeComponent />
//     },
//     {
//       type: 'component',
//       title: 'Document Type Configuration',
//       component: <DocumentTypeConfigurationComponent />
//     },
//     {
//       type: 'component',
//       title: 'How to Annotate',
//       component: <HowToAnnotateComponent />
//     },
//     {
//       type: 'component',
//       title: 'Question and Answer',
//       component: <QuestionAnswerComponent questions={questions} />
//     },
//   ];

//   useEffect(() => {
//     const tag = document.createElement('script');
//     tag.src = 'https://www.youtube.com/iframe_api';
//     const firstScriptTag = document.getElementsByTagName('script')[0];
//     firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//     window.onYouTubeIframeAPIReady = () => {
//       window.player = new window.YT.Player('video-placeholder', {
//         height: '500',
//         width: '100%',
//         videoId: 'N0ZboK3w_Qg',
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
//     setCurrentComponent(null);
//     if (window.player && window.player.loadVideoById) {
//       window.player.loadVideoById(videoId);
//     }
//   };

//   const loadTextComponent = (title, description, index) => {
//     setCurrentSection('text');
//     setVideoData({ videoId: '', title, description });
//     setCurrentVideoIndex(index);
//     setCurrentComponent(null);
//     if (window.player && window.player.stopVideo) {
//       window.player.stopVideo();
//     }
//   };

//   const loadImageComponent = (imageUrl, title, index) => {
//     setCurrentSection('image');
//     setImageData(imageUrl);
//     setVideoData({ videoId: '', title, description: '' });
//     setCurrentVideoIndex(index);
//     setCurrentComponent(null);
//     if (window.player && window.player.stopVideo) {
//       window.player.stopVideo();
//     }
//   };

//   const loadComponent = (title, component, index) => {
//     setCurrentSection('component');
//     setVideoData({ videoId: '', title, description: '' });
//     setCurrentStatusId('');
//     setCurrentComponent(component);
//     setCurrentVideoIndex(index);
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

//   const toggleCourseContent = () => {
//     setIsCourseContentVisible(!isCourseContentVisible);
//   };

//   const nextItem = () => {
//     if (currentVideoIndex < courseContents.length - 1) {
//       const nextIndex = currentVideoIndex + 1;
//       setCurrentVideoIndex(nextIndex);
//       const nextContent = courseContents[nextIndex];
//       loadContentByType(nextContent, nextIndex);
//     }
//   };

//   const previousItem = () => {
//     if (currentVideoIndex > 0) {
//       const prevIndex = currentVideoIndex - 1;
//       setCurrentVideoIndex(prevIndex);
//       const prevContent = courseContents[prevIndex];
//       loadContentByType(prevContent, prevIndex);
//     }
//   };

//   const loadContentByType = (content, index) => {
//     switch (content.type) {
//       case 'text':
//         loadTextComponent(content.title, content.description, index);
//         break;
//       case 'image':
//         loadImageComponent(content.imageUrl, content.title, index);
//         break;
//       case 'component':
//         loadComponent(content.title, content.component, index);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <Layout>
//       <div className="unique-container">
//         {isCourseContentVisible && (
//           <div className="unique-course-content">
//             {/* <div className="menu-toggle" onClick={toggleCourseContent}>
//               <FontAwesomeIcon icon={faBars} /> Hide menu
//             </div> */}
//             <h2>Course Content</h2>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents', 0)}>
//                 Introduction to Document Type
//               </div>
//               <div className="unique-section-content">
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 Types of Documents
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg', 'Structured Documents', 1)}>
//                     Structured
//                   </li>
//                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg', 'Semi-structured Documents', 2)}>
//                     Semi-structured
//                   </li>
//                   <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg', 'Unstructured Documents', 3)}>
//                     Unstructured
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 More on Document Types
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li onClick={() => loadComponent('More About Document Type', <MoreAboutDocumentTypeComponent />, 4)}>
//                     <FontAwesomeIcon icon={faBook} className="icon" /> More About Document Type
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 How to Register a Document Type
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li id="video-3" onClick={() => loadComponent('How to Register a Document Type', <HowToRegisterDocumentTypeComponent />, 5)}>
//                     <FontAwesomeIcon icon={faBook} className="icon" /> How to Register a Document Type
//                   </li>
//                   <li onClick={() => loadComponent('Document Type Configuration', <DocumentTypeConfigurationComponent />, 6)}>
//                     <FontAwesomeIcon icon={faVideo} className="icon" /> Document Type Configuration
//                   </li>
//                   <li onClick={() => loadTextComponent('Navigating to Document Types', 'Description for Navigating to Document Types', 7)}>Navigating to Document Types</li>
//                   <li onClick={() => loadTextComponent('Zero Shot Learning', 'Description for Zero Shot Learning', 8)}>Zero Shot Learning</li>
//                   <li onClick={() => loadTextComponent('Exploring the Taxonomy', 'Description for Exploring the Taxonomy', 9)}>Exploring the Taxonomy</li>
//                   <li onClick={() => loadTextComponent('Adding a New Attribute', 'Description for Adding a New Attribute', 10)}>Adding a New Attribute</li>
//                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Redrawing the Annotation Box', 'Description for Redrawing the Annotation Box', 11)}>Redrawing the Annotation Box</li>
//                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Editing the Extracted Value', 'Description for Editing the Extracted Value', 12)}>Editing the Extracted Value</li>
//                   <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Deleting an Extracted Attribute', 'Description for Deleting an Extracted Attribute', 13)}>Deleting an Extracted Attribute</li>
//                   <li onClick={() => loadTextComponent('Primer on Data Types', 'Description for Primer on Data Types', 14)}>Primer on Data Types</li>
//                   <li onClick={() => loadTextComponent('All About Tables', 'Description for All About Tables', 15)}>All About Tables</li>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
//                 Resources
//               </div>
//               <div className="unique-section-content">
//                 <ul style={{ marginLeft: '20px' }}>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>How-to guides</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Listing</a></li>
//                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Creating a document type</a></li>
//                     <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> A guide to annotation</a></li>
//                   </ul>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Samples</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="https://drive.google.com/drive/folders/14tNYn4GQTG-0Y_PDxn7RlZya_svEjPWE?usp=sharing" target="_blank">Sample documents</a></li>
//                   </ul>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Session Recording</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="#">Link to recording</a></li>
//                   </ul>
//                   <li style={{ fontWeight: 'bold', color: 'grey' }}>Feedback</li>
//                   <ul style={{ marginLeft: '20px' }}>
//                     <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXsrO2ntD0nvX-F1GsYSQdaU5ayzMGmc7TdJlqv7iDhTNfgg/viewform" target="_blank">Feedback</a></li>
//                   </ul>
//                 </ul>
//               </div>
//             </div>
//             <div className="unique-section">
//               <div className="unique-section-header" onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>
//                 Question and Answer
//               </div>
//               <div className="unique-section-content">
//                 <ul>
//                   <li onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>Question and Answer</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         )}
//         <div className={`unique-video-section ${isCourseContentVisible ? '' : 'full-width'}`}>
//           {/* {!isCourseContentVisible && (
//             <div className="menu-toggle" onClick={toggleCourseContent}>
//               <FontAwesomeIcon icon={faBars} /> Show menu
//             </div>
//           )} */}
//           <h1 className="unique-video-title">IDP: Module 1 - Registering Document Types</h1>
//           {currentSection === 'video' && (
//             <>
//               <h3 id="unique-video-title">{videoData.title}</h3>
//               <p className="unique-video-description" id="unique-video-description">
//                 {videoData.description}
//               </p>
//             </>
//           )}
//           <div className="unique-video-player-container" id="unique-video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
//             <div id="video-placeholder"></div>
//           </div>
//           {currentSection === 'text' && (
//             <div className="content-section">
//               <TextComponent
//                 title={videoData.title}
//                 description={videoData.description}
//               />
//             </div>
//           )}
//           {currentSection === 'image' && (
//             <div className="unique-image-container">
//               <img src={imageData} alt={videoData.title} style={{ maxWidth: '100%' }} />
//               <h3>{videoData.title}</h3>
//             </div>
//           )}
//           {currentSection === 'component' && (
//             <div className="content-section">
//               {currentComponent}
//             </div>
//           )}
//           <div className="navigation-buttons">
//             <button onClick={previousItem} disabled={currentVideoIndex === 0}>
//               Previous
//             </button>
//             <button onClick={nextItem} disabled={currentVideoIndex === courseContents.length - 1}>
//               Next
//             </button>
//           </div>
//         </div>
//         <div className="menu-toggle-btn" onClick={toggleCourseContent}>
//           <FontAwesomeIcon icon={isCourseContentVisible ? faChevronLeft : faChevronRight} />
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default VideoPlayerComponent;


import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import TextComponent from './TextComponent';
import MoreAboutDocumentTypeComponent from './MoreAboutDocumentTypeComponent';
import HowToRegisterDocumentTypeComponent from './HowToRegisterDocumentTypeComponent';
import HowToAnnotateComponent from './HowToAnnotateComponent';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import DocumentTypeConfigurationComponent from './DocumentTypeConfigurationComponent'; // Import new component
import './UniqueVideoPlayerComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faBook, faCheckCircle, faBars, faMicrophone, faGlobe, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const VideoPlayerComponent = () => {
  const [currentSection, setCurrentSection] = useState('video');
  const [isCourseContentVisible, setIsCourseContentVisible] = useState(true);
  const [videoData, setVideoData] = useState({
    title: 'Introduction to the course',
    description: 'Hello and welcome to the world of Intelligent Document Processing (IDP). Let\'s kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.',
    videoId: 'N0ZboK3w_Qg',
  });
  const [imageData, setImageData] = useState('');
  const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentStatusId, setCurrentStatusId] = useState('');
  const [currentComponent, setCurrentComponent] = useState(null);

  const questions = [
    {
      question: 'Which one of these is not a recognized document structure:',
      options: ['Structured', 'Semi-structured', 'Unstructured', 'Non-deterministic'],
      correctAnswer: 'Non-deterministic',
    },
    {
      question: 'To register a passport as a new document type, which would you choose?',
      options: ['Structured', 'Semi-structured', 'Unstructured', 'ID Card'],
      correctAnswer: 'Semi-structured',
    },
    {
      question: 'Which of the following is not a data type supported currently?',
      options: ['Date', 'Name', 'Freeform text', 'Image'],
      correctAnswer: 'Image',
    },
  ];

  const courseContents = [
    {
      type: 'text',
      title: 'What is a Document Type',
      description: 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents'
    },
    {
      type: 'image',
      title: 'Structured Documents',
      imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg'
    },
    {
      type: 'image',
      title: 'Semi-structured Documents',
      imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg'
    },
    {
      type: 'image',
      title: 'Unstructured Documents',
      imageUrl: 'https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg'
    },
    {
      type: 'component',
      title: 'More About Document Type',
      component: <MoreAboutDocumentTypeComponent />
    },
    {
      type: 'component',
      title: 'How to Register a Document Type',
      component: <HowToRegisterDocumentTypeComponent />
    },
    {
      type: 'component',
      title: 'Document Type Configuration',
      component: <DocumentTypeConfigurationComponent />
    },
    {
      type: 'component',
      title: 'How to Annotate',
      component: <HowToAnnotateComponent />
    },
    {
      type: 'component',
      title: 'Question and Answer',
      component: <QuestionAnswerComponent questions={questions} />
    },
  ];

  useEffect(() => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player('video-placeholder', {
        height: '500',
        width: '100%',
        videoId: 'N0ZboK3w_Qg',
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
    setCurrentComponent(null);
    if (window.player && window.player.loadVideoById) {
      window.player.loadVideoById(videoId);
    }
  };

  const loadTextComponent = (title, description, index) => {
    setCurrentSection('text');
    setVideoData({ videoId: '', title, description });
    setCurrentVideoIndex(index);
    setCurrentComponent(null);
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadImageComponent = (imageUrl, title, index) => {
    setCurrentSection('image');
    setImageData(imageUrl);
    setVideoData({ videoId: '', title, description: '' });
    setCurrentVideoIndex(index);
    setCurrentComponent(null);
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadComponent = (title, component, index) => {
    setCurrentSection('component');
    setVideoData({ videoId: '', title, description: '' });
    setCurrentStatusId('');
    setCurrentComponent(component);
    setCurrentVideoIndex(index);
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

  const toggleCourseContent = () => {
    setIsCourseContentVisible(!isCourseContentVisible);
  };

  const nextItem = () => {
    if (currentVideoIndex < courseContents.length - 1) {
      const nextIndex = currentVideoIndex + 1;
      setCurrentVideoIndex(nextIndex);
      const nextContent = courseContents[nextIndex];
      loadContentByType(nextContent, nextIndex);
    }
  };

  const previousItem = () => {
    if (currentVideoIndex > 0) {
      const prevIndex = currentVideoIndex - 1;
      setCurrentVideoIndex(prevIndex);
      const prevContent = courseContents[prevIndex];
      loadContentByType(prevContent, prevIndex);
    }
  };

  const loadContentByType = (content, index) => {
    switch (content.type) {
      case 'text':
        loadTextComponent(content.title, content.description, index);
        break;
      case 'image':
        loadImageComponent(content.imageUrl, content.title, index);
        break;
      case 'component':
        loadComponent(content.title, content.component, index);
        break;
      default:
        break;
    }
  };

  return (
    <Layout>
      <div className={`unique-container ${isCourseContentVisible ? '' : 'collapsed'}`}>
        {isCourseContentVisible && (
          <div className="unique-course-content">
            <h2>Course Content</h2>
            <div className="unique-section">
              <div className="unique-section-header" onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents', 0)}>
                Introduction to Document Type
              </div>
              <div className="unique-section-content">
              </div>
            </div>
            <div className="unique-section">
              <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
                Types of Documents
              </div>
              <div className="unique-section-content">
                <ul>
                  <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg', 'Structured Documents', 1)}>
                    Structured
                  </li>
                  <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg', 'Semi-structured Documents', 2)}>
                    Semi-structured
                  </li>
                  <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg', 'Unstructured Documents', 3)}>
                    Unstructured
                  </li>
                </ul>
              </div>
            </div>
            <div className="unique-section">
              <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
                More on Document Types
              </div>
              <div className="unique-section-content">
                <ul>
                  <li onClick={() => loadComponent('More About Document Type', <MoreAboutDocumentTypeComponent />, 4)}>
                    <FontAwesomeIcon icon={faBook} className="icon" /> More About Document Type
                  </li>
                </ul>
              </div>
            </div>
            <div className="unique-section">
              <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
                How to Register a Document Type
              </div>
              <div className="unique-section-content">
                <ul>
                  <li id="video-3" onClick={() => loadComponent('How to Register a Document Type', <HowToRegisterDocumentTypeComponent />, 5)}>
                    <FontAwesomeIcon icon={faBook} className="icon" /> How to Register a Document Type
                  </li>
                  <li onClick={() => loadComponent('Document Type Configuration', <DocumentTypeConfigurationComponent />, 6)}>
                    <FontAwesomeIcon icon={faVideo} className="icon" /> Document Type Configuration
                  </li>
                  <li onClick={() => loadTextComponent('Navigating to Document Types', 'Description for Navigating to Document Types', 7)}>Navigating to Document Types</li>
                  <li onClick={() => loadTextComponent('Zero Shot Learning', 'Description for Zero Shot Learning', 8)}>Zero Shot Learning</li>
                  <li onClick={() => loadTextComponent('Exploring the Taxonomy', 'Description for Exploring the Taxonomy', 9)}>Exploring the Taxonomy</li>
                  <li onClick={() => loadTextComponent('Adding a New Attribute', 'Description for Adding a New Attribute', 10)}>Adding a New Attribute</li>
                  <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Redrawing the Annotation Box', 'Description for Redrawing the Annotation Box', 11)}>Redrawing the Annotation Box</li>
                  <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Editing the Extracted Value', 'Description for Editing the Extracted Value', 12)}>Editing the Extracted Value</li>
                  <li style={{ marginLeft: '20px' }} onClick={() => loadTextComponent('Deleting an Extracted Attribute', 'Description for Deleting an Extracted Attribute', 13)}>Deleting an Extracted Attribute</li>
                  <li onClick={() => loadTextComponent('Primer on Data Types', 'Description for Primer on Data Types', 14)}>Primer on Data Types</li>
                  <li onClick={() => loadTextComponent('All About Tables', 'Description for All About Tables', 15)}>All About Tables</li>
                </ul>
              </div>
            </div>
            <div className="unique-section">
              <div className="unique-section-header" onClick={(e) => toggleSection(e.target)}>
                Resources
              </div>
              <div className="unique-section-content">
                <ul style={{ marginLeft: '20px' }}>
                  <li style={{ fontWeight: 'bold', color: 'grey' }}>How-to guides</li>
                  <ul style={{ marginLeft: '20px' }}>
                    <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Listing</a></li>
                    <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> Creating a document type</a></li>
                    <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank"><FontAwesomeIcon icon={faGlobe} className="icon" /> A guide to annotation</a></li>
                  </ul>
                  <li style={{ fontWeight: 'bold', color: 'grey' }}>Samples</li>
                  <ul style={{ marginLeft: '20px' }}>
                    <li><a href="https://drive.google.com/drive/folders/14tNYn4GQTG-0Y_PDxn7RlZya_svEjPWE?usp=sharing" target="_blank">Sample documents</a></li>
                  </ul>
                  <li style={{ fontWeight: 'bold', color: 'grey' }}>Session Recording</li>
                  <ul style={{ marginLeft: '20px' }}>
                    <li><a href="#">Link to recording</a></li>
                  </ul>
                  <li style={{ fontWeight: 'bold', color: 'grey' }}>Feedback</li>
                  <ul style={{ marginLeft: '20px' }}>
                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSfXsrO2ntD0nvX-F1GsYSQdaU5ayzMGmc7TdJlqv7iDhTNfgg/viewform" target="_blank">Feedback</a></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div className="unique-section">
              <div className="unique-section-header" onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>
                Question and Answer
              </div>
              <div className="unique-section-content">
                <ul>
                  <li onClick={() => loadComponent('Question and Answer', <QuestionAnswerComponent questions={questions} />, 16)}>Question and Answer</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        <div className={`unique-video-section ${isCourseContentVisible ? '' : 'full-width'}`}>
          <h1 className="unique-video-title">IDP: Module 1 - Registering Document Types</h1>
          {currentSection === 'video' && (
            <>
              <h3 id="unique-video-title">{videoData.title}</h3>
              <p className="unique-video-description" id="unique-video-description">
                {videoData.description}
              </p>
            </>
          )}
          <div className="unique-video-player-container" id="unique-video-player-container" style={{ display: currentSection === 'video' ? 'block' : 'none' }}>
            <div id="video-placeholder"></div>
          </div>
          {currentSection === 'text' && (
            <div className="content-section">
              <TextComponent
                title={videoData.title}
                description={videoData.description}
              />
            </div>
          )}
          {currentSection === 'image' && (
            <div className="unique-image-container">
              <img src={imageData} alt={videoData.title} style={{ maxWidth: '100%' }} />
              <h3>{videoData.title}</h3>
            </div>
          )}
          {currentSection === 'component' && (
            <div className="content-section">
              {currentComponent}
            </div>
          )}
          <div className="navigation-buttons">
            <button onClick={previousItem} disabled={currentVideoIndex === 0}>
              Previous
            </button>
            <button onClick={nextItem} disabled={currentVideoIndex === courseContents.length - 1}>
              Next
            </button>
          </div>
        </div>
        <div
          className="menu-toggle-btn"
          onClick={toggleCourseContent}
          style={{ left: isCourseContentVisible ? '255px' : '10px' }} // Adjust left value based on course content visibility
        >
          <FontAwesomeIcon icon={isCourseContentVisible ? faChevronLeft : faChevronRight} />
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayerComponent;
