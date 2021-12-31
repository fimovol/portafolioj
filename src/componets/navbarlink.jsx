export function Navbarlink({nombre,ruta,animation}){
    const child =  <a href={ruta} className="hover:text-primario2 hover:underline text-secundario1 text-xl transition-all">
                        <p className='font-mono inline'>
                            {nombre}
                        </p>
                    </a>
    if(animation){
        return(
            <li className="px-5 py-2 animate-bounce">
                {child}
            </li>
        )
    }
    return(
        <li className="px-5 py-2 ">
            {child}
        </li>
    )
}