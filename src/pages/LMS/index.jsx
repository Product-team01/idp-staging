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
import { faVideo, faBook, faCheckCircle, faBars, faMicrophone, faGlobe } from '@fortawesome/free-solid-svg-icons';

const VideoPlayerComponent = () => {
  const [currentSection, setCurrentSection] = useState('video');
  const [videoData, setVideoData] = useState({
    title: 'Introduction to the course',
    description: 'Hello and welcome to the world of Intelligent Document Processing (IDP). Let\'s kick things off with Module 1 which is all about registering Document Types. To begin, here is a short video on what IDP is all about.',
    videoId: 'N0ZboK3w_Qg',
  });
  const [imageData, setImageData] = useState('');
  const [completedVideos, setCompletedVideos] = useState([false, false, false, false]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [currentStatusId, setCurrentStatusId] = useState('');

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

  const loadImageComponent = (imageUrl, title) => {
    setCurrentSection('image');
    setImageData(imageUrl);
    setVideoData({ videoId: '', title, description: '' });
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadMoreAboutDocumentTypeComponent = () => {
    setCurrentSection('moreAboutDocumentType');
    setVideoData({ videoId: '', title: 'More About Document Type', description: '' });
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadHowToRegisterDocumentTypeComponent = () => {
    setCurrentSection('howToRegisterDocumentType');
    setVideoData({ videoId: '', title: 'How to Register a Document Type', description: '' });
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadHowToAnnotateComponent = () => {
    setCurrentSection('howToAnnotate');
    setVideoData({ videoId: '', title: 'How to Annotate', description: '' });
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadQuestionComponent = () => {
    setCurrentSection('question');
    setVideoData({ videoId: '', title: 'Question and Answer', description: '' });
    if (window.player && window.player.stopVideo) {
      window.player.stopVideo();
    }
  };

  const loadDocumentTypeConfigurationComponent = () => {
    setCurrentSection('documentTypeConfiguration');
    setVideoData({ videoId: '', title: 'Document Type Configuration', description: '' });
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

  return (
    <Layout>
      <div className="unique-container">
        <div className="unique-course-content">
          <div className="menu-toggle">
            <FontAwesomeIcon icon={faBars} /> Hide menu
          </div>
          <h2>Course Content</h2>
          <div className="unique-section">
             <div className="unique-section-header" onClick={() => loadTextComponent('What is a Document Type', 'A Document Type is any one format of Document that needs data to be extracted from. Typical Document Types include ID cards, invoices, bank statements etc. These documents contain information either as printed text or handwritten text that needs to be extracted in context. Document Types are classified into the following formats: Structured Documents, Semi-structured Documents, Unstructured Documents')}>
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
                <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training1.jpg', 'Structured Documents')}>
                   Structured
                </li>
                <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training2.jpg', 'Semi-structured Documents')}>
                   Semi-structured
                </li>
                <li onClick={() => loadImageComponent('https://d1r1e7xjkfj7nz.cloudfront.net/training3.jpg', 'Unstructured Documents')}>
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
                <li onClick={() => loadMoreAboutDocumentTypeComponent()}>
                <FontAwesomeIcon icon={faBook} /> More About Document Type
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
                <li id="video-3" onClick={() => loadHowToRegisterDocumentTypeComponent()}>
                <FontAwesomeIcon icon={faBook} /> How to Register a Document Type
                </li>
                <li onClick={() => loadDocumentTypeConfigurationComponent()}>
                <FontAwesomeIcon icon={faVideo} /> Document Type Configuration
                </li>
                <li onClick={() => loadHowToAnnotateComponent()}>
                <FontAwesomeIcon icon={faBook} /> How to Annotate
                </li>
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
                  <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Listing" target="_blank"><FontAwesomeIcon icon={faGlobe} /> Listing</a></li>
                  <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Experience%20Creation" target="_blank"><FontAwesomeIcon icon={faGlobe} /> Creating a document type</a></li>
                  <li><a href="https://idp-support.vue.ai/Document-Manager/Document%20type/Annotateguide" target="_blank"><FontAwesomeIcon icon={faGlobe} /> A guide to annotation</a></li>
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
            <div className="unique-section-header" onClick={() => loadQuestionComponent()}>
               Question and Answer
            </div>
            <div className="unique-section-content">
              <ul>
                <li>Question and Answer</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="unique-video-section">
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
          {currentSection === 'moreAboutDocumentType' && (
            <div className="content-section">
              <MoreAboutDocumentTypeComponent />
            </div>
          )}
          {currentSection === 'howToRegisterDocumentType' && (
            <div className="content-section">
              <HowToRegisterDocumentTypeComponent />
            </div>
          )}
          {currentSection === 'documentTypeConfiguration' && (
            <div className="content-section">
              <DocumentTypeConfigurationComponent />
            </div>
          )}
          {currentSection === 'howToAnnotate' && (
            <div className="content-section">
              <HowToAnnotateComponent />
            </div>
          )}
          {currentSection === 'question' && (
            <div className="content-section">
              <QuestionAnswerComponent questions={questions} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default VideoPlayerComponent;
