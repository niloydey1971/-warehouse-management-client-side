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
import AllProductsList from './components/warehouse/AllProductsList';
import RequireAuth from './components/RequireAuth';


function App() {
  return (
    
    <div>
      <CarsMenu></CarsMenu>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/inventories" element={<AllProductsList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="*" element={<EmptyPage />} />
      <Route path="*" element={<EmptyPage />} />
      {/* require Auth Route */}
      <Route path='/inventories' element={<RequireAuth>
          <AllProductsList></AllProductsList>
        </RequireAuth>}></Route>


      </Routes>
      
     
      
     
      <Footer></Footer>
    </div>
  );
}

export default App;
