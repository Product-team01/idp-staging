import React from 'react';
import Layout from '@theme/Layout';
import CourseCard from './CourseCard';
import './Homepage.css';

const Homepage = () => {
  const courses = [
    {
      image: 'https://d1r1e7xjkfj7nz.cloudfront.net/type2.png',
      title: 'Document Type',
      organization: 'MSD',
      level: 'Beginner',
      type: 'Course',
      href: '/LMS'
    },
    {
      image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
      title: 'Datasets',
      organization: 'Document',
      level: 'Beginner',
      type: 'Specialization',
      href: '/LMS-2'
    },
    {
      image: 'https://d1r1e7xjkfj7nz.cloudfront.net/newuser1.png',
      title: 'Machine Learning',
      organization: 'Stanford University',
      level: 'Intermediate',
      type: 'Course',
      href: '/LMS-3'
    },
    {
      image: 'https://d1r1e7xjkfj7nz.cloudfront.net/connect5b.png ',
      title: 'Introduction to Algorithms',
      organization: 'MIT',
      level: 'Advanced',
      type: 'Course',
      href: '/LMS-4'
    },
   
    // Add more courses as needed
  ];

  return (
    <Layout>
      <div className="homepage">
        <h1>Welcome to VueLearn!</h1>
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
