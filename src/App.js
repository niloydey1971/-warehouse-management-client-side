import logo from './logo.svg';


import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarsMenu from './components/CarsMenu';
import './css/style.css'
import Home from './components/Home';


function App() {
  return (
    
    <div>
      <CarsMenu></CarsMenu>
      <Home></Home>
    </div>
  );
}

export default App;
