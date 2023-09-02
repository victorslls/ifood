import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'

import PizzaPage from './pages/Main/Pizza'

import BurgersPage from './pages/Main/Burgers'

import DrinksPage from './pages/Main/Drinks'

import IceCreamsPage from './pages/Main/IceCreams'

import MyCartPage from './pages/Main/MyCart'
import PaymentPage from './pages/Payment'



export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
      <Route path='/' element={<BurgersPage />} />
      <Route path='pizzas' element={<PizzaPage />} />
      <Route path='drinks' element={<DrinksPage />} />
      <Route path='ice-creams' element={<IceCreamsPage />}/>
    </Route>
    <Route path='cart' element={<MyCartPage />}/>
    <Route path='payment' element={<PaymentPage />}/>

    </Routes>
  )
}
