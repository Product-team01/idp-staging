<>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Video Player Component</title>
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        body {\n            font-family: Arial, sans-serif;\n        }\n        .container {\n            display: flex;\n        }\n        .video-player {\n            flex: 3;\n            padding: 20px;\n        }\n        .video-player iframe {\n            width: 100%;\n            height: 500px;\n        }\n        .course-content {\n            flex: 1;\n            padding: 20px;\n            border-left: 1px solid #ddd;\n            max-height: 600px;\n            overflow-y: auto;\n        }\n        .course-content ul {\n            list-style-type: none;\n            padding: 0;\n        }\n        .course-content li {\n            margin: 10px 0;\n            cursor: pointer;\n            color: #007bff;\n            display: flex;\n            justify-content: space-between;\n            align-items: center;\n        }\n        .course-content li:hover {\n            text-decoration: underline;\n        }\n        .description {\n            margin-top: 20px;\n        }\n        .section {\n            margin-bottom: 10px;\n        }\n        .section-header {\n            cursor: pointer;\n            font-weight: bold;\n            margin: 10px 0;\n        }\n        .section-content {\n            display: none;\n            padding-left: 20px;\n        }\n    "
    }}
  />
  <div className="container">
    <div className="video-player">
      <div id="video-player-container">
        <div id="video-placeholder" />
      </div>
      <div className="description" id="video-description">
        <h3 id="video-title">Introduction to the course</h3>
        <p id="video-details">
          Description of the current video will appear here.
        </p>
      </div>
    </div>
    <div className="course-content">
      <h2>Course Content</h2>
      <div className="section">
        <div className="section-header" onclick="toggleSection(this)">
          Section 1: Introduction (New) (<span id="section-1-status">0/1</span>{" "}
          | 6min)
        </div>
        <div className="section-content">
          <ul>
            <li
              id="video-0"
              onclick="changeVideo('dQw4w9WgXcQ', 'Introduction to the course', 'Step-by-Step Guide to Creating a Document Type for Classification Model in IDP Tool', 0, 'section-1-status')"
            >
              1. Introduction
            </li>
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="section-header" onclick="toggleSection(this)">
          Section 2: Introduction to Software Documentation (New) (
          <span id="section-2-status">0/2</span> | 1hr)
        </div>
        <div className="section-content">
          <ul>
            <li
              id="video-1"
              onclick="changeVideo('MH6mxkshgJQ', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 'Mastering the IDP Tool: Document Upload and Value Extraction Demo', 1, 'section-2-status')"
            >
              2. Mastering the IDP Tool: Document Upload and Value Extraction
              Demo (2min)
            </li>
            <li
              id="video-2"
              onclick="changeVideo('L_jWHffIx5E', 'Technical Communications', 'Technical Communications', 2, 'section-2-status')"
            >
              3. Technical Communications (6min)
            </li>
          </ul>
        </div>
      </div>
      {/* Add more sections as needed */}
    </div>
  </div>
</>
