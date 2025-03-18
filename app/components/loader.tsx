import React from "react";

const Loader: React.FC = () => (
  <div className="loader">
    <div className="spinner"></div>
    <style jsx>{`
      .loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }
      .spinner {
        width: 50px;
        height: 50px;
        border: 5px solid #ccc;
        border-top: 5px solid #0070f3;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

export default Loader;
