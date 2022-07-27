import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom"
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductLIst from "./pages/ProductLIst";
import Product from "./pages/Product";
import Login from "./pages/Login";
import {useSelector} from "react-redux";
import NewProduct from "./pages/NewProduct";

const App = () => {

  const user = useSelector((state) => state.user)
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/users" element={<UserList/>}/>
              <Route path="/user/:id" element={<User/>}/>
              <Route path="/createUser" element={<NewUser/>}/>
              <Route path="products/createProduct" element={<NewProduct/>}/>
              <Route path="/products" element={<ProductLIst/>}/>
              <Route path="/product/:id" element={<Product/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>
      </BrowserRouter>
  )
};

export default App;