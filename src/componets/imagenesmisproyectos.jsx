import { ProyectosQueRealice } from './trabajoscontenedor'
import calculadora from '../fotos/calculadora.jpg'
import luces from '../fotos/luces.jpg'
import horario from '../fotos/horarios.jpg'
import movil from '../fotos/movil.jpg'
import gqldocker from '../fotos/gql.jpg'
import api from '../fotos/api.jpg'


export default function _(){
    const imagen='https://static-cdn.jtvnw.net/jtv_user_pictures/8d62f29a-375c-4ece-beb1-3567630d5d51-profile_image-300x300.png'

    return(
        <div className='flex flex-wrap justify-center'>
            <ProyectosQueRealice src={calculadora}/>
            <ProyectosQueRealice src={luces}/>
            <ProyectosQueRealice src={horario}/>
            <ProyectosQueRealice src={movil}/>
            <ProyectosQueRealice src={gqldocker}/>
            <ProyectosQueRealice src={api}/>
        </div>
    )
}