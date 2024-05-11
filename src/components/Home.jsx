import React, { useEffect, useState } from 'react'
import { cartState } from './context/Context'
import CartItem from './CartItem'
import Filters from './Filters'


const Home = () => {

  const {state:{products},  productState: { sort, byStock, byFastDelivery, byRating, searchQuery },}=cartState();

  const [filterProducts,setFilterProducts]=useState(products);

  const transformProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
       
        sort === "lowToHigh" ? Number( a.price) -Number( b.price) :Number(b.price)  - Number( a.price)
      );
    }

    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    if (byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings >= byRating
      );
    }

    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return sortedProducts;
  };

  useEffect(()=>{

    const result=transformProducts()
    setFilterProducts(result)

  },[sort,searchQuery,byRating,byFastDelivery,byStock])

  return (
    <>
   <div className="home">
      <Filters />
      <div className="productContainer">
        {filterProducts.map((prod) => (
          <CartItem prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Home
