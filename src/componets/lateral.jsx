import {Boton} from './boton'

export default function _(){

    return(
        <div className='grid grid-cols-1 bg-primario3'>
            <div>
                <div className="flex flex-col items-center">
                    <h1 class="text-7xl text-secundario2 font-bold underline place-content-start mt-5 font-mono uppercase">
                        Hello
                    </h1>
                <div className="text-secundario1 font-mono mt-5 text-4xl">aqui unos puntos</div>
                </div>
            </div>
            <div>
                <div className="flex justify-center items-center flex-col">
                    
                    <div className="text-4xl font-mono mb-5">my nombre es javier</div>
                    <Boton nombre={'soy frontend developer'}/>
                </div>
            </div>
        </div>
    )
}