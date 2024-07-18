import React from 'react';

const HowToRegisterDocumentTypeComponent = () => {
  const imageStyle = {
    width: '600px', // Set the desired width
    height: '300px', // Set the desired height
    objectFit: 'cover', // Ensure images fit within the specified dimensions
    marginBottom: '20px' // Add some space below each image
  };

  return (
    <div>
      <h1>How to Register a Document Type</h1>

      <h2>Introduction</h2>
      <p>
        Need a quick and easy way to define and extract specific fields of data from large quantities of documents? Creating a custom document type enables you to define the attributes you want extracted. With one-shot learning, our AI will scale and extract the desired data from all documents classified as the same type. In this demo, we'll explore how to create a document type to build your first classification model.
      </p>

      <h2>Navigation</h2>
      <img src="https://d1r1e7xjkfj7nz.cloudfront.net/type1.png" alt="Navigation" title="Navigation" style={imageStyle} />

      <p>
        To begin, navigate from the Vue Home Page. Hover over the Data Hub’s Document Manager and click on "Document Types" on the navigation bar to land on the Document Types Listing page.
      </p>

      <h2>Creating a Document Type</h2>

      <h3>Upload</h3>
      <img src="https://d1r1e7xjkfj7nz.cloudfront.net/type7.png" alt="Upload" title="Upload" style={imageStyle} />

      <ul>
        <li>From the document type listing, click the ‘+new document type’ button and provide a name.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/type8.png" alt="New Document Type" title="New Document Type" style={imageStyle} />
        <li>Select a layout that best describes the structure of your document. Vue's out-of-the-box models will use this information to extract and derive a base taxonomy for you.</li>
        <li>Upload your sample document by either dragging and dropping the file into the dropbox or by clicking the ‘browse’ button to select from your device.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/type9.png" alt="Upload Document" title="Upload Document" style={imageStyle} />
        <li>Once you have uploaded your document, you will be able to go to the next step to validate your taxonomy. A taxonomy is a hierarchical list of attributes that will be extracted for each document of this document type.</li>
      </ul>

      <h3>Taxonomy</h3>

      <ul>
        <li>Our AI analyzes and predicts a base taxonomy for you that you can validate, edit, add to, or delete from.</li>
        <li>To view or manage your taxonomy, click the ‘Taxonomy’ tab. Here, you can add or delete attributes as needed.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/righttabledt.png" alt="Taxonomy" title="Taxonomy" style={imageStyle} />
        <li>To add, click the ‘Add new’ button or use the ‘annotation’ tools on the toolbar. Draw an annotation box on the preview to indicate where the attribute value can be found on the document.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/annotatedt.png" alt="Annotate" title="Annotate" style={imageStyle} />
        <li>To create or edit an Attribute, provide a Name, Annotation, and any additional information like its data type and related output formatting configurations.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/righttabledt.png" alt="Edit Attribute" title="Edit Attribute" style={imageStyle} />
        <li>To validate or edit the extracted values of your taxonomy, click the ‘Page Extractions’ tab. Here, you will be able to view each extracted value and the confidence level with which it was predicted.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/pageextract.png" alt="Page Extractions" title="Page Extractions" style={imageStyle} />
        <li>To view table extractions, check the box called ‘view extractions as overlay’ on the document preview or click the ‘view’ button to view your extracted values as a table. Here, you can also enable the ‘show crops’ toggle to view a cell by cell comparison of the document annotation crops and the extracted values.</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/dt5.png" alt="View Table Extractions" title="View Table Extractions" style={imageStyle} />
      </ul>

      <p>Once the desired taxonomy has been configured, click the ‘Register’ button. Congratulations! You have now created your very own custom classification model.</p>
      <img src="https://d1r1e7xjkfj7nz.cloudfront.net/registerdt.png" alt="Register" title="Register" style={imageStyle} />
    </div>
  );
};

export default HowToRegisterDocumentTypeComponent;
