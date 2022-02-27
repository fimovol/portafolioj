import Titulo from './titulofooter'
import Navbarfooter from './navbarfooter'
import Imagenesmisproyectos from './imagenesmisproyectos'
import Cargarmas from './cargarmas'
import Github from './githubredirect'
import Descripcion from './descipcion'
import Botonperuano from './botonperuano'

export default function _(){
  return(
    <div className='pb-7'>
      <Titulo/>
      <Navbarfooter/>
      <Imagenesmisproyectos/>
      <Cargarmas/>
      <Descripcion/>
      <Github/>
      <div className='flex items-center justify-center mt-5'>
        <Botonperuano/>
      </div>
      
    </div>
  )
}