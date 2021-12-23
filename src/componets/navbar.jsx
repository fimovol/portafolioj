import {Navbarlink} from './navbarlink' 

export default function _(){
    return (
        <ul className='flex space-x-8 items-center justify-center bg-primario3'>
            
            <Navbarlink nombre={'casa'} ruta={"#"}/>
            <Navbarlink nombre={'sobre mi'} ruta={"#"}/>
            <Navbarlink nombre={'blog'} ruta={"#"}/>
            <Navbarlink nombre={'contactame'} ruta={"#"}/>

        </ul>
    )
}