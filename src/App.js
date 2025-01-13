import { React } from 'react';
import Navigation from '../src/components/layout/Navigation';
import Footer from '../src/components/layout/Footer';
import Hero from '../src/components/sections/Hero';
import Services from './components/sections/Services';
import Expertise from './components/sections/Expertise';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

// Main App Component
const App = () => (
  <div className="bg-gray-50">
    <Navigation />
    <Hero />
    <Services />
    <Expertise />
    <Team />
    <Contact />
    <Footer />
  </div>
);

export default App;
