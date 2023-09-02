import { useSnack } from "../../../hooks/useSnack"

import {Head} from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"





export default function Pizza() {
  const { pizzas} = useSnack()





  return (

  <>

    <Head
      title="Pizzas"
      description="Nossos    melhores burguers"/>
    <SnackTitle>Pizzas</SnackTitle>
    <Snacks snacks={pizzas}></Snacks>
</>
  )
}
