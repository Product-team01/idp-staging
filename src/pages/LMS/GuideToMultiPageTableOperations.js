import React from 'react';

const GuideToMultiPageTableOperations = () => {
  const imageBaseUrl = 'https://d1r1e7xjkfj7nz.cloudfront.net/';
  const imageStyle = {
    width: '600px', // Set the desired width
    height: '300px', // Set the desired height
    objectFit: 'cover', // Ensure images fit within the specified dimensions
    marginBottom: '20px' // Add some space below each image
  };

  return (
    <div>
      <h2>A Guide to Multi-page Table Operations</h2>
      <h3>Merging Tables</h3>
      <p>On any table, Click on the edit icon</p>
      <img src={`${imageBaseUrl}merged_1.png`} alt="Merge Tables Step 1" style={imageStyle} />
      <p>Choose the tables that you would like to merge. The list will be populated based on the tables that can be merged (based on the conditions described in the previous sub-section)</p>
      <img src={`${imageBaseUrl}merged_2.png`} alt="Merge Tables Step 2" style={imageStyle} />
      <p>Save. This results in a new merged table.</p>
      <img src={`${imageBaseUrl}merged_3.png`} alt="Merged Tables" style={imageStyle} />
      <h3>Unmerging Tables</h3>
      <p>Click on Edit of a merged table</p>
      <img src={`${imageBaseUrl}merged_4.png`} alt="Unmerge Tables Step 1" style={imageStyle} />
      <p>Choose the table(s) to remove</p>
      <img src={`${imageBaseUrl}merged_5.png`} alt="Unmerge Tables Step 2" style={imageStyle} />
      <p>Click Save. The resulting merged table only has the underlying tables that are still remaining in the multi-page table.</p>
      <img src={`${imageBaseUrl}merged_6.png`} alt="Unmerged Tables Result" style={imageStyle} />
    </div>
  );
};

export default GuideToMultiPageTableOperations;
