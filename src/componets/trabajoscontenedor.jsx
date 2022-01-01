export const ProyectosQueRealice = ({src,href}) =>{
  return <div className='w-48 h-48 mx-4 my-4'>
    <a href={href} target="_blank" rel="noreferrer">
      <img className='w-full h-full rounded hover:shadow-lg hover:shadow-primario3 border-primario3 hover:border-x-4 hover:border-y-4 transition-all' src={src}/>
    </a>
  </div>
}