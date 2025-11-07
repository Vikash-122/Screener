import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Slides from "./components/Slides";
import MediaCoverage from "./components/MediaCoverage";
import customImg from "./components/images/custom-filter.webp";
import preBuilt from "./components/images/pre-built.webp";
// import Screener from './screener/Screener';
import Sidebar from "./sidebar/Sidebar";
import Home from "./sidebar/Home";
import GeneralRules from "./sidebar/GeneralRules";
import UniverseBuilder from "./sidebar/UniverseBuilder";

function App() {
  const [link, setLink] = useState("Home");
  const [page, setPage] = useState("Home");
  return (
    <div>
      {link === "Home" && (
        <div className="App">
          <Navbar />
          <div className="slides">
            <Slides />
          </div>
          <div
            className="d-flex flex-row mt-0 justify-content-evenly"
            // style={{
            //   position: "relative", // Required for z-index to work
            //   zIndex: 1,
            //   top: "-90px",
            // }}
          >
            <Cards title="Pre-built Screen" image={preBuilt}></Cards>
            <Cards title="Create custom filter" image={customImg}></Cards>
          </div>
          <div className="d-flex flex-row mb-3 justify-content-evenly">
            <button onClick={()=> setLink("Screener")} id='screener-link'>STOCKS SCREENER</button>
          </div>
            <MediaCoverage />
        </div>
      )}
      {link === "Screener" && (
        <div id="home-root">
          <Sidebar page={page} setPage={setPage} setLink = {setLink}></Sidebar>
          {page === "Home" && <Home />}
          {page === "General Rules" && <GeneralRules />}
          {page === "Universe Builder" && <UniverseBuilder />}
        </div>
      )}
    </div>
  );
}

export default App;
