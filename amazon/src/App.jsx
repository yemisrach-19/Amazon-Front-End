import React from 'react'
import Header from './Components/Header/Header'
import  Carousel  from './Components/Carousel/Carousel'
import Category from './Components/Category/Category'
import Product from './Components/product/Product'

const App = () => {
  return (
    <div>

      <Header/>
      <Carousel/>
      <Category/>
      <Product/>
    </div>
  )
}

export default App