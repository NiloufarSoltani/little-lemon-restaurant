// Basic React
import React from 'react';

// Components
import Navbar from './components/Navbar';
import Routing from "./components/Routing";
import Footer from './components/Footer';

// Style
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
