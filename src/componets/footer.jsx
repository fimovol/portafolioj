import Titulo from './titulofooter'
import Navbarfooter from './navbarfooter'
import Imagenesmisproyectos from './imagenesmisproyectos'
import Cargarmas from './cargarmas'

export default function _(){
    return(
        <div className='bg-primario3'>
            <Titulo/>
            <Navbarfooter/>
            <Imagenesmisproyectos/>
            <Cargarmas/>
        </div>
    )
}