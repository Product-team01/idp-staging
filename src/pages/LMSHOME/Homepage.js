import React from 'react';
import Layout from '@theme/Layout';
import CourseCard from './CourseCard';
import './Homepage.css';

const Homepage = () => {
  const courses = [
    {
      image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png ', // Replace with the actual image URL
      title: 'Document Type',
      organization: 'MSD',
      level: 'Beginner',
      type: 'Course',
      href: '/video'
    },
    // Uncomment and update additional courses as needed
    // {
    //   image: 'https://example.com/image2.jpg', // Replace with the actual image URL
    //   title: 'Python for Everybody',
    //   organization: 'University of Michigan',
    //   level: 'Beginner',
    //   type: 'Specialization',
    //   href: '/another-path'
    // },
  ];

  return (
    <Layout>
      <div className="homepage">
        <h1>See what you can learn with VueLearn</h1>
        <div className="course-grid">
          {courses.map((course, index) => (
            <CourseCard
              key={index}
              {...course}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
