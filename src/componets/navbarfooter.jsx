import { Navbarlink } from "./navbarlink";

export default function _(){
    return(
        <ul className="flex justify-center">
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