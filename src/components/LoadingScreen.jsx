import './loadingScreen.css';
import React from 'react';
import Spinner from './Spinner'; // Assuming you have a Spinner component

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
