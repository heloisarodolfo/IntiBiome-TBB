import React from 'react';
import "./index.css";
import Header from './components/Header';
import About from './components/About';
import Products from './components/Products';
import Discoveries from './components/Discoveries';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <div>
     <Header />
     <About />
     <Products />
     <Discoveries />
     <Footer />
    </div>
    </>
  );
}

export default App;
