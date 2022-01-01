import { ProyectosQueRealice } from './trabajoscontenedor'
import calculadora from '../fotos/calculadora.jpg'
import luces from '../fotos/luces.jpg'
import horario from '../fotos/horarios.jpg'
import movil from '../fotos/movil.jpg'
import gqldocker from '../fotos/gql.jpg'


export default function _(){
  const calculadorahref = 'https://fimovol.github.io/calculadora/'
  const luceshref = 'https://fimovol.github.io/lucesnavide-as/'
  const horariohref = 'https://fimovol.github.io/tramoshorarios/'
  const movilhref = 'https://github.com/fimovol/fpr_interfaces_senati'
  const gqldockerhref = 'https://github.com/fimovol/test_gql_api_mongo'

  return(
    <div className='flex flex-wrap justify-center'>
      <ProyectosQueRealice src={calculadora} href={calculadorahref}/>
      <ProyectosQueRealice src={luces} href={luceshref}/>
      <ProyectosQueRealice src={horario} href={horariohref}/>
      <ProyectosQueRealice src={movil} href={movilhref}/>
      <ProyectosQueRealice src={gqldocker} href={gqldockerhref}/>
    </div>
  )
}