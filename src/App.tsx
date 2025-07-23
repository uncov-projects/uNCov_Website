import React from 'react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="w-full">
      <Navbar />
      <Hero />
      <Page1 />
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  );
};

export default App;
