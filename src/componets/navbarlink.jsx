export function Navbarlink({nombre,ruta}){
    return(
        <li className="px-5 py-2">
            <a href={ruta} className="hover:text-primario2 hover:underline text-secundario1 text-xl transition-all">
                <p className='font-mono inline'>
                    {nombre}
                </p>
            </a>
        </li>
    )
}