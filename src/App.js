import React from 'react';
import './App.css'
import Header from './component/head/Header';
import Hero from './component/hero/Hero';
import Features from './component/features/Features';
import Portfolio from './component/portfolio/Portfolio';
import Resume from './component/resume/Resume';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
    </>
  );
};

export default App;