import { useSnack } from '../../../hooks/useSnack'


import {Head} from "../../../components/Head"
import { Snacks } from "../../../components/Snacks"
import { SnackTitle } from "../../../components/SnackTitle"





export default function Drinks(){

  const { drinks} = useSnack()




  return (
  <>

    <Head
      title="Drinks"
      description="Nossos    melhores burguers"/>
    <SnackTitle>Drinks</SnackTitle>
    <Snacks snacks={drinks}></Snacks>
</>
  )
}
