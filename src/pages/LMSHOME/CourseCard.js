// import React from 'react';
// import './CourseCard.css';

// const CourseCard = ({ image = '', title = 'Untitled', organization = 'Unknown', level = 'N/A', type = 'Course', href = '#' }) => {
//   return (
//     <div className="course-card">
//       <a href={href} style={{ textDecoration: 'none' }}>
//         <div className="course-image-container">
//           <img src={image} alt={title} className="course-image" />
//           <div className="course-duration">1h 30m</div>
//         </div>
//         <div className="course-info">
//           <div className="course-rating" style={{ textDecoration: 'none' }}>
//             <span className="star" style={{ textDecoration: 'none' }}>★</span> 5.0
//           </div>
//           <p className="course-type" style={{ textDecoration: 'none' }}>{type.toUpperCase()}</p>
//           <h2 className="course-title" style={{ textDecoration: 'none' }}>{title}</h2>
//           <p className="course-organization" style={{ textDecoration: 'none' }}>{organization}</p>
//           <div className="course-author" style={{ textDecoration: 'none' }}>
//             {/* Add author image and name if needed */}
//           </div>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default CourseCard;

import React from 'react';

const CourseCard = ({ image = '', title = 'Untitled', organization = 'Unknown', level = 'N/A', type = 'Course', href = '#' }) => {
  return (
    <div className="unique-card">
      <a href={href} style={{ textDecoration: 'none' }}>
        <div className="unique-card-header" style={{ backgroundImage: `url(${image})` }}>
          <h4 className="unique-card-header--title">{title}</h4>
        </div>
        <div className="unique-card-body">
          <p className="unique-date">{level}</p>
          <h2 className="unique-body-content">{title}</h2>
          <p className="unique-body-content">{organization}</p>
          <p className="unique-body-content">{type.toUpperCase()}</p>
          <button className="unique-button unique-button-primary">
            <i className="fa fa-chevron-right" /> Find out more
          </button>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
