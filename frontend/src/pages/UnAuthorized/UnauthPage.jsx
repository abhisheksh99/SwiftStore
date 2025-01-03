import React from 'react';

const UnauthPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Access Denied
        </h1>
        <p className="text-lg text-gray-700">
          You don't have access to view this page.
        </p>
      </div>
    </div>
  );
};

export default UnauthPage;
