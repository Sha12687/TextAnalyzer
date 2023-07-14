import React from 'react';
import Navbar from './Navbar';

const WelcomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="welcome-content">
        <h1>Welcome to Our Restaurant!</h1>
        <p>Experience the finest dining in town</p>
      </div>
      {/* Rest of the welcome page content */}
    </div>
  );
};

export default WelcomePage;
