export function Navbarlink({nombre,ruta}){
    return(
        <li>
            <a href={ruta} className="hover:text-secundario1 dark:hover:text-primario2 text-xl">
                <p className='font-mono'>
                    {nombre}
                </p>
            </a>
        </li>
    )
}