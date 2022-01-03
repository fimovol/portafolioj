import {Navbarlink} from './navbarlink' 

export default function _(){
  return (
    <ul className='flex lg:space-x-8 items-center justify-center pb-6 sm:space-x-1'>
            
      <Navbarlink nombre={'casa'} ruta={'/'}/>
      <Navbarlink nombre={'sobre mi'} ruta={'/about'}/>
      <Navbarlink nombre={'blog'} ruta={'/blog'}/>
      <Navbarlink nombre={'Contáctame '} ruta={'/contactame'} animation/>

    </ul>
  )
}