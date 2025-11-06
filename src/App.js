import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Slides from './components/Slides'
import MediaCoverage from './components/MediaCoverage'
import customImg from './components/images/custom-filter.webp'
import preBuilt from './components/images/pre-built.webp'
// import Screener from './screener/Screener';
import Sidebar from './sidebar/Sidebar';
function App() {
  return (
    <div className="App">
       {/* <Navbar /> */}
      {/*<div className="slides">
        <Slides />
      </div>
      <div
        className="d-flex flex-row mb-3 justify-content-evenly"
        style={{
          position: "relative", // Required for z-index to work
          zIndex: 1,
          top: "-30px",
        }}
      >
        <Cards title = "Pre-built Screen" image = {preBuilt}></Cards>
        <Cards title = "Create custom filter" image={customImg}></Cards>
      </div>
      <MediaCoverage /> */}
      {/* <Screener></Screener> */}
      <Sidebar></Sidebar>
    </div>
  );
}

export default App;
