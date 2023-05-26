import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {AiOutlineShoppingCart} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../REDUX/authSlice'

function Navbar() {

 const {carts} = useSelector((state)=> state.product)
 const {isLogin} = useSelector((state) => state.auth)
 const location = useLocation()
 const dispatch = useDispatch()
 if(location.pathname === "/login"){
  return null
 }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-between px-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/Counter">Counter</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/product">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/AddProduct">Add Product</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ViewProduct">View Product</NavLink>
        </li>
      </ul>
      <div className='d-flex gap-4'>
      {
        isLogin && <span className='badge bg-danger mt-3 cursor-pointer' onClick={()=> dispatch(logout())}>Logout</span>
      }
      <NavLink className="nav-link fs-3 position-relative" to="/cart">
<AiOutlineShoppingCart/>
<span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle top-0 start-100 mt-3" style={{width : "25px", height: "25px", display:"flex" , justifyContent:"center" , alignItems:"center"}}>
    <span className='fs-5 fw-800 text-white' >{carts.length}</span>
  </span>
      </NavLink>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar
