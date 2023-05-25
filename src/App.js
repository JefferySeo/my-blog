import React from 'react';
import './App.css'
import Header from './component/head/Header';
import Hero from './component/hero/Hero';
import Features from './component/features/Features';
import Portfolio from './component/portfolio/Portfolio';
import Resume from './component/resume/Resume';
import Group from './component/group/Group';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Resume />
      <Group />

      <Contact />

      <Footer />
    </>
  );
};

export default App;