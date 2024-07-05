import React, { useEffect, useState } from 'react';
import Layout from '@theme/Layout';
import TextComponent from './TextComponent';
import HowToRegisterDocumentTypeComponent from './HowToRegisterDocumentTypeComponent';
import HowToAnnotateComponent from './HowToAnnotateComponent';
import QuestionAnswerComponent from './QuestionAnswerComponent';
import DocumentTypeConfigurationComponent from './DocumentTypeConfigurationComponent';
import IntroductionToDocumentTypeComponent from './IntroductionToDocumentTypeComponent';
import BaseFormatsOfDocumentTypeComponent from './BaseFormatsOfDocumentTypeComponent';
import QuestionAnswer1Component from './QuestionAnswer1Component';
import ZeroShotLearningComponent from './ZeroShotLearningComponent';
import ExploringTheTaxonomyComponent from './ExploringTheTaxonomyComponent';
import AddingNewAttributeComponent from './AddingNewAttributeComponent';
import PrimerOnDataTypesComponent from './PrimerOnDataTypesComponent';
import QuestionAnswer2Component from './QuestionAnswer2Component';
import AllAboutTablesComponent from './AllAboutTablesComponent';
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
  const [activeTab, setActiveTab] = useState(null);

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

  const finalQuestions = [
    {
      question: 'What is the data type that you would choose for extracting a name without needing to do any transformation?',
      options: ['Free-form text', 'Alphanumeric', 'Name', 'Any of the above'],
      correctAnswer: 'Any of the above',
    },
    {
      question: 'When annotating a new attribute, would you draw the box around:',
      options: ['The attribute name', 'The attribute value', 'Both'],
      correctAnswer: 'The attribute value',
    },
    {
      question: 'Which base document type would you choose to register a Sale Deed of a property?',
      options: ['Unstructured', 'Structured', 'Semi-structured', 'Any of the above'],
      correctAnswer: 'Semi-structured',
    },
    {
      question: 'Zero shot learning results in:',
      options: ['Only sections where both the name and the value of the attribute can be identified', 'Only sections where the name alone can be identified', 'All sections where attributes can be identified'],
      correctAnswer: 'All sections where attributes can be identified',
    },
  ];

  const courseContents = [
    {
      type: 'component',
      title: 'Introduction to Document Type',
      component: <IntroductionToDocumentTypeComponent />
    },
    {
      type: 'component',
      title: 'Base Formats of Document Type',
      component: <BaseFormatsOfDocumentTypeComponent />
    },
    {
      type: 'component',
      title: 'Q & A - I ',
      component: <QuestionAnswer1Component />
    },
    {
      type: 'component',
      title: 'Zero-shot Learning',
      component: <ZeroShotLearningComponent />
    },
    {
      type: 'component',
      title: 'Exploring the Taxonomy',
      component: <ExploringTheTaxonomyComponent />
    },
    {
      type: 'component',
      title: 'Adding a New Attribute',
      component: <AddingNewAttributeComponent />
    },
    {
      type: 'component',
      title: 'Primer on Data Types',
      component: <PrimerOnDataTypesComponent />
    },
    {
      type: 'component',
      title: 'Q & A - II',
      component: <QuestionAnswer2Component />
    },
    {
      type: 'component',
      title: 'All About Tables',
      component: <AllAboutTablesComponent />
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
      title: 'Q & A - III',
      component: <QuestionAnswerComponent questions={finalQuestions} /> 
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
    setActiveTab(index);
    if (window.player && window.player.loadVideoById) {
      window.player.loadVideoById(videoId);
    }
  };

  const loadTextComponent = (title, description, index) => {
    setCurrentSection('text');
    setVideoData({ videoId: '', title, description });
    setCurrentVideoIndex(index);
    setCurrentComponent(null);
    setActiveTab(index);
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
    setActiveTab(index);
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
    setActiveTab(index);
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
      setActiveTab(nextIndex);
    }
  };

  const previousItem = () => {
    if (currentVideoIndex > 0) {
      const prevIndex = currentVideoIndex - 1;
      setCurrentVideoIndex(prevIndex);
      const prevContent = courseContents[prevIndex];
      loadContentByType(prevContent, prevIndex);
      setActiveTab(prevIndex);
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
            {courseContents.map((content, index) => (
              <div key={index} className="unique-section">
                <div className={`unique-section-header ${activeTab === index ? 'active-tab' : ''}`} onClick={() => loadContentByType(content, index)}>
                  {content.title}
                </div>
                <div className="unique-section-content"></div>
              </div>
            ))}
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
