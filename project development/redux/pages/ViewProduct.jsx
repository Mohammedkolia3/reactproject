import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, deleteProduct } from '../REDUX/apiProduct'
import { useLocation, useNavigate } from 'react-router-dom'

function ViewProduct() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


 const {loading, apiProduct} =  useSelector((state) => state.apiProduct)

useEffect(()=>{
dispatch(getAllProducts())
}, [])

  return (
    <div className='container p-5'>
      <h4>View Product</h4>
      <table className='table bg-primary'>
        <thead>
<tr>
  <th>Sr no.</th>
  <th>Name</th>
  <th>Qty</th>
  <th>Price</th>
  <th>Category</th>
  <th>Action</th>
</tr>
        </thead>
        <tbody>
          {
            apiProduct.map((item, index)=>{
              const {_id ,name, price, qty, category}=item
              return (
              <tr>
                <td>{index + 1}</td>
                <td>{name}</td>
                <td>{qty}</td>
                <td>{price}</td>
                <td>{category}</td>
                <td><button className='btn btn-warning' onClick={()=> navigate('/editProduct/${_id}' , {state : item})}>Edit</button> <button className='btn btn-danger' onClick={()=> dispatch(deleteProduct(_id))}>Delete</button></td>
              </tr>
              )
              
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ViewProduct
