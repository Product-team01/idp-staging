import React from 'react';
import './howToRegisterDocumentType.css';

const ConnectionManagerInstructions = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';

  return (
    <div className="module-overview">
      
      <h3>Navigation</h3>
      <p>In the home screen of the Vue.ai Platform, navigate to Data Hub → Connection Manager → Sources.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240711-063851.png`} alt="Navigate to Sources" title="Navigate to Sources" />
      </div>

      <h3>Create a New Source</h3>
      <p>In the Sources Listing page, click on Create New.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}newsource.png`} alt="Create New Source" title="Create New Source" />
      </div>

      <p>In the ensuing form, provide a name that you will use to identify this source.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}sourcename.png`} alt="Source Name" title="Source Name" />
      </div>

      <p>Next, choose a Source type from the list available. In this example, we have chosen Posgres.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}sourceselect.png`} alt="Select Source Type" title="Select Source Type" />
      </div>

      <p>On selecting a source type, some details will be auto-populated. Fill in the rest of the details.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}image-20240711-073247.png`} alt="Fill in Details" title="Fill in Details" />
      </div>

      <p>Next, Test the Connection and once successful, hit Create to register the Source.</p>
      <div className="image-container">
        <img src={`${imageBaseUrl}testconn.png`} alt="Test Connection" title="Test Connection" />
      </div>
    </div>
  );
};

export default ConnectionManagerInstructions;
