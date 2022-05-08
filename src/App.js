import logo from './logo.svg';


import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarsMenu from './components/CarsMenu';
import './css/style.css'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    
    <div>
      <CarsMenu></CarsMenu>
      <Home></Home>
      <Login></Login>
      <Signup></Signup>
    </div>
  );
}

export default App;
