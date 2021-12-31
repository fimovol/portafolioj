import Titulo from './titulofooter'
import Navbarfooter from './navbarfooter'
import Imagenesmisproyectos from './imagenesmisproyectos'
import Cargarmas from './cargarmas'
import Github from './githubredirect'

export default function _(){
    return(
        <div className='pb-7'>
            <Titulo/>
            <Navbarfooter/>
            <Imagenesmisproyectos/>
            <Cargarmas/>
            <Github/>
        </div>
    )
}