import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import React from "react";
import {Route, Routes, BrowserRouter, Navigate} from "react-router-dom";
import Product from "./pages/Product";
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart";
import {useSelector} from "react-redux";

const App = () => {
  const user = useSelector(state=>state.user.currentUser)

  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/products/:category' element={<ProductList/>}/>
              <Route path='/product/:id' element={<Product/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/login' element={!user?<Login/>:<Navigate replace to="/"/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>
      </BrowserRouter>
  );
};

export default App;