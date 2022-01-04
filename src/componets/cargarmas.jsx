import { Boton } from './boton'

export default function _(){
  return(
    <div className='flex justify-center flex-col items-center'>
      <h1 className='font-mono text-xl'>cargar más proyectos</h1>
      <Boton 
        nombre={'este es el boton para cargar más proyectos'}
        url={'https://github.com/fimovol?tab=repositories'}
      />
    </div>
  )
}