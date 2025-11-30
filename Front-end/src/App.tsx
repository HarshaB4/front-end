import React from "react";
import "./App.css";
import Header from "./components/Header";
import MiddleContent from "./components/MiddleContent";
import CompaniesSection from "./components/CompaniesSection";
import CardsSection from "./components/CardSection";
import WhyJoinUs from "./components/WhyJoinUs";
import LoveUsSection from "./components/LoveUsSection";
import { Grow } from "@mui/material";
import GrowCollection from "./components/GrowCollection";
import ShoesCollected from "./components/ShoesCollected";
import { Article } from "@mui/icons-material";
import ArticlesSection from "./components/ArticlesSection";
import AmazingEvents from "./components/AmazingEvents";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <MiddleContent />
      <CompaniesSection />
      <CardsSection />
      <WhyJoinUs />
      <LoveUsSection />
      <GrowCollection />
      <ShoesCollected />
      <ArticlesSection />
      <AmazingEvents />
      <Footer />
    </div>
  );
}

export default App;
