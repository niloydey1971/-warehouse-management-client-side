import logo from './logo.svg';


import { Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import CarsMenu from './components/CarsMenu';
import './css/style.css'
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Blog from './components/Blog';
import EmptyPage from './components/EmptyPage';


function App() {
  return (
    
    <div>
      <CarsMenu></CarsMenu>
      <Home></Home>
      <Login></Login>
      <Signup></Signup>
      
      <Blog></Blog>
      <EmptyPage></EmptyPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
