export function Navbarlink({nombre,ruta}){
    return(
        <li className="px-2 my-4">
            <a href={ruta} className="hover:text-secundario2 hover:underline text-secundario1 text-xl transition-all">
                <p className='font-mono'>
                    {nombre}
                </p>
            </a>
        </li>
    )
}