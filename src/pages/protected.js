import React from 'react';
import ProtectedRoute from '../components/ProtectedRoute';

const ProtectedPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Protected Page</h1>
        <p>This page is only accessible to authenticated users.</p>
      </div>
    </ProtectedRoute>
  );
};

export default ProtectedPage;
