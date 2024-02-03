import { useState } from 'react'
import './App.scss'
import Button from './components/Button/Button'
import Input from './components/Input/Input'
import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import Error from './pages/Error/Error'

function App() {
  return (
    <div>
      <div>
        <a href="/">Меню</a>
        <a href="/cart">Корзина</a>
      </div>

      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default App
