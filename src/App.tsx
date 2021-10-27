import React from 'react';
import './App.css';
import Home from './paginas/home/Home';
import Navbar from './components/statics/navbar/Navbar';
import Footer from './components/statics/footer/Footer';
import { Grid } from "@material-ui/core";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
