import React from 'react'
import { cartState } from './context/Context'
import CartItem from './CartItem'
import Filters from './Filters'


const Home = () => {

  const {state:{products}}=cartState()

  return (
    <>
   <div className="home">
      <Filters />
      <div className="productContainer">
        {products.map((prod) => (
          <CartItem prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home
