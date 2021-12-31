import {Navbarlink} from './navbarlink' 

export default function _(){
    return (
        <ul className='flex space-x-5 items-center justify-center pb-6'>
            
            <Navbarlink nombre={'casa'} ruta={"#"}/>
            <Navbarlink nombre={'sobre mi'} ruta={"#"}/>
            <Navbarlink nombre={'blog'} ruta={"#"}/>
            <Navbarlink nombre={'contactame'} ruta={"#"} animation/>

        </ul>
    )
}