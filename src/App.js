import React from'react'
import 'bootstrap/dist/css/bootstrap-reboot.min.css'
import './App.css';
import Navbar from './compo/Navbar';
import Next from './compo/Next';
import Dashbord from './compo/Dashbord';
import Graph from './compo/Graph';


function App() {
  return (
    <>
    <div id='wrapper'>
    <Navbar/>
    <div id='content-wrapper' className='d-flex flex-column'>
      <div id='content'>
      <Next/>
      <div class='container-fluid'>
        <Dashbord/>
        <Graph/>
      </div>
    </div>
    </div>
    </div>
    
    
    </>
  );
}

export default App;
