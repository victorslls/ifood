
import { Sidebar } from '../../components/Sidebar'
import { MyOrder } from '../../components/MyOrder'

import  LogoImg from '../../assets/logo.svg'

import { Container } from './styles'

import { Outlet } from 'react-router-dom'



export default function Main() {
  return (
    <Container>
      <Sidebar/>
      <section>

         <img src={LogoImg} />
         <Outlet/>

      </section>
      <MyOrder/>

    </Container>
  )
}
