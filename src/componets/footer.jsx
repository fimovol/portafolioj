import Titulo from './titulofooter'
import Navbarfooter from './navbarfooter'
import Imagenesmisproyectos from './imagenesmisproyectos'
import Cargarmas from './cargarmas'
import Githubrefirect from './githubredirect'

export default function _(){
    return(
        <div className='pb-7'>
            <Titulo/>
            <Navbarfooter/>
            <Imagenesmisproyectos/>
            <Cargarmas/>
            <Githubrefirect url={'https://github.com/fimovol'}/>
        </div>
    )
}