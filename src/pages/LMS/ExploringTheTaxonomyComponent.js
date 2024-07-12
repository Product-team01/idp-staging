import React from 'react';

const ExploringTheTaxonomyComponent = () => {
  return (
    <div className="exploring-taxonomy-container">
      <h1>Exploring the Taxonomy</h1>
      <p>The taxonomy is the list of all attributes to be extracted from the document. The configuration of the taxonomy typically consists of:</p>
      <ul>
        <li>The attribute</li>
        <li>Data type of the attribute</li>
        <li>Formatting configuration</li>
      </ul>
      <img src="https://d1r1e7xjkfj7nz.cloudfront.net/taxonomy.png" alt="Taxonomy" style={{ width: '100%', margin: '20px 0' }} />
      <p>The taxonomy, currently, only supports a single level of hierarchy except for tables. When there are multi-page tables, there is a hierarchy where, at the base level, there is the merged table with the constituent tables being shown one level indented.</p>

      <h2>Actions on the taxonomy</h2>
      <p>The following are actions that are possible from the taxonomy screen:</p>

      <h3>Add new attribute</h3>
      <p>To add a new attribute:</p>
      <ul>
        <li>Click on + Add New</li>
        <li>Enter a name for the attribute</li>
        <li>Annotate</li>
        <li>Choose the data type</li>
        <li>Save</li>
      </ul>
      <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/add-attribute.mp4"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>



      <h3>Delete Attribute</h3>
      <p>To delete an existing attribute:</p>
      <ul>
        <li>Hover on the attribute that needs to be deleted</li>
        <li>From the context menu, choose delete</li>
        <li>Confirm the action</li>
      </ul>

      <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/delete-attribute.mp4"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>

      <h3>Multi-select attributes</h3>
      <p>Multi-select of attributes can be done to perform bulk actions. Currently, the primary action is delete:</p>
      <ul>
        <li>Hit Select All to select all the attributes (or) hover on the checkbox next to each attribute</li>
        <li>Select / deselect the requisite attributes</li>
        <li>Delete the selected attributes</li>
      </ul>

      <iframe
          src="https://d1r1e7xjkfj7nz.cloudfront.net/multi-select.mp4"
          width="640"
          height="360"
          frameBorder="0"
          allowFullScreen
        ></iframe>
    </div>
  );
};

export default ExploringTheTaxonomyComponent;
