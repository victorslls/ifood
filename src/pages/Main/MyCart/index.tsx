


import { Head } from '../../../components/Head'
import { OrderHeader } from '../../../components/OderHeader'
import { Table } from './Table'
import { Container } from './styles'




export default function Main() {
  return (
    <Container>
      <Head title='Carrinho'/>
      <OrderHeader />
      <Table />

    </Container>
  )
}
