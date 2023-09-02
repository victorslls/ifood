import {useState, useEffect} from 'react'
import { TableMobile } from './TableMobile';

import { useCart } from "../../../../hooks/useCart";

import { TableDesktop } from "./TableDesktop/Index";
import { EmptyCart } from '../../../../components/EmptyCart';

export function Table(){

  const [windowWidth, setWindowWindth] = useState(document.documentElement.clientWidth)

  const {cart} = useCart()

  useEffect(() => {
   function updateTableComponentBasedInWindowWidth(){
    const currentWidth = document.documentElement.clientWidth
    setWindowWindth(currentWidth)
   }

   window.addEventListener('resize', updateTableComponentBasedInWindowWidth)

   return () => {
    window.removeEventListener('resize', updateTableComponentBasedInWindowWidth)
   }

  },[])

  if (cart.length === 0)
   return <EmptyCart title='Ops! Parece que você não tem pedidos, peça já!'/>
// mediaQuery area of responbility
  return windowWidth > 768? <TableDesktop/> : <TableMobile/>
}
