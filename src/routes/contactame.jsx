import Github from '../componets/githubredirect'
import Correo from '../componets/micorreo'

export default function _(){
  return  <div className='flex flex-col items-center justify-center w-screen h-screen'>
    <h1>hola aqui estan mis datos para contactarme</h1>
    <Github/>
    <Correo/>
    <h1>más enlaces</h1>
  </div>
}