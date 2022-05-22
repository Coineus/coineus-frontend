import React from 'react';

const VersionPage = () => {
  return (
    <div className="text-center flex justify-center pt-16 w-screen h-screen bg-blue-600">
      <div className="font-bold text-3xl text-white">
        <p>Version 1</p>
        <p>Kubernetes Test</p>
        <p>Pod Name: {import.meta.env.VITE_HOSTNAME}</p>
      </div>
    </div>
  );
};

export default VersionPage;
