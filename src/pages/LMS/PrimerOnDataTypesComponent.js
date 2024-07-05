import React from 'react';

const PrimerOnDataTypesComponent = () => {
  return (
    <div>
      <h2>A Primer on Data Types</h2>
      <p>
        Typically, data that is extracted from documents is either stored in data stores for further use or is used in immediate post-extraction processes. In either case, specifying the data type of the extracted data is key. In view of this, Vue’s IDP allows you to define data types for the extracted data so that they can be used in the way that you would want them to subsequently. Below is a list of the data types supported by Vue, a description of each, and what customization options are natively available.
      </p>
      <table>
        <thead>
          <tr>
            <th>Data Type</th>
            <th>Description</th>
            <th>Usage</th>
            <th>Customization Options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Free form text</td>
            <td>The most prevalent of all data types, this is typically the default data type when dealing with extraction that is predominantly text of various forms.</td>
            <td>Use this when you know that there is text but are not certain of what type it is</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Alphanumeric</td>
            <td>Similar to free-form text with the difference being a focus on the text being only alphabets and numerals</td>
            <td>Use this when you want to specify a certain number of characters and when you know that they text does not contain any special characters</td>
            <td>Limit on number of characters</td>
          </tr>
          <tr>
            <td>Numeric</td>
            <td>Numeric input that can be formatted</td>
            <td>Used when the extraction consists of only numbers</td>
            <td>
              <ul>
                <li>Integer</li>
                <li>Decimal Rounded to Two Digits</li>
                <li>Decimal Rounded to Three Digits</li>
                <li>International Comma Separated</li>
                <li>Indian Comma Separated</li>
                <li>International Comma Separated, Decimal Rounded to Two Digits</li>
                <li>International Comma Separated, Decimal Rounded to Three Digits</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Name</td>
            <td>Free-form text (mostly containing only alphabets) that are identified as names</td>
            <td>Used when the underlying data is known to be a name that has different parts like a first name, last name, middle name, initials etc.</td>
            <td>
              <ul>
                <li>Full Name</li>
                <li>First Name Only</li>
                <li>Last Name Only</li>
                <li>Last Name, First Name</li>
                <li>Initials. Last Name</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Barcode</td>
            <td>The underlying data is a barcode (or QR code).</td>
            <td>Used when there is a barcode or QR from which the number (for barcode) or URL (for QR code) needs to be extracted</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Date</td>
            <td>Typical data types for identifying dates from documents</td>
            <td>Used when the data is a date that needs to be extracted, and transformed if necessary)</td>
            <td>
              <ul>
                <li>dd-mm-yyyy</li>
                <li>dd/mm/yyyy</li>
                <li>mmm dd, yyyy</li>
                <li>yyyy-mm-dd</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PrimerOnDataTypesComponent;
