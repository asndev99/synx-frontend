// SimpleFallback.js

import React from 'react';

const SimpleFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#0E0E11] text-white">
      <div className="loader"></div>
      <p className="ml-2">Loading...</p>
      <style jsx>{`
        .loader {
          border: 4px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top: 4px solid #ffffff;
          width: 30px;
          height: 30px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default SimpleFallback;
