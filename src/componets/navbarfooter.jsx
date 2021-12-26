import { Navbarlink } from "./navbarlink";

export default function _(){
    return(
        <ul className="flex items-center justify-center flex-wrap pb-6">
            <Navbarlink nombre={'todo'} ruta={'#'}/>
            <Navbarlink nombre={'html y css'} ruta={'#'}/>
            <Navbarlink nombre={'javascript'} ruta={'#'}/>
            <Navbarlink nombre={'react'} ruta={'#'}/>
            <Navbarlink nombre={'node js'} ruta={'#'}/>
            <Navbarlink nombre={'graphql'} ruta={'#'}/>
            <Navbarlink nombre={'db sql'} ruta={'#'}/>
            
        </ul>
    )
}