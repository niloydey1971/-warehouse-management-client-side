import logo from './logo.svg';


import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarsMenu from './components/CarsMenu';
import './css/style.css'


function App() {
  return (
    
    <div>
      <CarsMenu></CarsMenu>
    </div>
  );
}

export default App;
