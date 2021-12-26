import { Boton } from './boton'

export default function _(){
    const nombre = 'este es el boton para cargar más proyectos'
    return(
        <div className='flex justify-center flex-col items-center'>
            <h1 className='font-mono text-xl text-primario2'>cargar más proyectos</h1>
            <Boton nombre={nombre}/>
        </div>
        
    )
}