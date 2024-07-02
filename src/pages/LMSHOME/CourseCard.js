import React from 'react';
import './CourseCard.css';

const CourseCard = ({ image, title, organization, level, type, href }) => {
  return (
    <a href={href} className="course-card-link">
      <div className="course-card">
        <img src={image} alt={title} className="course-image" onError={(e) => e.target.src = 'https://via.placeholder.com/150'} />
        <div className="course-info">
          <h3>{title}</h3>
          <p>{organization}</p>
          <p>{level} · {type}</p>
        </div>
      </div>
    </a>
  );
};

export default CourseCard;
