import { Navbarlink } from "./navbarlink";

export default function _(){
    return(
        <ul className="flex items-center justify-center flex-wrap pb-6">
            <Navbarlink nombre={'todo'} ruta={'/todo'}/>
            <Navbarlink nombre={'html y css'} ruta={'/htmlcss'}/>
            <Navbarlink nombre={'javascript'} ruta={'/javascript'}/>
            <Navbarlink nombre={'react'} ruta={'/react'}/>
            <Navbarlink nombre={'node js'} ruta={'/node'}/>
            <Navbarlink nombre={'graphql'} ruta={'/gql'}/>
            <Navbarlink nombre={'db sql'} ruta={'/db'}/>
            
        </ul>
    )
}