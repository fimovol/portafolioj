import {Boton} from './boton'

import * as containerStyles from '../estilos/estilos.module.css'
export default function _(){

  return(
    <div className='grid grid-cols-1 place-items-center w-full h-full' >
      <div>
        <div className="flex flex-col items-center">
          <h1 className="text-7xl text-secundario2 font-bold underline place-content-start font-mono uppercase">
            Hola
          </h1>
          <div className="text-secundario1 font-mono mt-5 text-4xl text-center">soy frontend developer</div>
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col">
                    
          <div className={containerStyles.hola}>my nombre es javier</div>
          <Boton nombre={'mira lo que puedo hacer'} urllink={'/quepuedohacer'}/>
        </div>
      </div>
    </div>
  )
}