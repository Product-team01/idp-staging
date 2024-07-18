import React from 'react';

const AddingNewAttributeComponent = () => {
  const imageStyle = {
    width: '400px', // Set the desired width
    height: '200px', // Set the desired height
    objectFit: 'cover', // Ensure images fit within the specified dimensions
    marginBottom: '20px' // Add some space below each image
  };

  return (
    <div className="adding-new-attribute-container">
      <h1>Adding a New Attribute</h1>
      <p>The Document Type registration allows for adding a new attribute to the taxonomy. There are two ways to add a new attribute to a taxonomy:</p>
      <ul>
        <li>Through the taxonomy view</li>
        <li>Using the annotate action from the toolbox</li>
      </ul>
      
      <h2>Adding an Attribute through the Taxonomy View</h2>
      <p>Follow these steps to add an attribute through the taxonomy view:</p>
      <ol>
        <li>Navigate to the taxonomy</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/nav_to_tax.png" alt="Navigate to Taxonomy" style={imageStyle} />
        <li>Click on Add New</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/nav_to_tax.png" alt="Add New" style={imageStyle} />
        <li>In the ensuing form:</li>
        <ul>
          <li>Enter a name for the attribute</li>
          <li>Annotate the region of the attribute</li>
          <li>Choose the data type</li>
          <li>Choose a formatting option (if applicable)</li>
        </ul>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/tax_details.png" alt="Tax Details" style={imageStyle} />
      </ol>

      <h2>Using the Annotate Action from the Toolbox</h2>
      <p>Follow these steps to add an attribute using the annotate action from the toolbox:</p>
      <ol>
        <li>From the toolbox, select the Box Annotation tool</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/box_anno_select.png" alt="Box Annotation Select" style={imageStyle} />
        <li>Draw a box around the region that has the data to be extracted</li>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/drawing_box.png" alt="Drawing Box" style={imageStyle} />
        <li>In the ensuing form:</li>
        <ul>
          <li>Enter a name for the attribute</li>
          <li>Annotate the region of the attribute</li>
          <li>Choose the data type</li>
          <li>Choose a formatting option (if applicable)</li>
        </ul>
        <img src="https://d1r1e7xjkfj7nz.cloudfront.net/tax_details.png" alt="Tax Details" style={imageStyle} />
      </ol>
    </div>
  );
};

export default AddingNewAttributeComponent;
