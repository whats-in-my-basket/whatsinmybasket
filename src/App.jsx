import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import styles from "./App.module.css"
import Nav from "./components/nav/Nav"
import Drawer from './components/drawer/Drawer'
import Section from './components/section/Section'
import Footer from './components/footer'
import Category from './components/Category'
import Product from './components/product/Product'
import Cart from './components/Cart'
import { ListContext, CartContext, CounterContext } from './context'

function App() {
  const [show, setShow] = useState()
  const [itemLists, setItemLists] = useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then((data) => setItemLists(data))
  }, [])

  function getShow(showState) {
    setShow(showState)
  }

  function notShow (e) {
    if(e.currentTarget.className.split("_")[1] == "opacity") {
      setShow(false)
    } 
  }

  function CounterProvider({children}) {
    const itemState = useState()
    return (
      <CounterContext.Provider value={itemState}>{children}</CounterContext.Provider>
    )
  }
  
  return (
    <BrowserRouter>
        <Drawer showState={show} />
        <div className={show ? `${styles.opacity}` : ""} onClick={notShow}></div>
        <div style={
          show ? {overflow: "hidden", height: `${document.documentElement.clientHeight}px`} 
               : {overflow: "scroll", background: "hsl(218 18% 20% / 1)"}}
        >
          <CounterProvider>
            <CartContext.Provider value={[]}>
              <ListContext.Provider value = {itemLists}>
              <Nav getShow={getShow}/>
                  <Routes>
                      <Route path="/" element={<Section/>}></Route>
                      <Route path="/fashion" element={<Category category="fashion"/>}></Route>
                      <Route path="/accessory" element={<Category category="accessory"/>}></Route>
                      <Route path="/digital" element={<Category category="digital"/>}></Route>
                      <Route path="/product/:id" element={<Product />}></Route>
                      <Route path="/cart" element={<Cart />}></Route>
                  </Routes>
              </ListContext.Provider>
              <Footer />
            </CartContext.Provider>
          </CounterProvider>
        </div>
    </BrowserRouter>
  )
}

export default App
