import { useEffect, useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import Layout from './layouts/Layout/Layout'

import Home from './pages/Home/Home'
import Calculator from './pages/Calculator/Calculator'
import Animation from './pages/Animation/Animation'
import Components from './pages/Components/Components'
import Todo from './pages/Todo/Todo'
import Products from './pages/Products/Products'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'

import { fetchProducts } from './data/product'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'


import './App.css'

const intTab = 'home'

function App() {
  const [token, setToken] = useState('')
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => setProducts(fetchProducts()), [])
  useEffect(() => console.log(products), [products])

  const [tab, setTab] = useState('')

  useEffect(() => {
    setTab(intTab)
  }, [])

  if(token === ''){ 
    return (<Login setToken={setToken} setRole={setRole}/>)
  } else {
      return (
    <div className='app-container'>
      <HashRouter>
        <Routes>
          <Route element={<Layout tab={tab} setTab={setTab} products={products} cart={cart} setToken={setToken}/>}>
            <Route path={'/'} element={<Home />}/>
            <Route path={'/home'} element={<Home />}/>
            <Route path={'/calculator'} element={<Calculator />}/>
            <Route path={'/animation'} element={<Animation />}/>
            <Route path={'/components'} element={<Components />}/>
            <Route path={'/todo'} element={<Todo />}/>
            <Route path={'/products'} element={<Products products={products} cart={cart} setCart={setCart} />}/>
            <Route path={'/cart'} element={<Cart cart={cart} setCart={setCart} />}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
  }




}

export default App
