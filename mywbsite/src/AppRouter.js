import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'; // for React Router v6
import WelcomePage from './WelcomePage';
import MenuPage from './MenuPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
      <Route path="/menu" component={MenuPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
