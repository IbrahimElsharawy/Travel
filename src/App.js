import React from "react";
import Carouselmg from "./components/Carouselmg/Carouselmg";
import Destination from "./components/Destinations/Destination";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from './components/Navbar/Navbar';
import  Search  from "./components/Search/Search";
import  Select  from "./components/Select/Select";

function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Destination/>
    <Search />
    <Select />
    <Carouselmg/>
    <Footer/>
    </>
  );
}

export default App;
