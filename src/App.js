import logo from './logo.svg';


import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
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
import AddProducts from './components/warehouse/AddProducts';
import UpdateProduct from './components/warehouse/UpdateProduct';


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
        <Route path='/inventories/:id' element={<RequireAuth>
          <UpdateProduct></UpdateProduct>
        </RequireAuth>}></Route>
        <Route path='/addproduct' element={<RequireAuth> <AddProducts></AddProducts></RequireAuth>
         
        }></Route>


      </Routes>




      <Footer></Footer>
    </div>
  );
}

export default App;
