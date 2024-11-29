import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-xl text-gray-700">
          Sorry, the page you're looking for doesn't exist.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
