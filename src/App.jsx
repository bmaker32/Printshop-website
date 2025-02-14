import React from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import CustomizableItems from './components/CustomizableItems';

function App() {
  return (
    <div>
      {/* Navbar with anchor links */}
      <Navbar />

      {/* Sections of the pages */}
      <div id="landing">
        <Landing />
      </div>
      <CustomizableItems/>
      <div id="services">
        <Services />
      </div>
      <div id="blog">
        <Blog />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <ContactUs />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;


{/* 
        <Landing />
        <CustomizableItems />
        <Services />
        <BentoBox/>
        <FAQ />
        <ContactUs /> */}