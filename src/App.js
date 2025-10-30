import './App.css';
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Slides from './components/Slides'
import Chart from './components/Chart'
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slides/>
      <div className='d-flex flex-row mb-3 justify-content-evenly'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
      <Slides/>
      <Chart/>
      <div className='d-flex flex-row mb-3 justify-content-evenly'>
        <Cards></Cards>
        <Cards></Cards>
        <Cards></Cards>
      </div>
    </div>
  );
}

export default App;
