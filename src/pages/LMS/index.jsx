import React from 'react';
import Layout from '@theme/Layout';
import VideoPlayerComponent from '../VideoPlayerComponent';

const AnotherPage = () => {
  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <VideoPlayerComponent />
      </div>
    </Layout>
  );
};

export default AnotherPage;