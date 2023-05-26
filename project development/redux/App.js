// import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Counterpage from "./pages/Counterpage";
import Home from "./pages/Home";
import Product from "./pages/Product";
import "./style.css"
import AddProduct from "./pages/AddProduct";
import ViewProduct from "./pages/ViewProduct"
import PrivateRoute from "./component/PrivateRoute";
import Login from "./pages/Login";

function App() {

  // const{number}= useSelector((state)=> state.counter)
  // useSelector((state)=> console.log(state))

  return (
<>
<Navbar/>
<PrivateRoute>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  <Route path="/Counter" element={<Counterpage/>}></Route>
  <Route path="/product" element={<Product/>}></Route>
  <Route path="/AddProduct" element={<AddProduct/>}></Route>
  <Route path="/ViewProduct" element={<ViewProduct/>}></Route>
  <Route path="/editProduct/:id" element={<AddProduct/>}></Route>
    </Routes>
    </PrivateRoute>
    <Routes>
  <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </>
  );
}

export default App;
