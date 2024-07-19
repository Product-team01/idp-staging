import React from 'react';

const AnnotatingTables = () => {
  const videoStyle = {
    width: '560px',
    height: '315px',
    marginBottom: '20px'
  };

  return (
    <div>
      <h2>Annotating Tables</h2>
      <p>There are two methods to create / annotate a new table:</p>
      <ul>
        <li>From the taxonomy</li>
        <li>Using the table tool in the toolbox</li>
      </ul>
      <h3>From the taxonomy</h3>
      <ol>
        <li>Click on + Add New</li>
        <li>Enter a name for the table</li>
        <li>Choose the table data type. The annotation tool switches automatically to the Table tool</li>
        <li>Draw the bounding box around the table</li>
        <li>Enter the number of rows and columns</li>
        <li>Adjust the rows and columns on the canvas to align with the table</li>
        <li>Confirm if the first row is the header</li>
        <li>Save</li>
        <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/table_1.mp4"
          title="Annotating Tables Video"
          style={videoStyle}
          allowFullScreen
        ></iframe>
      </ol>
      <h3>From the canvas</h3>
      <ol>
        <li>Click on the Table annotation tool on the toolbox (or hit T on the keyboard)</li>
        <li>Draw the bounding box around the table. The side panel opens where the table details can be inputted</li>
        <li>Enter a name for the table</li>
        <li>Enter the number of rows and columns</li>
        <li>Adjust the rows and columns on the canvas to align with the table</li>
        <li>Confirm if the first row is the header</li>
        <li>Save</li>
      </ol>
    </div>
  );
};

export default AnnotatingTables;
