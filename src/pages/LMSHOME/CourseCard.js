import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image = '', title = 'Untitled', organization = 'Unknown', level = 'N/A', type = 'Course', href = '#' }) => {
  return (
    <div className="course-card">
      <a href={href} style={{ textDecoration: 'none' }}>
        <div className="course-image-container">
          <img src={image} alt={title} className="course-image" />
          <div className="course-duration">1h 30m</div>
        </div>
        <div className="course-info">
          <div className="course-rating" style={{ textDecoration: 'none' }}>
            <span className="star" style={{ textDecoration: 'none' }}>★</span> 5.0
          </div>
          <p className="course-type" style={{ textDecoration: 'none' }}>{type.toUpperCase()}</p>
          <h2 className="course-title" style={{ textDecoration: 'none' }}>{title}</h2>
          <p className="course-organization" style={{ textDecoration: 'none' }}>{organization}</p>
          <div className="course-author" style={{ textDecoration: 'none' }}>
            {/* Add author image and name if needed */}
          </div>
        </div>
      </a>
    </div>
  );
};

export default CourseCard;
