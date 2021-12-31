import {Navbarlink} from './navbarlink' 

export default function _(){
    return (
        <ul className='flex space-x-5 items-center justify-center pb-6'>
            
            <Navbarlink nombre={'casa'} ruta={"/home"}/>
            <Navbarlink nombre={'sobre mi'} ruta={"/about"}/>
            <Navbarlink nombre={'blog'} ruta={"/blog"}/>
            <Navbarlink nombre={'Contáctame '} ruta={"/contactame"} animation/>

        </ul>
    )
}