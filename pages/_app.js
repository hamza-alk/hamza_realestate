import "../styles/globals.css";
import { useState } from "react";
import SearchBar from "../components/SearchBar.jsx";
import Home from "./Home";  
import PropertyPage from "./PropertyPage";  
import AboutMe from "./AboutMe";  

export default function MyApp({ Component, pageProps }) {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />; 
      case "property":
        return <PropertyPage />;
      case "about":
        return <AboutMe />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <div className="tabs">
        <button onClick={() => setActiveTab("home")}>Home</button>
        <button onClick={() => setActiveTab("property")}>Properties</button>
        <button onClick={() => setActiveTab("about")}>About Me</button>
      </div>
      {renderContent()}
    </div>
  );
}

