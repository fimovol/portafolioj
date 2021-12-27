export const ProyectosQueRealice = ({src,href}) =>{
    return <div className='w-48 h-48 mx-4 my-4'>
                <a href={href} target="_blank">
                    <img className='w-full h-full rounded hover:shadow-lg hover:shadow-secundario2 border-secundario1 hover:border-x-4 hover:border-y-4 transition-all' src={src}/>
                </a>
            </div>
}