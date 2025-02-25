import React from 'react';
import Navbar from '../components/landing_components/navbar';
import backgroundImage from '../assets/back.jpg'; // Your background image
import HomeHero from '../components/home_components/homehero';
import HomeFeatures from '../components/home_components/homefeatures';
import HomeTesti from '../components/home_components/hometestimonials';
import HomeNavbar from '../components/home_components/homenavbar';
import footer from '../components/footer';
import Footer from '../components/footer';

const Home = () => {
  return (
    <div 
      className="h-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundAttachment: 'fixed' }}
    >
      {/* Navbar and Hero sections */}
      <HomeNavbar/>
      <HomeHero />
      <HomeFeatures/>
      <HomeTesti/>
      <Footer/>
    </div>
  );
};

export default Home;
