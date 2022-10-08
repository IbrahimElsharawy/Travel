import React from "react";
import Destination from "./components/Destinations/Destination";
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
    </>
  );
}

export default App;
